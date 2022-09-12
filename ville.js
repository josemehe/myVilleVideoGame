'tile and basic items'
  var keys = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
  document.addEventListener("keydown", keyType);
  var c = document.getElementById("villeTile");
  var cContext = c.getContext("2d");
'load tile'
  var tile = 
  {
    url: "tile.png",
    loadOk: false
  }
  tile.image = new Image();
  tile.image.src = tile.url;
  tile.image.addEventListener("load", loadTile);
  function loadTile()
  {
   tile.loadOk = true;
   draw();
  }
'load cow'
  var cow = 
  {
   url:"cow.png",
   loadOk: false
  };

  cow.image = new Image();
  cow.image.src = cow.url;
  cow.image.addEventListener("load", loadCow)

  function loadCow()
  {
    cow.loadOk = true;
    draw();
  }
'load pig'
  var pig = 
  {
    url:"pig.png",
    loadOk: false
  };

  pig.image = new Image();
  pig.image.src = "pig.png";
  pig.image.addEventListener("load", loadPig)
  function loadPig()
  {
    pig.loadOk = true
    draw()
  }
'load chicken'
  var chicken = 
  {
    url:"chicken.png",
    loadOk: false
  }
  chicken.image = new Image();
  chicken.image.src = "chicken.png";
  chicken.image.addEventListener("load", loadChicken)
  function loadChicken()
  {
   chicken.loadOk = true
    draw()
  }

'pig move'
    var x = 0, y = 0 'starting point'

    function keyType(event)
{
    switch (event.keyCode)
    {
        case keys.UP:
            console.log("UP funciona");
            break;
        
        case keys.DOWN:
            console.log("DOWN funciona");
            break;
        
        case keys.LEFT:
            console.log("LEFT funciona");
            break;
        
        case keys.RIGHT:
            console.log("RIGHT funciona");
            break;

        default:
            console.log("otra tecla");
            break;
    }
}

function pigMove(x_i, y_i, x_f, y_f, canvas)
{

}
function draw()
  {
    if (tile.loadOk)
    {
      c.drawImage(tile.image, 0, 0);
    }
    if (cow.loadOk)
    {
     for (var i = 0; i < 20; i++)
      {
       var x = random(0, 420)
       var y = random(0, 420)
       c.drawImage(cow.image, x, y);
      }
    }
   if (pig.loadOk)
   {
    for (var i = 0; i < 5; i++)
     {
       var x = random(0, 420)
       var y = random(0, 420)
       c.drawImage(pig.image, x, y);
     }
   }
    if (chicken.loadOk)
   {
    for (var i = 0; i < 5; i++)
     {
        var x = random(0, 420)
        var y = random(0, 420)
        c.drawImage(chicken.image, x, y);
     }
   }

  }

function random(min, max)
  {
   var result;
   result = Math.floor(Math.random() * (max - min + 1)) + min;
   return result;
  }
