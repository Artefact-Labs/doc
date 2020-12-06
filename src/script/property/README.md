---
tags:
  - data
  - script
  - property
  - state
---
# Property

## Detailed description
A list/hash of attributes that are exposed to accept data from the parent component. It has an Array-based simple syntax and an alternative Object-based syntax that allows advanced configurations such as type checking, custom validation and default values.

## Example usage
The following example shows the simplest usage of the Property type.

![alt text](./Property.gif)

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
Property required Number count = 600
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>

::: tip
* the **required**, **Number(Type)** and the **Value (600)** are not mandatory
* type: can be one of the following native constructors: String, Number, Boolean, Array, Object, Date, Function, Symbol, any custom constructor function or an array of those.
:::