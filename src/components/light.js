import { AmbientLight,HemisphereLight,DirectionalLight} from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js';

function createLights() {
  // We created three lights

  const ambientLight = new AmbientLight('white', 1.5);

  const directLight = new DirectionalLight('white', 3);  // #0009

  const HemiLight = new HemisphereLight( 0xffffbb, 0x080820, 1 );

  HemiLight.position.set(1,1,0) // A torch you fill at the up and at the right
  return HemiLight;
}

export { createLights };