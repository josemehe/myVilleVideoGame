'tile'
v = document.getElementById("villeTile");
vContext = v.getContext("2d");
var mapa = "tile.png";
'draw tile'
var tile = new Image();
tile.src = mapa;
tile.addEventListener("load", drawTile);
function drawTile()
{
  vContext.drawImage(tile, 0, 0);
}
'draw cow'
var cow = new Image();
cow.src = "cow.png";
cow.addEventListener("load", drawCow)
function drawCow()
{
  vContext.drawImage(cow, 10, 10);
}
'draw pig'
var pig = new Image();
pig.src = "pig.png";
pig.addEventListener("load", drawPig)
function drawPig()
{
  vContext.drawImage(pig, 10, 300);
}
'draw chicken'
var chicken = new Image();
chicken.src = "chicken.png";
chicken.addEventListener("load", drawChicken)
function drawChicken()
{
  vContext.drawImage(chicken, 300, 150);
}
