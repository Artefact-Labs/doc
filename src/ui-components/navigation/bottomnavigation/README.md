---
tags:
  - navigation
  - ui
  - element
---
# BottomNavigation

## Detailed description
The BottomNavigation component is used switching between path defined in the Router.art. It is commonly used width the RouterView.

## Example usage
The following example shows the simplest usage of the BottomNavigation type.

<code-group>
<code-block title=".at" active>
```scss
```
</code-block>

<code-block title=".atObj">
```js
Data tabi = null
```
</code-block>

<code-block title=".atStyle">
```scss
Rectangle {
}
```
</code-block>
</code-group>

## Property Documentation


## tabsTitel <Badge text="array of String" type="tip" vertical="middle"/>
A list of all the title which will render in the top bar.

## icons <Badge text="array of String" type="tip" vertical="middle"/>
A list of icon name. One icon corresponds one title.

## color <Badge text="color" type="tip" vertical="middle"/>
The color of the top bar.

## sliderColor <Badge text="color" type="tip" vertical="middle"/>
The color of the slider.

## iconsRight <Badge text="bool" type="tip" vertical="middle"/>
Define if all the icons bill be on the right marge of the title.

## dark <Badge text="bool" type="tip" vertical="middle"/>
Set this to true will change the color of the bar to dark and all of the title to white.

## centeredBar <Badge text="bool" type="tip" vertical="middle"/>
Define if the titels should be on the center of the bar.

## grow <Badge text="bool" type="tip" vertical="middle"/>
Force titels to take up all available space.

## rightAlign <Badge text="bool" type="tip" vertical="middle"/>
Aligns titles to the right.

## shift <Badge text="bool" type="tip" vertical="middle"/>
Hide text of button when not active.

::: warning
You have to always bind the model with a Data variable. It allows the system to know which tab is currently activated.
:::
