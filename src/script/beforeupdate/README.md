---
tags:
  - before
  - signal
  - script
  - state
---

# BeforeUpdate

## Detailed description
Called when data changes, before the DOM is patched. This is a good place to access the existing DOM before an update, e.g. to remove manually added event listeners.

**This hook is not called during server-side rendering, because only the initial render is performed server-side.**

## Example usage
The following example shows the simplest usage of the BeforeUpdate state.

<code-group>
<code-block title=".at">
```scss
```
</code-block>

<code-block title=".atObj" active>
```js
BeforeUpdate { 
	console.log("Hallo !!!")
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>