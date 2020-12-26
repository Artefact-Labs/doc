---
tags:
  - basic
  - ui
  - element
---
# ComboBox

## Detailed description
ComboBox is a combined button and popup list. It provides a means of presenting a list of options to the user in a way that takes up the minimum amount of screen space. ComboBox is populated with a data model. The data model is commonly a JavaScript array, or an integer, but other types of data models are also supported.

## Example usage
The following example shows the simplest usage of the ComboBox type.


<code-group>
<code-block title=".at" active>
```scss
ComboBox{  
  id: "exampleComboBox",
  width: 118,
  height: 62,
  x: 20,
  y: 15,
  checked: true,
  label: "artefact"
}, 
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

## label <Badge text="string" type="tip" vertical="middle"/>
Sets input label.

## color <Badge text="color" type="tip" vertical="middle"/>
Applies specified color to the control - it can be the name of material color (for example success or purple) or css color.

## disabled <Badge text="bool" type="tip" vertical="middle"/>
Disable the input.

## readOnly <Badge text="bool" type="tip" vertical="middle"/>
Puts input in readonly state.

## error <Badge text="bool" type="tip" vertical="middle"/>
Puts the input in a manual error state.

## success <Badge text="bool" type="tip" vertical="middle"/>
Puts the input in a manual success state.

## indeterminate <Badge text="bool" type="tip" vertical="middle"/>
Sets an indeterminate state for the checkbox.