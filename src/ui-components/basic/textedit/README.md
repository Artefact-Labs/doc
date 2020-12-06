---
tags:
  - basic
  - ui
  - element
---
# TextEdit

## Detailed description
The TextEdit item displays a block of editable, formatted text. It can display both plain and rich text.

## Example usage
The following example shows the simplest usage of the TextEdit type.

![alt text](./TextEdit.gif)

<code-group>
<code-block title=".at" active>
```scss
TextEdit{  
  id: "exampleTextEdit",
  width: 411,
  height: 141,
  x: 0,
  y: 0,
  value: "Type some text",
  color: "#e6a7b3",
  fontSize: 50,
  font.underline: true,
  fontFamily: "Brush Script MT"
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

## value <Badge text="string" type="tip" vertical="middle"/>
The text to display.

## horizontalAlign <Badge text="Enum" type="tip" vertical="middle"/>
Sets the horizontal alignment of the text within the TextEdit item's width and height. By default, the text alignment follows the natural alignment of the text, for example text that is read from left to right will be aligned to the left.

## verticalAlign <Badge text="Enum" type="tip" vertical="middle"/>
Sets the vertical alignment of the text within the TextEdit item's width and height. By default, the text alignment follows the natural alignment of the text, for example text that is read from left to right will be aligned to the left.

## color <Badge text="color" type="tip" vertical="middle"/>
This property holds the color used to fill the rectangle. The default color is transparent.

## fontFamily <Badge text="string" type="tip" vertical="middle"/>
Sets the family name of the font. The family name is case insensitive and may optionally include a foundry name, e.g. "Arial". If the family is available from more than one foundry and the foundry isn't specified, an arbitrary foundry is chosen. If the family isn't available a family will be set using the font matching algorithm.

## fontSize <Badge text="int" type="tip" vertical="middle"/>
Sets the font size in pixels. Using this function makes the font device dependent.

## police <Badge text="Enum" type="tip" vertical="middle"/>
This property defines some styling for the Text.

## textO <Badge text="bool" type="tip" vertical="middle"/>
Activate the textOverflow.

## textOverflow <Badge text="int" type="tip" vertical="middle"/>
Define the size of the overflow.
