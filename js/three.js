import * as THREE from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js';

const container = document.querySelector('#scene-container'); // Import from html


const scene = new THREE.Scene(); // Adding scene

scene.background = new THREE.Color('skyblue'); // We Change the background 


const camera = new THREE.PerspectiveCamera( // # 0001
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


const renderer = new THREE.WebGLRenderer();  // # 0001
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// #0002
const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); 
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Treat it as a Toy

camera.position.z = 5;


function animate() {   // #0003
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate()
//   animate(); If you comment the animate function you don't see any result