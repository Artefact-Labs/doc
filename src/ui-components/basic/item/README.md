---
tags:
  - basic
  - ui
  - element
---
# Item

## Detailed description
The Item type is the base type for all visual items in At.
All visual items in Artefact inherit from Item. Although an Item object has no visual appearance, it defines all the attributes that are common across visual items, such as x and y position, width and height, anchoring and key handling support.

The Item type can be useful for grouping several items under a single root visual item.

## Example usage
The following example shows the simplest usage of the Item type.

![alt text](./Item.gif)

<code-group>
<code-block title=".at" active>
```scss
Item{  
  id: "ExampleItem",
  width: 378,
  height: 314,
  x: 0,
  y: 0,
  child: [
    Image{     
      id: "imageExampleItem1",
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      source: "Resources/javascript.png"
    },
    Image{     
      id: "imageExampleItem3",
      width: 100,
      height: 100,
      x: 88,
      y: 89,
      source: "Resources/java.jpg"
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
