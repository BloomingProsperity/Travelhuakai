import * as THREE from "./assets/three.module.min.js";

const canvas = document.querySelector("#map-3d-canvas");
const host = document.querySelector("#china-map-visual");

const state = {
  mode: host?.dataset.mapMode || "china",
  provinceId: host?.dataset.provinceId || "",
  provinceName: "",
  shapes: null,
  activeMeshKey: "",
  targetRotation: new THREE.Vector2(-0.08, 0.1),
  rotation: new THREE.Vector2(-0.08, 0.1),
  targetScale: 1,
  scale: 1,
  isDragging: false,
  dragStart: null
};

if (canvas && host) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, -5.8, 4.85);
  camera.up.set(0, 0, 1);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x718f7d, 2.65));

  const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
  keyLight.position.set(-3.6, -4.4, 7.2);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x90d7ca, 1.8);
  rimLight.position.set(4.4, 3.8, 3.2);
  scene.add(rimLight);

  const modelGroup = new THREE.Group();
  const labelGroup = new THREE.Group();
  scene.add(modelGroup);
  scene.add(labelGroup);

  const surfaceMaterial = new THREE.MeshStandardMaterial({
    color: 0xe7e0c7,
    roughness: 0.76,
    metalness: 0.04,
    side: THREE.DoubleSide
  });

  const sideMaterial = new THREE.MeshStandardMaterial({
    color: 0x496b5e,
    roughness: 0.84,
    metalness: 0.03,
    side: THREE.DoubleSide
  });

  const edgeMaterial = new THREE.LineBasicMaterial({
    color: 0x12221c,
    transparent: true,
    opacity: 0.9
  });

  const ghostEdgeMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5
  });

  const clearGroup = (group) => {
    while (group.children.length) {
      const child = group.children.pop();
      child.traverse?.((node) => {
        node.geometry?.dispose?.();
        if (Array.isArray(node.material)) {
          node.material.forEach((material) => {
            if (material.userData?.disposeWithNode) {
              material.map?.dispose?.();
              material.dispose?.();
            }
          });
        } else if (node.material?.userData?.disposeWithNode) {
          node.material.map?.dispose?.();
          node.material?.dispose?.();
        }
      });
    }
  };

  const parsePathToRings = (pathData) => {
    const tokens = pathData.match(/[MLZ]|-?\d+(?:\.\d+)?/g) || [];
    const rings = [];
    let ring = [];
    let index = 0;
    let command = "";

    const closeRing = () => {
      if (ring.length > 2) {
        rings.push(ring);
      }
      ring = [];
    };

    while (index < tokens.length) {
      const token = tokens[index++];
      if (token === "M" || token === "L") {
        command = token;
        if (command === "M") {
          closeRing();
        }
        const x = Number(tokens[index++]);
        const y = Number(tokens[index++]);
        if (Number.isFinite(x) && Number.isFinite(y)) {
          ring.push({ x, y });
        }
      } else if (token === "Z") {
        closeRing();
        command = "";
      } else if (command === "M" || command === "L") {
        const x = Number(token);
        const y = Number(tokens[index++]);
        if (Number.isFinite(x) && Number.isFinite(y)) {
          ring.push({ x, y });
        }
      }
    }
    closeRing();
    return rings;
  };

  const simplifyRing = (ring, maxPoints = 460) => {
    if (ring.length <= maxPoints) {
      return ring;
    }
    const step = Math.ceil(ring.length / maxPoints);
    return ring.filter((_, index) => index % step === 0 || index === ring.length - 1);
  };

  const createLabelTexture = (text) => {
    const labelCanvas = document.createElement("canvas");
    labelCanvas.width = 1024;
    labelCanvas.height = 256;
    const context = labelCanvas.getContext("2d");
    context.clearRect(0, 0, labelCanvas.width, labelCanvas.height);
    context.font = "900 92px Inter, system-ui, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.lineJoin = "round";
    context.strokeStyle = "rgba(255,255,255,0.92)";
    context.lineWidth = 18;
    context.strokeText(text || "", 512, 128);
    context.fillStyle = "#17211d";
    context.fillText(text || "", 512, 128);
    const texture = new THREE.CanvasTexture(labelCanvas);
    texture.anisotropy = 4;
    return texture;
  };

  const addModelLabel = (text, width, height) => {
    const texture = createLabelTexture(text);
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false
    });
    material.userData.disposeWithNode = true;
    const sprite = new THREE.Sprite(material);
    sprite.position.set(0, -height * 0.02, 0.62);
    sprite.scale.set(Math.min(width * 0.9, 2.8), Math.min(height * 0.24, 0.7), 1);
    labelGroup.add(sprite);
  };

  const buildProvinceModel = (provinceId, provinceName) => {
    if (!state.shapes?.[provinceId]) {
      return;
    }

    const shapeRecord = state.shapes[provinceId];
    const key = `${provinceId}:${provinceName}`;
    if (state.activeMeshKey === key) {
      return;
    }
    state.activeMeshKey = key;
    clearGroup(modelGroup);
    clearGroup(labelGroup);

    const { x, y, width, height } = shapeRecord.viewBox;
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const scale = 5.2 / Math.max(width, height);
    const convertPoint = (point) => new THREE.Vector2(
      (point.x - centerX) * scale,
      -(point.y - centerY) * scale
    );

    const shapeMeshes = [];
    shapeRecord.paths.forEach((pathData) => {
      parsePathToRings(pathData).forEach((rawRing) => {
        const ring = simplifyRing(rawRing);
        if (ring.length < 3) {
          return;
        }

        const first = convertPoint(ring[0]);
        const shape = new THREE.Shape();
        shape.moveTo(first.x, first.y);
        ring.slice(1).forEach((point) => {
          const next = convertPoint(point);
          shape.lineTo(next.x, next.y);
        });
        shape.lineTo(first.x, first.y);

        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: 0.34,
          bevelEnabled: true,
          bevelSize: 0.035,
          bevelThickness: 0.045,
          bevelSegments: 3,
          curveSegments: 1
        });
        geometry.computeVertexNormals();

        const mesh = new THREE.Mesh(geometry, [surfaceMaterial, sideMaterial]);
        mesh.castShadow = false;
        mesh.receiveShadow = true;
        modelGroup.add(mesh);
        shapeMeshes.push(mesh);

        const edges = new THREE.LineSegments(
          new THREE.EdgesGeometry(geometry, 24),
          edgeMaterial
        );
        modelGroup.add(edges);

        const highlight = new THREE.LineSegments(
          new THREE.EdgesGeometry(geometry, 42),
          ghostEdgeMaterial
        );
        highlight.position.z = 0.018;
        modelGroup.add(highlight);
      });
    });

    if (!shapeMeshes.length) {
      return;
    }

    const baseGeometry = new THREE.CylinderGeometry(2.95, 3.28, 0.16, 96);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4dfd8,
      roughness: 0.9,
      metalness: 0.02,
      transparent: true,
      opacity: 0.72
    });
    baseMaterial.userData.disposeWithNode = true;
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.rotation.x = Math.PI / 2;
    base.position.z = -0.13;
    modelGroup.add(base);

    addModelLabel(provinceName, width * scale, height * scale);
    state.targetRotation.set(-0.08, 0.1);
    state.rotation.copy(state.targetRotation);
    state.targetScale = provinceId === "xinjiang" || provinceId === "tibet" || provinceId === "inner-mongolia" ? 1.24 : 1.52;
  };

  const loadShapes = async () => {
    if (state.shapes) {
      return state.shapes;
    }
    const response = await fetch("./assets/china-province-shapes.json");
    if (!response.ok) {
      throw new Error("Province boundary asset failed to load.");
    }
    const data = await response.json();
    state.shapes = data.provinces || {};
    return state.shapes;
  };

  const updateModel = async () => {
    if (state.mode !== "province" || !state.provinceId) {
      state.activeMeshKey = "";
      clearGroup(modelGroup);
      clearGroup(labelGroup);
      return;
    }

    try {
      await loadShapes();
      buildProvinceModel(state.provinceId, state.provinceName || state.provinceId);
    } catch (error) {
      console.warn(error);
    }
  };

  const applyViewState = (detail = {}) => {
    state.mode = detail.mode || host.dataset.mapMode || "china";
    state.provinceId = detail.provinceId || host.dataset.provinceId || "";
    state.provinceName = detail.provinceName || state.provinceId;
    updateModel();
  };

  window.addEventListener("china-map-viewchange", (event) => applyViewState(event.detail));

  const resize = () => {
    const rect = host.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  const pointerPosition = (event) => ({
    x: event.clientX ?? event.touches?.[0]?.clientX ?? 0,
    y: event.clientY ?? event.touches?.[0]?.clientY ?? 0
  });

  canvas.addEventListener("pointerdown", (event) => {
    state.isDragging = true;
    state.dragStart = pointerPosition(event);
    canvas.setPointerCapture?.(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!state.isDragging || !state.dragStart) {
      return;
    }
    const point = pointerPosition(event);
    const dx = point.x - state.dragStart.x;
    const dy = point.y - state.dragStart.y;
    state.dragStart = point;
    state.targetRotation.y += dx * 0.006;
    state.targetRotation.x = Math.max(-0.42, Math.min(0.28, state.targetRotation.x + dy * 0.004));
  });

  const stopDrag = (event) => {
    state.isDragging = false;
    state.dragStart = null;
    if (event?.pointerId !== undefined) {
      canvas.releasePointerCapture?.(event.pointerId);
    }
  };
  canvas.addEventListener("pointerup", stopDrag);
  canvas.addEventListener("pointerleave", stopDrag);

  const isCanvasVisible = () => state.mode === "province" && modelGroup.children.length > 0;

  const animate = () => {
    if (isCanvasVisible()) {
      const dx = state.targetRotation.x - state.rotation.x;
      const dy = state.targetRotation.y - state.rotation.y;
      const ds = state.targetScale - state.scale;
      const isSettling = state.isDragging
        || Math.abs(dx) > 0.0008
        || Math.abs(dy) > 0.0008
        || Math.abs(ds) > 0.0008;

      if (isSettling) {
        state.rotation.lerp(state.targetRotation, 0.08);
        state.scale += ds * 0.08;
        modelGroup.rotation.x = state.rotation.x;
        modelGroup.rotation.z = state.rotation.y;
        modelGroup.scale.setScalar(state.scale);
        labelGroup.rotation.copy(modelGroup.rotation);
        labelGroup.scale.setScalar(state.scale);
        renderer.render(scene, camera);
      }
      window.__chinaProvinceModelReady = modelGroup.children.length > 0;
    }
    requestAnimationFrame(animate);
  };

  applyViewState();
  animate();
}
