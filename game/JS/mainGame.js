var game_loop

//image vars
var background = document.getElementById("background");

//framerate
var frame = 30
var frameCount = 0

//Canvas stuff
var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();

//Lets save the cell width in a variable for easy control
var cw = 10;

var toggle = false

//topx and topy are the topleft corner of the box
//bottomx and bottomy are the bottomleft corner of the box
function Hitbox(topX, topY, bottomX, bottomY)
{
  this.topX = topX
  this.topY = topY
  this.bottomX = bottomX
  this.bottomY = bottomY

  //assumes obj has: xLocation, yLocation, xBottom, yBottom
  this.isTouching= function(obj)
  {
    if(!(obj.xLocation > this.bottomX 
      || obj.xBottom < this.topX
      || obj.yLocation > this.bottomY
      || obj.yBottom < this.topY))
    {
      // console.log(obj.xLocation + " " + obj.yLocation + " " + obj.xBottom + " " + obj.yBottom)
      return true
    }
    return false
  }
}

function init()
{ 
  if(typeof game_loop != "undefined") clearInterval(game_loop);
  game_loop = setInterval(paint, frame);
}

//Lets paint the snake now
function paint()
{
  if (frameCount == frame*1000)
  {
    frameCount = 0
  }

  frameCount++
  //Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, w, h);

  ctx.drawImage(background,0,0)

  //scroll if needed
  scrollPage(hero.xLocation, hero.yLocation)

  checkGameOver()

}

$(document).keydown(function(e){
  var key = e.which;
  // press escape to menu
  if(key == "27") {
    toggleEscape()
  }
});

function scrollPage()
{
  window.scrollTo(hero.xLocation - window.innerWidth/2, hero.yLocation - window.innerHeight/2); 
}

$(window).on('beforeunload', function() {
      $(window).scrollTop(0, 0);
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

// Fade out intro screen
$('.lets-go').click(function() {
  $('.cover').fadeOut();
  init();
});

function gameOver()
{
  
  $(".health").html("0")

  clearInterval(game_loop)
  

}