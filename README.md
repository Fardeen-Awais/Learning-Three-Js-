# Getting Started with Threejs 

I am new and just started to learn with threejs. They are many ways to use three js. But some of them are more complex.

As a beginner i am using three with basic and easy way. 

Three js is an javaScript library to build modern 3D application in the Web Browser.

# Table of content



# Comment Reference 
## 0001:

### **Understading the concepts of Scene, Camera and renderer**

#### Definations :

**Scene is** a container that holds all of the objects you want to render in your 3D world. You can add various types of objects to the scene, such as meshes, lights, and cameras.

**Camera** defines the point of view from which the scene will be rendered. There are different types of cameras available in Three.js, such as PerspectiveCamera, OrthographicCamera, and others.

**Renderer** is responsible for drawing the scene and the objects in it. It takes the scene and the camera as input and outputs the final image to the screen. Three.js provides various types of renderers, such as WebGLRenderer, SVGRenderer, CanvasRenderer, and so on.

#### Real Life Examples that a seven year old can understand:


**Think of a Scene in Three.js like a stage or a playground.** It's a place where you can put all sorts of objects, like toys, balls, and even characters, to create a fun and interactive environment. The Scene in Three.js is similar - it's a place where you can put different types of objects like shapes, models, and textures to create a 3D world.

**A Camera is like a person's eyes.** Just like how we see the world through our eyes, a Camera in Three.js defines the point of view from which you can see the objects in the scene. You can think of it as if you are standing at a particular position and looking at the stage or playground. 

You can move around to see different objects from different angles, and the Camera in Three.js allows you to do the same.

**Finally, a Renderer in Three.js is like a painter who paints what you see in front of you.** Just like how a painter puts different colors and textures on a canvas to create a painting. 
 
> A Renderer in Three.js takes the objects in the Scene and renders them on a screen or canvas.

It combines the position of the Camera with the objects in the Scene to create an image that you can see on your screen.

**Here's an example:** Imagine you are playing with toys on a playground. The playground is the Scene, and the toys are the objects you can put in the Scene. You can move around the playground and look at the toys from different angles, just like how you can change the Camera position in Three.js to see different objects from different perspectives.

Now, imagine that someone is taking pictures of you playing with your toys. That person is like the Renderer. They are capturing the scene and the toys from your point of view and creating a picture that you can keep and look at later.

## 0002:

Explanation of the code that a seven-year-old can understand:

We are creating a 3D cube using Three.js. It's like making a toy block out of digital materials. We are giving the cube a green color.

##### Create a new cube

We are creating a 3D cube using Three.js. It's like making a toy block out of digital materials. We are giving the cube a green color.


```javascript
const geometry = new THREE.BoxGeometry(); // It act as a toy shape
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Toy material
const cube = new THREE.Mesh(geometry, material); // Toy
scene.add(cube); // Adding toy to the scene
```

##### Position the camera
We have a camera that can see the 3D cube we created earlier. We are positioning the camera in such a way that it's 5 units away from the cube. It's like taking a picture of the cube from a distance.

```javascript
camera.position.z = 5;
```

# 0003

##### Render the scene


```javascript 
function animate() {
requestAnimationFrame(animate);
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
renderer.render(scene, camera);
}
animate(); //Without calling animate function you will see nothing
```

We want to show the 3D cube on a computer screen. To do that, we have to create a virtual world where the cube exists. We call this world a "scene". Then, we have to use a special program called a "renderer" to show the scene on the computer screen. 

The renderer takes a picture of the scene from the camera's point of view and shows it on the screen. We are also making the cube spin by a little bit each time. This makes the cube look like it's moving. We are doing this again and again, and it makes the cube look like it's alive!
