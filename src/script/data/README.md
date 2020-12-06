---
tags:
  - data
  - script
  - property
  - state
---

# Data

## Detailed description
It allows you to define a special type of variable. When a new instance of an object is created, it adds all the **Data** found in its **reactive system**. When the values of those properties change, the view will **react**, updating to match the new values.

## Example usage
The following example shows the simplest usage of the Data type.

![alt text](./Data.gif)

<code-group>
<code-block title=".at">
```scss
Item{  
  id: "example",
  width: 365,
  height: 300,
  x: 0,
  y: 0,
  child: [
    Text{     
      id: "textexample3",
      width: 100,
      height: 100,
      x: 57,
      y: 58,
      value: "<#count#>",
      horizontalAlign: "center",
      verticalAlign: "center",
      fontSize: 28,
      color: "#eaa161"
    }
  ]
}, 
```
</code-block>

<code-block title=".atObj" active>
```js
Data count = 100
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>