import * as THREE from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js'; 

import { createCamera } from './components/camera.js'; import { createRender } from './components/render.js'; import { createScene } from './components/scene.js'; import { Createcube } from './components/cube.js'; import { createLights } from './components/light.js'; 


const [scene, camera, renderer,cube,light] = [createScene(), createCamera(), createRender(),Createcube(),createLights()]; // #0005

console.log({scene,camera,renderer})

scene.add(cube,light); //Adding cube into the scene



function animate() {   // #0003
  requestAnimationFrame(animate);

  cube.rotation.y += 0.01;
  cube.rotation.x += 0.001;

  renderer.render(scene, camera); // The final component of our simple app is the renderer, which is responsible for drawing (rendering) the scene.
}
animate()
// //   animate(); If you comment the animate function you don't see any result