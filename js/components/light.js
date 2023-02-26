import { DirectionalLight } from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 8); 

  // move the light right, up, and towards us
  // light.position.set(0, 0, 0); //* No light
  // light.position.set(1, 0, 0); //*Light emmit from right side
//  light.position.set(0, 1, 0); //* You can imagine a torch emmit light from upside of cube
// light.position.set(0, 0, 1); //* You can imagine you emmit torch directly at the middle of the cube respected to your self. Quick hint: try to minus the value and see result
light.position.set(2,2,0) 

  return light;
}

export { createLights };