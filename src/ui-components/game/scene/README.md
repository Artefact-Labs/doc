---
tags:
  - game
  - ui
  - element
---
# Scene

## Detailed description
The Scene is where you will put all your elements like personages, 2D box, etc.

## Example usage
The following example shows the simplest usage of the Scene type.

<code-group>
<code-block title=".at" active>
```scss
Scene{
  id: "scene1",
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  child: [
    Rectangle{
      id: "rectanglescene19",
      color: "#aacef9",
      anchors.right: 0,
      anchors.left: 0,
      anchors.top: 0,
      anchors.bottom: 0
    },
    StaticGroup{
      id: "group1",
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      child: [
        Image{
          id: "ground12",
          width: 97,
          height: 44,
          x: 78,
          source: "Resources/04.png",
          anchors.bottom: 100
        },
        Image{
          id: "imagegroup13",
          width: 100,
          height: 100,
          x: 78,
          y: 190,
          source: "Resources/box2.png"
        }
      ]
    },
    Image{
      id: "imagescene1714",
      width: 100,
      height: 100,
      x: 81,
      source: "Resources/tree1.png",
      anchors.bottom: 142
    },
    Image{
      id: "imagescene15",
      width: 76,
      height: 88,
      x: 87,
      source: "Resources/pers9.png",
      physic: "dynamic",
      "gravity": 300,
      gravityY: 300,
      collideWorldBounds: true,
      collisionList: [
        "group1"
      ],
      y: 0
    },
    Sprite{
      id: "spritescene19",
      x: 0,
      y: 0,
      source: "Resources/hero1.png",
      frameWidth: 71,
      frameHeight: 92,
      animations: [
        AnimationItem{
          key: "walk",
          frameStart: 2,
          frameEnd: 8,
          frameRate: 10,
          repeat: 0,
          loop: true
        },
        AnimationItem{
          key: "stay",
          frameStart: 11,
          frameEnd: 13,
          frameRate: 10,
          repeat: 1,
          loop: false
        }
      ]
    }
  ],
  onAisDown: [
    "avance()"
  ],
  onBisDown: [
    "recule()"
  ]
}
```
</code-block>

<code-block title=".atObj">
```js
Method avance () { 
	this.imagescene15.x += 1; 
}
Method recule () { 
	this.imagescene15.x -= 1; 
}
```
</code-block>

<code-block title=".atStyle">
```scss
```
</code-block>
</code-group>

## update <Badge text="Array" type="tip" vertical="middle"/>
The list of the functions which will be execute every time (FPS).
