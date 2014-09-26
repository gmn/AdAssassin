// runs when extension button is pressed

var noned=[];

// CLICK DISAPPEAR
document.body.onclick = function(e) {
  var disp = e.toElement.style.display;
  e.toElement.style.display = "none";
  noned.push( {elt:e.toElement,prevState:disp} );
  if ( e.toElement && e.toElement.textContent )
    console.log("killed: " + e.toElement.textContent);
  return false;
};
// UNDO DISAPPEAR
document.body.onkeydown = function(e) {
    if ( e.keyCode === 90 ) { // 'Z'
        var obj = noned.pop();
        if ( obj ) {
            obj.elt.style.display = obj.prevState;
        }
    }
};

// 
document.body.style.cursor = "crosshair";

function walkTheDOM( node, func ) {
    func( node );
    node = node.firstChild;
    while ( node ) {
        walkTheDOM( node, func );
        node = node.nextSibling;
    }
}

walkTheDOM( document.body, function(n) {
  if ( n.style && n.style.cursor ) 
    n.style.cursor = "crosshair"; 
  if ( n.href ) 
    n.href = "javascript:void(0)";
  if ( n.onclick )
    n.onclick = "return false";
});

if ( document.frames && document.frames.length > 0 ) {
  for ( var i = 0; i < document.frames.length; i++ ) {
    walkTheDOM( document.frames[i].body, function(n) {
      if ( n.style && n.style.cursor ) 
        n.style.cursor = "crosshair"; 
      if ( n.href ) 
        n.href = "javascript:void(0)";
      if ( n.onclick )
        n.onclick = "return false";
    });
  }
}

console.log( "ON" );
