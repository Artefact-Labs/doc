---
tags:
  - special
  - ui
  - element
---
# AnimatedImage

## Detailed description
The AnimatedImage type extends the features of the Image type, providing a way to play animations stored as images containing a series of frames, such as those stored in GIF files.

## Example usage
The following example shows the simplest usage of the AnimatedImage type.

![alt text](./AnimatedImage.gif)

<code-group>
<code-block title=".at" active>
```scss
AnimatedImage{  
  id: "example",
  width: 220,
  height: 179,
  x: 0,
  y: 0,
  source: "Resources/warrior.gif"
} 
```
</code-block>

<code-block title=".atObj">
```js
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>

## Property Documentation


## source <Badge text="url(String)" type="tip" vertical="middle"/>
AnimatedImage can handle any image format supported by At, loaded from any URL scheme supported by At. The URL may be relative to the base URL of the project.
