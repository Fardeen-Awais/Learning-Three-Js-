import { DirectionalLight } from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 8);  // #0009
  light.position.set(2,2,0) 
  return light;
}

export { createLights };