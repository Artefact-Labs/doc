---
tags:
  - Multimedia
  - ui
  - element
---

# Audio

## Detailed description
Allow you to play songs.

## Example usage
The following example shows one of the simplest usage of the Audio type.

![alt text](./Audio.gif)

<code-group>
<code-block title=".at" active>
```scss
Audio{  
  id: "exampleAudio",
  width: 254,
  height: 100,
  x: 0,
  y: 0,
  sources: [
    "myMusic.mp3"
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
If this attribute is true, the system will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.

## autoplay <Badge text="bool" type="tip" vertical="middle"/>
A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.

::: tip Notes
Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.
:::

## loop <Badge text="bool" type="tip" vertical="middle"/>
If specified, the audio player will automatically seek back to the start upon reaching the end of the audio.

## mute <Badge text="bool" type="tip" vertical="middle"/>
A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is <b>false</b>.

## preload <Badge text="string" type="tip" vertical="middle"/>
This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:
<ul>
  <li> <b>none:</b> Indicates that the audio should not be preloaded.</li>
  <li> <b>metadata:</b>  Indicates that only audio metadata (e.g. length) is fetched. </li>
  <li> <b>auto:</b>  Indicates that the whole audio file can be downloaded, even if the user is not expected to use it. </li>
</ul>

::: warning
-The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the audio for playback.<br>-The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.<br>
:::