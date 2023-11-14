
import * as THREE from '../lib/three.js/three.module.js';

const root = $("#gameView");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, root.width() / root.height(), 0.1, 1000);
console.log("created cam");
const renderer = new THREE.WebGLRenderer();
renderer.setSize(root.width(), root.height());
console.log("created Renderer");
root.append(renderer.domElement);
console.log("appended Renderer");

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

animate();