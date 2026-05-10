import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  provinceId: string;
  provinceName: string;
};

type ShapeRecord = {
  paths: string[];
  viewBox: { x: number; y: number; width: number; height: number };
};

let shapesCache: Promise<Record<string, ShapeRecord>> | null = null;
const loadShapes = (): Promise<Record<string, ShapeRecord>> => {
  if (!shapesCache) {
    shapesCache = fetch("/assets/china-province-shapes.json")
      .then((r) => r.json())
      .then((data) => data.provinces ?? {});
  }
  return shapesCache;
};

const parseRings = (path: string): Array<Array<{ x: number; y: number }>> => {
  const tokens = path.match(/[MLZ]|-?\d+(?:\.\d+)?/g) ?? [];
  const rings: Array<Array<{ x: number; y: number }>> = [];
  let ring: Array<{ x: number; y: number }> = [];
  let cmd = "";
  let i = 0;
  const close = () => {
    if (ring.length > 2) rings.push(ring);
    ring = [];
  };
  while (i < tokens.length) {
    const tok = tokens[i++];
    if (tok === "M" || tok === "L") {
      cmd = tok;
      if (tok === "M") close();
      const x = Number(tokens[i++]);
      const y = Number(tokens[i++]);
      if (Number.isFinite(x) && Number.isFinite(y)) ring.push({ x, y });
    } else if (tok === "Z") {
      close();
      cmd = "";
    } else if (cmd === "M" || cmd === "L") {
      const x = Number(tok);
      const y = Number(tokens[i++]);
      if (Number.isFinite(x) && Number.isFinite(y)) ring.push({ x, y });
    }
  }
  close();
  return rings;
};

const simplify = (ring: Array<{ x: number; y: number }>, max = 360) => {
  if (ring.length <= max) return ring;
  const step = Math.ceil(ring.length / max);
  return ring.filter((_, idx) => idx % step === 0 || idx === ring.length - 1);
};

export default function Map3D({ provinceId, provinceName }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    host.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, -5.8, 4.85);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x718f7d, 2.4));
    const key = new THREE.DirectionalLight(0xffffff, 3);
    key.position.set(-3.6, -4.4, 7.2);
    scene.add(key);

    const group = new THREE.Group();
    scene.add(group);

    const surface = new THREE.MeshStandardMaterial({ color: 0xe7e0c7, roughness: 0.76, metalness: 0.04, side: THREE.DoubleSide });
    const sides = new THREE.MeshStandardMaterial({ color: 0x496b5e, roughness: 0.84, metalness: 0.03, side: THREE.DoubleSide });
    const edge = new THREE.LineBasicMaterial({ color: 0x12221c, transparent: true, opacity: 0.85 });

    const targetRotation = new THREE.Vector2(-0.08, 0.1);
    const rotation = new THREE.Vector2(-0.08, 0.1);
    let scale = 1;
    let target = 1.4;
    let rafId = 0;
    const drag = { active: false, x: 0, y: 0 };

    const buildModel = (record: ShapeRecord) => {
      const { x, y, width, height } = record.viewBox;
      const cx = x + width / 2;
      const cy = y + height / 2;
      const factor = 5.2 / Math.max(width, height);
      record.paths.forEach((path) => {
        parseRings(path).forEach((rawRing) => {
          const ring = simplify(rawRing);
          if (ring.length < 3) return;
          const shape = new THREE.Shape();
          const first = { x: (ring[0].x - cx) * factor, y: -(ring[0].y - cy) * factor };
          shape.moveTo(first.x, first.y);
          ring.slice(1).forEach((p) => shape.lineTo((p.x - cx) * factor, -(p.y - cy) * factor));
          shape.lineTo(first.x, first.y);
          const geom = new THREE.ExtrudeGeometry(shape, { depth: 0.34, bevelEnabled: true, bevelSize: 0.035, bevelThickness: 0.045, bevelSegments: 3, curveSegments: 1 });
          geom.computeVertexNormals();
          group.add(new THREE.Mesh(geom, [surface, sides]));
          group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geom, 24), edge));
        });
      });
    };

    let mounted = true;
    loadShapes().then((shapes) => {
      if (!mounted || !shapes[provinceId]) return;
      buildModel(shapes[provinceId]);
      target = provinceId === "xinjiang" || provinceId === "tibet" || provinceId === "inner-mongolia" ? 1.2 : 1.5;
    });

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    const onDown = (e: PointerEvent) => {
      drag.active = true;
      drag.x = e.clientX;
      drag.y = e.clientY;
      renderer.domElement.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!drag.active) return;
      targetRotation.y += (e.clientX - drag.x) * 0.006;
      targetRotation.x = Math.max(-0.42, Math.min(0.28, targetRotation.x + (e.clientY - drag.y) * 0.004));
      drag.x = e.clientX;
      drag.y = e.clientY;
    };
    const onUp = (e: PointerEvent) => {
      drag.active = false;
      renderer.domElement.releasePointerCapture?.(e.pointerId);
    };
    renderer.domElement.addEventListener("pointerdown", onDown);
    renderer.domElement.addEventListener("pointermove", onMove);
    renderer.domElement.addEventListener("pointerup", onUp);
    renderer.domElement.addEventListener("pointerleave", onUp);

    const animate = () => {
      rotation.lerp(targetRotation, 0.08);
      scale += (target - scale) * 0.08;
      group.rotation.x = rotation.x;
      group.rotation.z = rotation.y;
      group.scale.setScalar(scale);
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.dispose();
      group.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          node.geometry.dispose();
          (Array.isArray(node.material) ? node.material : [node.material]).forEach((m) => m.dispose());
        }
      });
      host.innerHTML = "";
    };
  }, [provinceId]);

  return (
    <div ref={hostRef} aria-label={`3D model of ${provinceName}`} className="absolute inset-0" />
  );
}
