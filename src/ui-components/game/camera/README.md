---
tags:
  - game
  - ui
  - element
---
# Camera

## Detailed description
The Camera Manager is a plugin that belongs to a Scene and is responsible for managing all of the Scene Cameras.
By default you can access the Camera Manager from within a Scene using this.cameras, although this can be changed in your game config.
Create new Cameras using the add method. Or extend the Camera class with your own addition code and then add the new Camera in using the addExisting method.
Cameras provide a view into your game world, and can be positioned, rotated, zoomed and scrolled accordingly.
A Camera consists of two elements: The viewport and the scroll values.
The viewport is the physical position and size of the Camera within your game. Cameras, by default, are created the same size as your game, but their position and size can be set to anything. This means if you wanted to create a camera that was 320x200 in size, positioned in the bottom-right corner of your game, you'd adjust the viewport to do that (using methods like setViewport and setSize).
If you wish to change where the Camera is looking in your game, then you scroll it. You can do this via the properties scrollX and scrollY or the method setScroll. Scrolling has no impact on the viewport, and changing the viewport has no impact on the scrolling.
By default a Camera will render all Game Objects it can see. You can change this using the ignore method, allowing you to filter Game Objects out on a per-Camera basis. The Camera Manager can manage up to 31 unique 'Game Object ignore capable' Cameras. Any Cameras beyond 31 that you create will all be given a Camera ID of zero, meaning that they cannot be used for Game Object exclusion. This means if you need your Camera to ignore Game Objects, make sure it's one of the first 31 created.
A Camera also has built-in special effects including Fade, Flash, Camera Shake, Pan and Zoom.

## Example usage
The following example shows the simplest usage of the Camera type.

<code-group>
<code-block title=".at" active>
```scss
Rectangle {
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

## startFollow <Badge text="String" type="tip" vertical="middle"/>
The name or id of the object which the camera should follow.
