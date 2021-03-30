---
tags:
  - basic
  - ui
  - element
---
# Icon

## Detailed description
The Icon type displays an icon.

## Example usage
The following example shows the simplest usage of the Icon type.

![alt text](./Icon.gif)

<code-group>
<code-block title=".at" active>
```scss
Icon{  
  id: "exampleIcon",
  width: 190,
  height: 179,
  x: 0,
  y: 0,
  iconName: "ion-ios-paper-plane",
  size: 200,
  color: "#ebfa89"
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

## iconName <Badge text="string" type="tip" vertical="middle"/>
The source of the icon is specified as a String, which is the code-name of the icon depending of the Tool (Ionic-Icons / Material-Design-Icon).

## size <Badge text="int" type="tip" vertical="middle"/>
This property allows to set how big the icon will be.

## color <Badge text="color" type="tip" vertical="middle"/>
The color set the color of the icon.
