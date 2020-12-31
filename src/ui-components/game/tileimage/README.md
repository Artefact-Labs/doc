---
tags:
  - game
  - ui
  - element
---
# TileImage

## Detailed description
A TileImage is a Image that has a repeating texture.
The texture can be scrolled and scaled independently of the TileImage itself. Textures will automatically wrap and are designed so that you can create game backdrops using seamless textures as a source.
You shouldn't ever create a TileImage any larger than your actual canvas size. If you want to create a large repeating background that scrolls across the whole map of your game, then you create a TileImage that fits the canvas size and then use the tilePosition property to scroll the texture as the player moves. If you create a TileImage that is thousands of pixels in size then it will consume huge amounts of memory and cause performance issues. Remember: use tilePosition to scroll your texture and tileScale to adjust the scale of the texture - don't resize the image itself or make it larger than it needs.
An important note about Tile Image and NPOT textures: Internally, TileImage textures use GL_REPEAT to provide seamless repeating of the textures. This, combined with the way in which the textures are handled in WebGL, means they need to be POT (power-of-two) sizes in order to wrap. If you provide a NPOT (non power-of-two) texture to a TileImage it will generate a POT sized canvas and draw your texture to it, scaled up to the POT size. It's then scaled back down again during rendering to the original dimensions. While this works, in that it allows you to use any size texture for a Tile Image, it does mean that NPOT textures are going to appear anti-aliased when rendered, due to the interpolation that took place when it was resized into a POT texture. This is especially visible in pixel art graphics. If you notice it and it becomes an issue, the only way to avoid it is to ensure that you provide POT textures for Tile Images.

## Example usage
The following example shows the simplest usage of the TileImage type.

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

## source <Badge text="String" type="tip" vertical="middle"/>
The Path of the image to be loaded.

## opacityTopLeft <Badge text="int" type="tip" vertical="middle"/>
The alpha value starting from the top-left of the Game Object. This value is interpolated from the corner to the center of the Game Object.

## opacityTopRight <Badge text="int" type="tip" vertical="middle"/>
The alpha value starting from the top-right of the Game Object. This value is interpolated from the corner to the center of the Game Object.

## opacityBottomLeft <Badge text="int" type="tip" vertical="middle"/>
The alpha value starting from the top-left of the Game Object. This value is interpolated from the corner to the center of the Game Object.

## opacityBottomRight <Badge text="int" type="tip" vertical="middle"/>
The alpha value starting from the bottom-right of the Game Object. This value is interpolated from the corner to the center of the Game Object.

## scale <Badge text="int" type="tip" vertical="middle"/>
This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object to the same value, at the same time. When reading this value, the result returned is <b>(scaleX + scaleY) / 2</b>. Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this isn't the case, use the <b>scaleX</b> or <b>scaleY</b> properties instead.

## scaleX <Badge text="int" type="tip" vertical="middle"/>
The horizontal scale of this Game Object.

## scaleY <Badge text="int" type="tip" vertical="middle"/>
The vertical scale of this Game Object.

## flipX <Badge text="bool" type="tip" vertical="middle"/>
The horizontally flipped state of the Game Object. A Game Object that is flipped horizontally will render inversed on the horizontal axis. Flipping always takes place from the middle of the texture and does not impact the scale value. If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

## flipY <Badge text="bool" type="tip" vertical="middle"/>
The vertically flipped state of the Game Object. A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down) Flipping always takes place from the middle of the texture and does not impact the scale value. If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.

## gravityX <Badge text="int" type="tip" vertical="middle"/>
Sets the Body's horizontal gravity.

## gravityY <Badge text="int" type="tip" vertical="middle"/>
In most cases, Artefact can automatically figure out when the transition has finished. By default, Artefact waits for the first transition's end or animation's end event on the root.

## setBounceX <Badge text="int" type="tip" vertical="middle"/>
Sets the Body's horizontal bounce.

## setBounceY <Badge text="int" type="tip" vertical="middle"/>
Sets the Body's vertical bounce.

## interactive <Badge text="bool" type="tip" vertical="middle"/>
Pass this Game Object to the Input Manager to enable it for Input. Input works by using hit areas, these are nearly always geometric shapes, such as rectangles or circles, that act as the hit area for the Game Object. However, you can provide your own hit area shape and callback, should you wish to handle some more advanced input detection. If no arguments are provided it will try and create a rectangle hit area based on the texture frame the Game Object is using. If this isn't a texture-bound object, such as a Graphics or BitmapText object, this will fail, and you'll need to provide a specific shape for it to use.

## physic <Badge text="String" type="tip" vertical="middle"/>
Set the physic mode of the object. You hve a choice between <b>static</b> and <b>dynamic</b>.

## collideWorldBounds <Badge text="bool" type="tip" vertical="middle"/>
Sets whether this Body collides with the world boundary.

## collisionList <Badge text="Array" type="tip" vertical="middle"/>
The list of all object whom will collide with the current object.

## onPointerdown <Badge text="Signal" type="tip" vertical="middle"/>


## animations <Badge text="Array" type="tip" vertical="middle"/>
The list of the animation for the current object.

## frameWidth <Badge text="int" type="tip" vertical="middle"/>
The fixed width of each frame.

## frameHeight <Badge text="int" type="tip" vertical="middle"/>
The fixed height of each frame. If not set it will use the frameWidth as the height.
