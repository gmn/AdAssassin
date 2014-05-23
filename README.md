- [X] 3-5 frame animation sprite placed in location of removed element,
  which uses setTimeout() and removes itself after animation as played.
  puff of smoke; or fast explosion = fire + smoke
  X get location of elt removing; use that to calculate location of sprite

- Explosion sprite is working, but for non-generalized case. Need to
  re-write it to:
    X have multiple running at one time, possibly hundreds
    X get a better explosion animation; something with a couple frames of fire; then couple frames smoke
    - be applicable to any element
      (right now is being attached to event listener ahead of time. Instead need to attach globally to body)

- popup notification div which alerts user extension is on.
  transparent; white text on black; rounded corners w/ rad: 10px
  - auto-centers in center of body; try to do this w/o jquery

- mouseover turns any element into: 4px purple border w/ yellow/gold
  background, again, both transparent

- "Blow Up Entire Page" button which loads entire page elements into
  array, and blows all of them up in random order say 80ms spaced apart
  var links = [].slice.apply(document.getElementsByTagName('*'));

- some Ad/links are followed, I suspect script. Regular <A> doesn't usually follow,
  but when Extension is ON, NO links should be followed at all.

- when Extension is activated change cursor with css directive: cursor:pointer;

- post to hacker news: "Blow up any webpage with this Chrome extension"
