
- background.html that drops down and has 3 checkboxes: "Minor Explosions", "Major Explosions", "Explosions Off".
  default to minor.  Background showing indicates when plugin is ON or OFF. It's ON when it's SHOWING.
  - 3 checkboxes
  - <button value="Blow up entire page">
  - "Blow Up Entire Page" button which loads entire page elements into
    array, and blows all of them up in random order say 80ms spaced apart
    var links = [].slice.apply(document.getElementsByTagName('*'));

- library method to randomize an array in place. 'var a=[1,2,3,4];randomize(a);a' --> [2,1,4,3]
- get content elements first: <A> <LI> <P> <HR> <TD><H1><h2><h3><h4><h5><span>, then get structure: <TABLE><DIV>
  then the rest. Sort in such a way that [RANDOMIZED_CONTENT, RANDOMIZED_STRUCTURE, REST_OF_PAGE], 
  then blow the array up in order

- Rewrite Explosion Sprite so that it's not attached to onclick() event listener ahead of time
  but attached when body.onclick event fires.

S popup notification div which alerts user extension is on. (this can be background.html)
  transparent; white text on black; rounded corners w/ rad: 10px
  - auto-centers in center of body; try to do this w/o jquery

- mouseover turns any element into: 4px purple border w/ yellow/gold
  background, again, both transparent, so it's obvious what mouse cursor click will affect

- some Ad/links are followed, I suspect script. Regular <A> doesn't usually follow,
  but when Extension is ON, NO links should be followed at all.

D when Extension is activated change cursor with css directive: cursor:pointer;
  - demo in test.html works

- make youtube screencast; set to Rossini or Ode To Joy. Blow up 
  - NYT, Buzzfeed, HuffPo, Gawker, TechCrunch, Google, Redditt,
  - Wikipedia, Archive.org, gutenberg.org, craigslist, VICE, Metafilter, 
  - Slashdot, ArsTechnica, KickStarter, AirBnB
  - Valleywag, Twitter, Facebook, PandoDaily

- then, at the end, state in text floats:
    "Take Control of your media"
    "Blow up a web page"
    "Afterall, They're only HTML!"
    "We only blow up the ones we love."
    Then, Blow up a screenshot of: YouTube w/ a similar video (photoshop in a similar title)

- Post to Reddit
- post to hacker news: "Blow up any webpage with this Chrome extension"
    - "Never saw a web page blow up before."
    - "Ever saw a web page blow up before?"

