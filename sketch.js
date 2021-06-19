var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var sc1;
var bg,iss,issImg;

function preload(){
  spacecraft1=loadImage("images/spacecraft1.png");
  spacecraft2=loadImage("images/spacecraft2.png");
  spacecraft3=loadImage("images/spacecraft3.png");
  spacecraft4=loadImage("images/spacecraft4.png");

  bg=loadImage("images/spacebg.jpg");
  issImg=loadImage("images/iss.png");
}

function setup() {
  createCanvas(900,550);
  sc1=createSprite(800, 450, 50, 50);
  sc1.addImage(spacecraft1);
  sc1.scale=0.2;

  iss=createSprite(400,150);
  iss.addImage(issImg)
  iss.scale=0.8;
  //iss.debug=true;
  iss.setCollider("rectangle",-20,0,60,70);
}

function draw() {
  background(bg); 

  if (keyDown(LEFT_ARROW)){
    sc1.addImage(spacecraft3)
    sc1.x-=8;
  }
  if (keyDown(RIGHT_ARROW)){
    sc1.addImage(spacecraft4)
    sc1.x+=8;
  }
  if (keyDown(DOWN_ARROW)){
    sc1.addImage(spacecraft2)
  }
  if (keyDown(UP_ARROW)){
    sc1.addImage(spacecraft2)
    sc1.y-=8;
  }

  if(sc1.isTouching(iss)){
    fill("red");
    textSize(27);
    text("Docking Successful!",500,400);
    sc1.x=sc1.x;
    sc1.y=sc1.y;
  }

  drawSprites();
}