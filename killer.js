// runs when extension button is pressed

try {
  if ( !domkiller ) 
    var domkiller = new AdAssassin();
} catch(e) {
    try { 
      var domkiller = new AdAssassin();
    } catch(f) { }
}

try {
  var result = domkiller.toggle();
  console.log( "domkiller is: " + result );
} catch(e) {
  console.log( "domkiller not wired yet" );
}


