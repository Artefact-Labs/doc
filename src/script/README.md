---
tags:
  - signal
  - script
  - state
---

# Updated

## Detailed description
Called after a data change causes the virtual DOM to be re-rendered and patched.
The component DOM will have been updated when this hook is called, so you can perform DOM-dependent operations here. However, in most cases you should avoid changing state inside the hook. To react to state changes, itï¿½s usually better to use a computed property or watcher instead.

## Example usage
The following example shows the simplest usage of the Updated state.

<code-group>
<code-block title=".at">
```scss
```
</code-block>

<code-block title=".atObj" active>
```js
Updated { 
	console.log("Hallo !!!")
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>