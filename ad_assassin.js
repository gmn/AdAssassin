
function AdAssassin() {
  this.drawBoxes = function() {
    var container = document.getElementById("container");
    if ( !container ) {
      var e = document.createElement("div");
      e.id = "container";
      document.body.appendChild(e);
      container = e;
    }
    var i = 0;
    while ( i < 24 ) {
      var e = document.createElement("div");
      e.innerHTML = String.fromCharCode(65+i) ;
      e.setAttribute('style', 'border: 1px solid blue; height:50px; width:50px; float:left; margin:0 0 8px 8px');
      if ( i % 6 === 0 ) 
        e.style.clear = "both"; 
      container.appendChild(e);
      ++i;
    }
  }

  this.dimPage = function()
  {
    var i=document.createElement('iframe');
    i.setAttribute('name', '_dimmer');
    i.setAttribute('id', '_dimmer');
    i.setAttribute('allowtransparency', 'true');
//    i.setAttribute('style', 'border: 0; width: 1px; height: 1px; position: absolute; left: 0; top: 0;');
    i.setAttribute('style', 'border: 0; width: 100%; height: 100%; position: absolute; left: 0; top: 0;');
    i.setAttribute('style', 'background-color: #555; color: #555' );
    //i.setAttribute('onload', 'frameDidLoadipb563212++; frameLoadedipb563212();');
    document.body.appendChild(i);
    window.frames['_dimmer'].document.write(
    '<html><body style="background-color: transparent;">' + '<scr'+'ipt>' +
    "</scr"+"ipt></body></html>" );
  }

  this.noned = [];

  this.turn_on = function () 
  {
    var that = this;
    // CLICK DISAPPEAR
    document.body.onclick = function(e) { 
      var disp = e.toElement.style.display;
      e.toElement.style.display = "none";
      that.noned.push( {elt:e.toElement,prevState:disp} );
      if ( e.toElement && e.toElement.textContent )
        console.log("killed: " + e.toElement.textContent);
      return false; 
    };
    // UNDO DISAPPEAR
    document.body.onkeydown = function(e) {
        if ( e.keyCode === 90 ) { // 'Z'
            var obj = that.noned.pop();
            if ( obj ) {
                obj.elt.style.display = obj.prevState;
            }
        }
    };
    return "ON";
  }

  this.turn_off = function () {
    document.body.onclick = document.body.onkeydown = null;
    return "OFF";
  }
  this.toggle = function () {
    if ( document.body.onclick ) 
      return this.turn_off();
    else
      return this.turn_on();
  }
}

