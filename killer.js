// runs when extension button is pressed

try {
  if ( !domkiller ) 
    var domkiller = new AdAssassin();
} catch(e) {
    var domkiller = new AdAssassin();
}

var result = domkiller.toggle();
console.log( "domkiller is: " + result );


