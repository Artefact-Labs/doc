---
tags:
  - navigation
  - ui
  - element
---
# RouterLink

## Detailed description
The Link allow you to set a connection to another page in your project.

## Example usage
The following example shows the simplest usage of the RouterLink type.

![alt text](./RouterLink.gif)

<code-group>
<code-block title=".at" active>
```scss
RouterLink{     
  id: "example",
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  to: "page2"
}
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

## to <Badge text="url" type="tip" vertical="middle"/>
The url of the link. Here you have to give the name of the route you define in the Router.at.

::: warning
The name <b>/ page2</b> is that of a route defined in the <b>Router.at</b> file. This route leads to the <b>Page2.at</b> file.
:::
