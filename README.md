
- popup notification div which alerts user extension is on.
  transparent; white text on black; rounded corners w/ rad: 10px
  - auto-centers in center of body; try to do this w/o jquery

- mouseover turns any element into: 4px purple border w/ yellow/gold
  background, again, both transparent

- 3-5 frame animation sprite placed in location of removed element,
  which uses setTimeout() and removes itself after animation as played.
  puff of smoke; or fast explosion = fire + smoke
  - get location of elt removing; use that to calculate location of sprite

- "Blow Up Entire Page" button which loads entire page elements into
  array, and blows all of them up in random order say 80ms spaced apart
  var links = [].slice.apply(document.getElementsByTagName('a'));