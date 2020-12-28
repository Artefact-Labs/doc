---
tags:
  - input-control
  - ui
  - element
---
# MouseArea

## Detailed description
A MouseArea is an invisible item that is typically used in conjunction with a visible item in order to provide mouse handling for that item. By effectively acting as a proxy, the logic for mouse handling can be contained within a MouseArea item.
MouseArea is an invisible Item, but it has a visible property. When set to false, the mouse area becomes transparent to mouse events.

## Example usage
The following example shows the simplest usage of the MouseArea type.

![alt text](./MouseArea.gif)

<code-group>
<code-block title=".at" active>
```scss
Rectangle{ 
  id: "example",
  width: 100,
  height: 100,
  x: 26,
  y: 39,
  gradiant: true,
  firstColor: "#6c68ef",
  secondColor: "#9791e6",
  border: 0,
  radius: 5,
  child: [
    MouseArea{
      id: "mouseareaexample1",
      anchors.right: 0,
      anchors.left: 0,
      anchors.top: 0,
      anchors.bottom: 0,
      cursor: "help",
      onClicked: "doSomeAction"
    }
  ]
}
```
</code-block>

<code-block title=".atObj">
```js
Method doSomeAction(){
	alert('Amazing !!!');
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>

## onClicked <Badge text="signal (Js)" type="tip" vertical="middle"/>
This signal is emitted when there is a click. A click is defined as a press followed by a release.

## cursor <Badge text="String" type="tip" vertical="middle"/>
This property holds the cursor shape for this mouse area. Note that on platforms that do not display a mouse cursor this may have no effect.

## tooltipLabel <Badge text="String" type="tip" vertical="middle"/>
Allow you to set the text which will be show in the Tooltip.

## tooltipPosition <Badge text="String" type="tip" vertical="middle"/>
Set the position, where the ToolTip will be show. You have a choice between one of the values:
<b>up<b>, <b>down<b>, <b>left<b>, <b>right<b>, <b>up-left<b>, <b>up-right<b>, <b>down-left<b> or <b>down-right<b>.

## tooltipLength <Badge text="String" type="tip" vertical="middle"/>
By default, tooltips will always remain single-line no matter their length. You can change this behavior by choosing one of the values:
<b>small<b>, <b>medium<b>, <b>large<b> or <b>fit<b>.

## tooltipBlunt <Badge text="bool" type="tip" vertical="middle"/>
If for some reason you do not want animations in your tooltips, you can set this attribute to <b>true<b>.

## tooltipVisible <Badge text="bool" type="tip" vertical="middle"/>
If you want to show tooltips even when user interaction isn't happening, you can simply set this attribute to <b>true<b>.
