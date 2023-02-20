# Getting Started with Threejs 

I am new and just started to learn with threejs. They are many ways to use three js. But some of them are more complex.

As a beginner i am using three with basic and easy way. 

Three js is an javaScript library to build modern 3D application in the Web Browser.

# Table of content

Get Started with Three js - [6f6a7e2](https://github.com/Fardeen-Awais/Learning-Three-Js-/commit/6f6a7e2)

PerspectiveCamera with Real Life Example :  [b363e14](https://github.com/Fardeen-Awais/Learning-Three-Js-/commit/b363e14)

File Structure :  [6092ddf](https://github.com/Fardeen-Awais/Learning-Three-Js-/commit/6092ddf)

# Overview:

In the previous commit, we ignore the file structure. But now we can handle our file and components with function based components. 

You can see we have three files import from the folder name 'components'. Each file return a function. 

We just transfer the our different functionality into the different file. 

We seperately now import scene, camera and renderer from different files and can handle each of them in seperately.

## Benifits of File-Structure: 

1. Better Code
2. Improves readibility
3. Helps in Debugging
4. Easier to maintain

A lot of frameworks help you to give the the file-structure. Like Nextjs and Angular.


# Comment Reference 


## #0005:

First we import all the function from different components.

```javascript
import { createCamera } from './components/camera.js'; import { createRender } from './components/render.js'; import { createScene } from './components/scene.js'; 
```
After that we call each function with declaring their variable.

**There are two benifits of doing this:**

1. First we import our function in one line
2. Second we can further console each of the functions.

```javascript
const [scene, camera, renderer] = [createScene(), createCamera(), createRender()]; 
```

```javascript
console.log({scene,camera,renderer})
```

You can see the object in the console after that:
```console
Object { scene: {…}, camera: {…}, renderer: {…} } 
```