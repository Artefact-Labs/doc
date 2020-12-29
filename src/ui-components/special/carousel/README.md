---
tags:
  - special
  - ui
  - element
---
# Carousel

## Detailed description
The Carousel component is used to display large numbers of visual content on a rotating timer. A carousel by default has a slide transition.

## Example usage
The following example shows the simplest usage of the Carousel type.

![alt text](./Carousel.gif)

<code-group>
<code-block title=".at" active>
```scss
Carousel{  
  id: "example",
  height: 447,
  y: 0,
  sources: [
    "Resources/steve.jobs.jpg",
    "Resources/video-bg.jpg",
    "Resources/intro-bg.jpg"
  ],
  width: 515
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

## sources <Badge text="Array of url" type="tip" vertical="middle"/>
Carousel can handle any image format supported by At, loaded from any URL scheme supported by At. The URL may be relative to the base URL of the project.

## hideControl <Badge text="bool" type="tip" vertical="middle"/>
Hide the two arrow which control the slide of images.

## hideDelemiters <Badge text="bool" type="tip" vertical="middle"/>
...

## prevIcon <Badge text="String" type="tip" vertical="middle"/>
Define the icon for the previous button. See the Icon element for more information.

## nextIcon <Badge text="String" type="tip" vertical="middle"/>
Define the icon for the next button. See the Icon element for more information.
