---
tags:
  - before
  - signal
  - script
  - state
---

# BeforeMount

## Detailed description
Called right before a Vue instance is destroyed. At this stage the instance is still fully functional.
**This hook is not called during server-side rendering.**

## Example usage
The following example shows the simplest usage of the BeforeDestroy state.

<code-group>
<code-block title=".at">
```scss
```
</code-block>

<code-block title=".atObj" active>
```js
BeforeDestroy { 
	console.log("Hallo !!!")
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>