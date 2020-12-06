---
tags:
  - basic
  - ui
  - element
---
# ScrollArea

## Detailed description
ScrollArea provides scrolling for user-defined content.

## Example usage
The following example shows the simplest usage of the ScrollArea type.

![alt text](./ScrollArea.gif)

<code-group>
<code-block title=".at" active>
```scss
ScrollArea{  
  id: "exampleScroll",
  width: 260,
  height: 366,
  x: 0,
  anchors.top: 0,
  child: [
    Rectangle{
     
      id: "rectangleexampleScroll1",
      width: 100,
      height: 584,
      x: 67,
      y: 125,
      color: "#5981ee"
    }
  ],
  overflow: "hidden",
  overflowY: "scroll"
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
ScrollView have all the property of the Rectangle and another like:

## overflow <Badge text="bool" type="tip" vertical="middle"/>
Activate the textOverflow.

## overflowX <Badge text="Enum" type="tip" vertical="middle"/>
This property defines the way the overflow will be display in the horizontal.

## overflowY <Badge text="Enum" type="tip" vertical="middle"/>
This property defines the way the overflow will be display in the vertical.

## styleMode <Badge text="int" type="tip" vertical="middle"/>
This property enables you to select the custum style you want. 0 is for the normal (default) style. You have a choice from 1 to 15.

## barWidth <Badge text="int" type="tip" vertical="middle"/>
Define the width/height of the scrollbar.

## barBackgroundColor <Badge text="string" type="tip" vertical="middle"/>
Define the color to be set on the background of the scrollbar.

## barColor <Badge text="string" type="tip" vertical="middle"/>
Define the color of the background.
