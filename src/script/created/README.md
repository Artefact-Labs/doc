---
tags:
  - signal
  - script
  - state
---

# Created

## Detailed description
Called synchronously after the instance is created. At this stage, the instance has finished processing the options which means the following have been set up: data observation, computed properties, methods, watch/event callbacks. However, the mounting phase has not been started, and the $el property will not be available yet.

## Example usage
The following example shows the simplest usage of the Create state.

<code-group>
<code-block title=".at">
```scss
```
</code-block>

<code-block title=".atObj" active>
```js
Created { 
	console.log("Hallo !!!")
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>