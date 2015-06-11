var hero

var heroWidth = 90
var heroHeight = 50

var dx = 0
var dy = 0
var movePerFrame = 27

function Hero(x, y)
{
  this.xLocation = x
  this.yLocation = y

  this.xBottom = this.xLocation + 40
  this.yBottom = this.yLocation + 90

  this.isDead = false

  this.health = 100
}

function paintHero(heroObj)
{
  if (heroObj.isDead)
  {
    ctx.drawImage(heroObj.imgDead, heroObj.xLocation, heroObj.yLocation)
  }
  else
  {
    if(heroObj.direction == "E")
    {
      ctx.drawImage(heroObj.imgE, heroObj.xLocation, heroObj.yLocation)
    }
    else if(heroObj.direction == "N")
    {
      ctx.drawImage(heroObj.imgN, heroObj.xLocation, heroObj.yLocation)
    }
    else if(heroObj.direction == "S")
    {
      ctx.drawImage(heroObj.imgS, heroObj.xLocation, heroObj.yLocation)
    }
    else
    {
      ctx.drawImage(heroObj.imgW, heroObj.xLocation, heroObj.yLocation)
  }
}

function spawnHero(x, y)
{
  hero = new Hero(x, y)
}

//needs to be modified
var up, down, left, right 

$(document).keydown(function(e){
  var key = e.which;
  if(key == "65") dx = -1; 
  if(key == "87") dy = -1;
  if(key == "68") dx = 1;
  if(key == "83") dy = 1;

  if(key == "37") 
  {
    e.preventDefault();

    if(!left)
    {
      left = true

      hero.direction = "W"
      hero.xBottom = hero.xLocation + 40
      hero.yBottom = hero.yLocation + 90
    }
  
  } 
  if(key == "38")
  {
    e.preventDefault();

    if(!up)
    {
      up = true
          
      hero.direction = "N"
      hero.xBottom = hero.xLocation + 90
      hero.yBottom = hero.yLocation + 40  
    }
      
  }
  if(key == "39") 
  {
    e.preventDefault();

    if(!right)
    {
      right = true

      hero.direction = "E"
      hero.xBottom = hero.xLocation + 40    
      hero.yBottom = hero.yLocation + 90 
    }
  }
  if(key == "40")
  {
    e.preventDefault();

    if(!down)
    {
      down=true

      hero.direction = "S"
      hero.xBottom = hero.xLocation + 90
      hero.yBottom = hero.yLocation + 40 
    }
  }
})

$(document).keyup(function(e){
  var key = e.which;
  if(key == "65") dx = 0; 
  if(key == "87") dy = 0;
  if(key == "68") dx = 0;
  if(key == "83") dy = 0;

  if(key == "40") down = false;
  if(key == "39") right = false;
  if (key == "38") up = false;
  if (key == "37") left = false;
})


function moveHero(heroObj)
{
  if(heroObj.isDead)
    return

  //do movement here
  heroObj.xLocation += dx*movePerFrame;
  heroObj.yLocation += dy*movePerFrame;
  heroObj.xBottom += dx*movePerFrame
  heroObj.yBottom += dy*movePerFrame

  if(checkHitboxes(heroObj) || heroObj.yLocation <= 210)
  {
    heroObj.xLocation -= dx*movePerFrame;
    heroObj.yLocation -= dy*movePerFrame;
    heroObj.xBottom -= dx*movePerFrame
    heroObj.yBottom -= dy*movePerFrame
    return
  }

  /*
  if(food && heroObj.xLocation <= food.xBottom && heroObj.yLocation <= food.yBottom)
  {
    hero.health += food.health
    removeFood()

    if(hero.health > 100)
      hero.health = 100

    $(".health").html(hero.health)
  }
  */

  scrollBy(dx*movePerFrame, dy*movePerFrame)

}