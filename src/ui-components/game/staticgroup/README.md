---
tags:
  - game
  - ui
  - element
---
# StaticGroup

## Detailed description
An Arcade Physics Static Group object. All Game Objects created by or added to this Group will automatically be given static Arcade Physics bodies, if they have no body.

## Example usage
The following example shows the simplest usage of the StaticGroup type.

<code-group>
<code-block title=".game.at" active>
```scss
Rectangle {
}
```
</code-block>

<code-block title=".atObj">
```js
```
</code-block>
</code-group>

## collisionList <Badge text="Array" type="tip" vertical="middle"/>
The list of all object whom will collide with the current object.
