import { Scene , Color } from "https://cdn.skypack.dev/three@0.134.0/build/three.module.js";

function createScene() {
  const scene = new Scene();
  scene.background = new Color("#032e2e");

  return scene
}

export { createScene };
