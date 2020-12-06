---
tags:
  - basic
  - ui
  - element
---
# Computed

## Detailed description
Computed properties to be mixed into the Vue instance. All getters and setters have their this context automatically bound to the Vue instance. Computed properties are cached, and only re-computed on reactive dependency changes. Note that if a certain dependency is out of the instances scope (i.e. not reactive), the computed property will not be updated.

## Example usage
The following example shows the simplest usage of the Computed type.

![alt text](./Computed.gif)

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
Computed count () { 
	return 500;
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>
