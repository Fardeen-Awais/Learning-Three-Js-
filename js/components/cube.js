import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
} from "https://cdn.skypack.dev/three@0.134.0/build/three.module.js";

function Createcube() {

  const geometry = new BoxGeometry(0.9, 1, 1);
  const material = new MeshStandardMaterial({ color: "" });
  const cube = new Mesh(geometry, material);
  
  return cube;
}

export { Createcube };
