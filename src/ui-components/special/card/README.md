---
tags:
  - special
  - ui
  - element
---
# Card

## Detailed description
This element allows you to use and render HTML code.

## Example usage
The following example shows the simplest usage of the HtmlObject type.

![alt text](./Card.gif)

<code-group>
<code-block title=".at" active>
```scss
Card{ 
  id: "example",
  width: 200,
  height: 100,
  x: 15,
  y: 15,
  child: [
    Image{    
      id: "imageexample1",
      anchors.right: 0,
      anchors.left: 0,
      anchors.top: 0,
      anchors.bottom: 0,
      source: "Resources/video-bg.jpg"
    },
    Button{    
      id: "buttonexample3",
      width: 40,
      height: 40,
      fab: true,
      anchors.horizontalCenter: 0,
      anchors.bottom: 10,
      icon: "ion-ios-play",
      hasIcon: true,
      opacity: 0.6
    }
  ]
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

## color <Badge text="color" type="tip" vertical="middle"/>
This property holds the color used to fill the card. The default color is transparent.

## gradiant <Badge text="bool" type="tip" vertical="middle"/>
This property defines if the rectangle will be fill with the gradient or not.

## firstColor <Badge text="color" type="tip" vertical="middle"/>
This defines the first color of the gradient.

## secondColor <Badge text="color" type="tip" vertical="middle"/>
This defines the second color of the gradient.

## gradiantAngle <Badge text="int(deg)" type="tip" vertical="middle"/>
This defines the angle of the gradient. It is the angle of the line between the first- and secondColor.

## border <Badge text="int" type="tip" vertical="middle"/>
The border and borderColor used to draw the border of the card. A border of 1 creates a thin line. For no line, use a border of 0 or a transparent color. Note: The border of the rectangle's border does not affect the geometry of the card. The border is rendered within the rectangle's boundaries.

## borderColor <Badge text="color" type="tip" vertical="middle"/>
Define the color of the border.

## radius <Badge text="int" type="tip" vertical="middle"/>
This property holds the corner radius used to draw a rounded card. If radius is non-zero, the rectangle will be painted as a rounded card, otherwise it will be painted as a normal card. The same radius is used by all 4 corners; there is currently no way to specify different radius for different corners.

## elevation <Badge text="int" type="tip" vertical="middle"/>
Designates an elevation applied to the component between 0 and 24.

## outline <Badge text="bool" type="tip" vertical="middle"/>
Removes card elevation shadow and adds a thin border.

## loading <Badge text="bool" type="tip" vertical="middle"/>
Display a vertical progress bar.
