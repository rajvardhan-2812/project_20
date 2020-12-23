var car,wall;

var speed,weight;

var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1500,200,10,height/2)

  speed = random(55,90);

  weight = random(400,1500);

  car.velocityX= speed;

  deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background("black");  
if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  if(deformation<100)
  {
    car.shapeColor=("green")
  }
  else if(deformation>180)
  {
    car.shapeColor=("red")
  }
  else
  {
    car.shapeColor=("yellow")
  }
}

  drawSprites();
}