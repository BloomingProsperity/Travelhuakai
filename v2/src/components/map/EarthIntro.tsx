import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = { onDone: () => void };

const SPIN_MS = 4000;
const HOLD_MS = 1500;
const ZOOM_MS = 1500;
const TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;

// Verified against the actual asset (v2/public/assets/earth-bluemarble.jpg, 2:1 equirectangular,
// prime meridian at horizontal centre, Africa centred). Three.js SphereGeometry default UV:
// vertex.x = -r·cos(u·2π)·sin(v·π); vertex.y = r·cos(v·π); vertex.z = r·sin(u·2π)·sin(v·π).
// At rotation = 0, +Z (camera-facing) point sits at u = 0.25, v = 0.5 → lon -90°, lat 0° (Americas).
// To bring China centre (lon 105°E, lat 35°N → u = 0.79167, v = 0.30556) to the camera:
//   1. Y-rotation: α_y = π/2 - u·2π = π/2 - 4.974 = -3.403 rad → puts China centre at world (0, +0.574, +0.819)
//   2. X-rotation: α_x = arctan(0.574 / 0.819) = 0.611 rad ≈ 35° → tilts that point onto +Z exactly
const CHINA_LON_DEG = 105;
const CHINA_LAT_DEG = 35;
const CHINA_U = (CHINA_LON_DEG + 180) / 360;
const CHINA_V = (90 - CHINA_LAT_DEG) / 180;
const CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
const CHINA_THETA_LAT = CHINA_V * Math.PI;
const TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI; // -3.403 rad
const TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT)); // 0.611 rad

export default function EarthIntro({ onDone }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    host.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 3.0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
    sun.position.set(-2.5, 1.6, 4);
    scene.add(sun);

    const loader = new THREE.TextureLoader();
    const earthTex = loader.load("/assets/earth-bluemarble.jpg");
    earthTex.colorSpace = THREE.SRGBColorSpace;

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 96, 64),
      new THREE.MeshStandardMaterial({ map: earthTex, roughness: 0.92, metalness: 0 })
    );
    // 1.5 revolutions before landing on China (eastward visual direction = negative Y rotation)
    const endY = TARGET_Y;
    const startY = endY + Math.PI * 3;
    earth.rotation.y = startY;
    scene.add(earth);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.05, 64, 32),
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
            gl_FragColor = vec4(0.40, 0.68, 1.0, 1.0) * intensity;
          }`
      })
    );
    scene.add(atmosphere);

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

    let start: number | null = null;
    let raf = 0;

    const animate = (t: number) => {
      if (start === null) start = t;
      const elapsed = t - start;

      const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
      const spinEased = 1 - Math.pow(1 - spinT, 3); // ease-out cubic
      const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
      const zoomT = Math.min(1, zoomRaw);
      const zoomEased = 1 - Math.pow(1 - zoomT, 3);

      const yRot = startY + (endY - startY) * spinEased;
      earth.rotation.y = yRot;
      atmosphere.rotation.y = yRot;
      earth.rotation.x = TARGET_X * spinEased;
      atmosphere.rotation.x = TARGET_X * spinEased;

      camera.position.z = 3.0 - zoomEased * 1.55;
      host.style.opacity = String(1 - zoomEased);

      renderer.render(scene, camera);

      if (elapsed < TOTAL_MS) {
        raf = requestAnimationFrame(animate);
      } else {
        doneRef.current();
      }
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      earthTex.dispose();
      earth.geometry.dispose();
      (earth.material as THREE.Material).dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      renderer.dispose();
      host.innerHTML = "";
    };
  }, []);

  return <div ref={hostRef} aria-hidden className="pointer-events-none absolute inset-0 z-40" />;
}
