---
tags:
  - input-control
  - ui
  - element
---
# Draggable

## Detailed description
Component allowing drag-and-drop and synchronization with view model array.

## Example usage
The following example shows the simplest usage of the Draggable type.

```![alt text](./Draggable.gif)

<code-group>
<code-block title=".at" active>
```scss
Column{ 
  id: "example",
  width: "auto",
  height: "auto",
  x: 0,
  y: 0,
  child: [
    Draggable{
      id: "draggableexample1",
      width: 200,
      height: 100,
      child: [
        Card{
          id: "carddraggableexample11",
          anchors.right: 0,
          anchors.left: 0,
          anchors.top: 0,
          anchors.bottom: 5,
          radius: 5,
          child: [
            Text{
              id: "textcarddraggableexample111",
              width: "auto",
              height: "auto",
              anchors.verticalCenter: 0,
              anchors.horizontalCenter: 0,
              anchors.bottom: 0,
              value: "<#item#>"
            }
          ],
          class: [
            "list-group-item"
          ]
        }
      ],
      modelFor: "list",
      list: "list",
      ghostClass: "ghost",
      onStarted: "drag = true",
      onEnded: "drag = false",
      class: [
        "list-group"
      ]
    }
  ]
}
```
</code-block>

<code-block title=".atObj">
```js
Data drag = false
Data list = ["Tony Stark", "Dannick Stark", "Musk", "Bill"]
```
</code-block>

<code-block title=".atStyle">
```scss
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
```
</code-block>
</code-group>

## disabled <Badge text="bool" type="tip" vertical="middle"/>
Disable the drag.

## ghostClass <Badge text="String" type="tip" vertical="middle"/>


## list <Badge text="(js)" type="tip" vertical="middle"/>

::: danger Danger
Do not use in conjunction with model prop.
:::

## handle <Badge text="String" type="tip" vertical="middle"/>


## group <Badge text="String" type="tip" vertical="middle"/>


## tag <Badge text="String" type="tip" vertical="middle"/>
node type of the element that draggable component create as outer element for the included slot. It is also possible to pass the name of Artefact's component as element. In this case, draggable attribute will be passed to the create component.

## onStarted <Badge text="Signal" type="tip" vertical="middle"/>


## onEnded <Badge text="Signal" type="tip" vertical="middle"/>


## onChanged <Badge text="Signal" type="tip" vertical="middle"/>
event is triggered when list prop is not null and the corresponding array is altered due to drag-and-drop operation.

## onMoved <Badge text="Signal" type="tip" vertical="middle"/>
Signal will be emitted when you are dragging a child element.

## onCloned <Badge text="Signal" type="tip" vertical="middle"/>
Function called on the source component to clone element when clone option is true. The unique argument is the viewModel element to be cloned and the returned value is its cloned version. By default Artefact's draggable reuses the viewModel element, so you have to use this hook if you want to clone or deep clone it.

## onAdded <Badge text="Signal" type="tip" vertical="middle"/>


## onRemoved <Badge text="Signal" type="tip" vertical="middle"/>


## onUpdated <Badge text="Signal" type="tip" vertical="middle"/>


## onChoosed <Badge text="Signal" type="tip" vertical="middle"/>


## onUnChoosed <Badge text="Signal" type="tip" vertical="middle"/>


## onSorted <Badge text="Signal" type="tip" vertical="middle"/>


## onFiltered <Badge text="Signal" type="tip" vertical="middle"/>

