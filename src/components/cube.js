import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  TextureLoader,
} from "https://cdn.skypack.dev/three@0.134.0/build/three.module.js";

function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    '/assets/textures/uv-test-bw.png',
  );

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function Createcube() {

  const geometry = new BoxGeometry(1, 1, 1);
  const material = createMaterial()
  const cube = new Mesh(geometry, material);
  
  return cube;
}

export { Createcube };
