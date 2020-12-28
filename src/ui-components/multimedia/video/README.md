---
tags:
  - Artefact
  - design
---

# Video

## Detailed description
Allow you to play video.

## Example usage
The following example shows the simplest usage of the Video type.

![alt text](./Video.gif)

<code-group>
<code-block title=".at" active>
```scss
Video{  
  id: "exampleVideo",
  width: 385,
  height: 207,
  x: 0,
  y: 0,
  sources: [
    "rabbit.mp4"
  ],
  controls: true
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

## source <Badge text="string" type="tip" vertical="middle"/>
The path of the file to play.

## controls <Badge text="bool" type="tip" vertical="middle"/>
If this attribute is true, the system will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback.

## autoplay <Badge text="bool" type="tip" vertical="middle"/>
A Boolean attribute: if specified, the video will automatically begin playback as soon as it can do so, without waiting for the entire video file to finish downloading.

::: tip Notes
Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.
:::

## loop <Badge text="bool" type="tip" vertical="middle"/>
if specified, the browser will automatically seek back to the start upon reaching the end of the video.

## mute <Badge text="bool" type="tip" vertical="middle"/>
A Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played.

## preload <Badge text="string" type="tip" vertical="middle"/>
This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience with regards to what content is loaded before the video is played. It may have one of the following values:
<ul>
  <li> <b>none:</b> Indicates that the video should not be preloaded.</li>
  <li> <b>metadata:</b>  Indicates that only video metadata (e.g. length) is fetched. </li>
  <li> <b>auto:</b>  Indicates that the whole video file can be downloaded, even if the user is not expected to use it. </li>
</ul>

::: warning
-The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the video for playback.<br>-The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.<br>
:::