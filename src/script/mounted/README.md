---
tags:
  - signal
  - script
  - state
---

# Mounted

## Detailed description
Called after the instance has been mounted, where el is replaced by the newly created vm.$el. If the root instance is mounted to an in-document element, vm.$el will also be in-document when mounted is called.

## Example usage
The following example shows the simplest usage of the Mounted state.

<code-group>
<code-block title=".at">
```scss
```
</code-block>

<code-block title=".atObj" active>
```js
Mounted { 
	console.log("Hallo !!!")
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>