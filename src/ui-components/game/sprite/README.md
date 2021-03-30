---
tags:
  - game
  - ui
  - element
---
# Sprite

## Detailed description
A Sprite Game Object is used for the display of both static and animated images in your game. Sprites can have input events and physics bodies. They can also be tweened, tinted, scrolled and animated.
The main difference between a Sprite and an Image Game Object is that you cannot animate Images. As such, Sprites take a fraction longer to process and have a larger API footprint due to the Animation Component. If you do not require animation then you can safely use Images to replace Sprites in all cases.

## Example usage
The following example shows the simplest usage of the Sprite type.

<code-group>
<code-block title=".game.at" active>
```scss
Sprite{
  id: "spritescene19",
  x: 0,
  y: 0,
  source: "Resources/hero1.png",
  frameWidth: 71,
  frameHeight: 92,
  animations: [
    AnimationItem{
      key: "walk",
      frameStart: 2,
      frameEnd: 8,
      frameRate: 10,
      repeat: 0,
      loop: true
    },
    AnimationItem{
      key: "stay",
      frameStart: 11,
      frameEnd: 13,
      frameRate: 10,
      repeat: 1,
      loop: false
    }
  ]
}
```
</code-block>

<code-block title=".atObj">
```js
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
