---
tags:
  - signal
  - script
  - state
---

# Destroy

## Detailed description
Called after a Vue instance has been destroyed. When this hook is called, all directives of the Vue instance have been unbound, all event listeners have been removed, and all child Vue instances have also been destroyed.

**This hook is not called during server-side rendering.**

## Example usage
The following example shows the simplest usage of the Destroyed state.

<code-group>
<code-block title=".at">
```scss
```
</code-block>

<code-block title=".atObj" active>
```js
Destroyed { 
	console.log("Hallo !!!")
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>