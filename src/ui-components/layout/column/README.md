---
tags:
  - layout
  - ui
  - element
---
# Column

## Detailed description
Column is a type that positions its child items along a single column. It can be used as a convenient way to vertically position a series of items without using anchors.

## Example usage
Below is a Column that contains three rectangles of same sizes:

![alt text](./Column.gif)

<code-group>
<code-block title=".at" active>
```scss
Column{  
  id: "example",
  width: "auto",
  height: 464,
  x: 0,
  y: 0,
  child: [
    Card{     
      id: "cardexample1",
      width: 100,
      height: 100,
      color: "#b4e247",
      modelFor: "4",
      child: [
        Text{        
          id: "textcardexample11",
          width: "auto",
          height: "auto",
          anchors.verticalCenter: 0,
          anchors.horizontalCenter: 0,
          value: "<#index#>"
        }
      ]
    }
  ],
  spacing: "space-between"
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

## reverse <Badge text="bool" type="tip" vertical="middle"/>
Reverse the order of the item.

## spacing <Badge text="String" type="tip" vertical="middle"/>
Define how the space between the child element will be placed.
