import { WebGLRenderer } from 'https://cdn.skypack.dev/three@0.134.0/build/three.module.js';

function createRender() {
    const renderer = new WebGLRenderer({  antialias: true, antialiasQuality: 2 }); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    return renderer
}

export { createRender };