import { AmbientLight,HemisphereLight,DirectionalLight} from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js';

function createLights() {
  // We created three lights

  const ambientLight = new AmbientLight('white', 2);

  const light = new DirectionalLight('white', 3);  // #0009

  const HemiLight = new HemisphereLight( 0xffffbb, 0x080820, 1.4 );

  light.position.set(1,1,1) 
  return HemiLight;
}

export { createLights };