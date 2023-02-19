import * as THREE from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js';
import { createCamera } from './components/camera.js';

const container = document.querySelector('#scene-container'); 
console.log(container)

const scene = new THREE.Scene(); 

scene.background = new THREE.Color('#032e2e'); 

const camera = createCamera() // # 0005


const renderer = new THREE.WebGLRenderer();  
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(0.9, 1, 1); 

const material = new THREE.MeshBasicMaterial({color:'pink'}); // MeshBasicMaterial did'nt need any light

const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Treat it as a Toy

// camera.position.set(0, 1, 2); // We can play with position as well
camera.position.z = 5;


function animate() {   // #0003
  requestAnimationFrame(animate);

  cube.rotation.x -= 0.1;
  // cube.rotation.y += 0.02;
  cube.rotation.z -= 0.01

  renderer.render(scene, camera); // The final component of our simple app is the renderer, which is responsible for drawing (rendering) the scene.
}
animate()
//   animate(); If you comment the animate function you don't see any result