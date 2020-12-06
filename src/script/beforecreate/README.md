---
tags:
  - before
  - script
  - signal
---

# BeforeCreate

## Detailed description
Called synchronously immediately after the instance has been initialized, before data observation and event/watcher setup.

## Example usage
The following example shows the simplest usage of the BeforeCreate state.

<code-group>
<code-block title=".at">
```scss
```
</code-block>

<code-block title=".atObj" active>
```js
BeforeCreate { 
	console.log("Hallo !!!")
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>