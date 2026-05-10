import { useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
import * as THREE from "three";
//#region src/components/map/EarthIntro.tsx
var SPIN_MS = 4e3;
var HOLD_MS = 1500;
var ZOOM_MS = 1500;
var TOTAL_MS = SPIN_MS + HOLD_MS + ZOOM_MS;
var CHINA_LON_DEG = 105;
var CHINA_LAT_DEG = 35;
var CHINA_U = (CHINA_LON_DEG + 180) / 360;
var CHINA_V = (90 - CHINA_LAT_DEG) / 180;
var CHINA_THETA_PHI = CHINA_U * 2 * Math.PI;
var CHINA_THETA_LAT = CHINA_V * Math.PI;
var TARGET_Y = Math.PI / 2 - CHINA_THETA_PHI;
var TARGET_X = Math.atan2(Math.cos(CHINA_THETA_LAT), Math.sin(CHINA_THETA_LAT));
function EarthIntro({ onDone }) {
	const hostRef = useRef(null);
	const doneRef = useRef(onDone);
	doneRef.current = onDone;
	useEffect(() => {
		const host = hostRef.current;
		if (!host) return;
		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
			powerPreference: "high-performance"
		});
		renderer.setClearColor(0, 0);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
		host.appendChild(renderer.domElement);
		Object.assign(renderer.domElement.style, {
			width: "100%",
			height: "100%",
			display: "block"
		});
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
		camera.position.set(0, 0, 3);
		scene.add(new THREE.AmbientLight(16777215, .55));
		const sun = new THREE.DirectionalLight(16777215, 1.4);
		sun.position.set(-2.5, 1.6, 4);
		scene.add(sun);
		const earthTex = new THREE.TextureLoader().load("/assets/earth-bluemarble.jpg");
		earthTex.colorSpace = THREE.SRGBColorSpace;
		const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 64), new THREE.MeshStandardMaterial({
			map: earthTex,
			roughness: .92,
			metalness: 0
		}));
		const endY = TARGET_Y;
		const startY = endY + Math.PI * 3;
		earth.rotation.y = startY;
		scene.add(earth);
		const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.05, 64, 32), new THREE.ShaderMaterial({
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
		}));
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
		let start = null;
		let raf = 0;
		const animate = (t) => {
			if (start === null) start = t;
			const elapsed = t - start;
			const spinT = Math.min(elapsed, SPIN_MS) / SPIN_MS;
			const spinEased = 1 - Math.pow(1 - spinT, 3);
			const zoomRaw = Math.max(0, elapsed - SPIN_MS - HOLD_MS) / ZOOM_MS;
			const zoomEased = 1 - Math.pow(1 - Math.min(1, zoomRaw), 3);
			const yRot = startY + (endY - startY) * spinEased;
			earth.rotation.y = yRot;
			atmosphere.rotation.y = yRot;
			earth.rotation.x = TARGET_X * spinEased;
			atmosphere.rotation.x = TARGET_X * spinEased;
			camera.position.z = 3 - zoomEased * 1.55;
			host.style.opacity = String(1 - zoomEased);
			renderer.render(scene, camera);
			if (elapsed < TOTAL_MS) raf = requestAnimationFrame(animate);
			else doneRef.current();
		};
		raf = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			earthTex.dispose();
			earth.geometry.dispose();
			earth.material.dispose();
			atmosphere.geometry.dispose();
			atmosphere.material.dispose();
			renderer.dispose();
			host.innerHTML = "";
		};
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref: hostRef,
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 z-40"
	});
}
//#endregion
export { EarthIntro as default };
