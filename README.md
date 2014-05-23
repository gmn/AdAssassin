
- background.html that drops down and has checkbox.checked() "Show explosions", <button value="Blow up entire page">
  This indicates when plugin is ON or OFF. It's ON when it's SHOWING.

- library method to randomize an array in place. 'var a=[1,2,3,4];randomize(a);a' --> [2,1,4,3]
- get content elements first: <A> <LI> <P> <HR> <TD><H1><h2><h3><h4><h5><span>, then get structure: <TABLE><DIV>, 
  then the rest. Sort in such a way that [RANDOMIZED_CONTENT, RANDOMIZED_STRUCTURE, REST_OF_PAGE], 
  then blow the array up in order

- Rewrite Explosion Sprite so that it's not attached to onclick() event listener ahead of time

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
