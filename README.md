# MeshStandardMaterial with directional light


In the this commit we had learn how to use meshStandardMaterial and emmit light on it to see 3D Effect in cube.

# Table of content

Get Started with Three js - [6f6a7e2](https://github.com/Fardeen-Awais/Learning-Three-Js-/commit/6f6a7e2)

PerspectiveCamera with Real Life Example :  [b363e14](https://github.com/Fardeen-Awais/Learning-Three-Js-/commit/b363e14)

File Structure :  [6092ddf](https://github.com/Fardeen-Awais/Learning-Three-Js-/commit/6092ddf)


# Comment Reference 


## #0008:

meshBasicMaterial doesn't look like 3D. So now we are using meshStandardMaterial. There almost no significant change in syntax you can you meshStandarMaterial which allow you to **use lights in 3D world**:

 ```javaScript
 const geometry = new BoxGeometry(0.9, 1, 1);
  const material = new MeshStandardMaterial({ color: "" }); // I did'nt add any color to show you how light works
  const cube = new Mesh(geometry, material);
  
  return cube;
 ```

## #0009:

### DirectionalLight:



```javaScript
const light = new DirectionalLight('white', 8); 
```

### Light Position:

**Move the light right, up, and towards us**

 ```javaScript
 light.position.set(0, 0, 0); //* No light
 light.position.set(1, 0, 0); //*Light emmit from right side
 light.position.set(0, 1, 0); //* You can imagine a torch emmit light from upside of cube
 light.position.set(0, 0, 1); //* You can imagine you emmit torch directly at the middle of the cube respected to your self. //TODO: Quick hint: try to minus the value and see result
 ```

 ShortHand Property:

```javaScript
light.position.set(2,2,0) 
```
