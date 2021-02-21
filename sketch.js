 
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
 hr=hour()
 mn=minute()
 sc= second()
 angleMode(DEGREES)

}

function draw() {
  background("black");  

  translate (200,200)
  rotate (-90)
  scAngle=map(sc,0,60,0,360)
  mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)

  push ()
  rotate (scAngle)
  stroke ("red")
  strokeWeight (7)
  line(400,200,510,200)
  pop ()

  push ()
  rotate (mnAngle)
  stroke ("lightGreen")
  strokeWeight (7)
  line(400,200,480,200)
  pop ()

  push ()
  rotate (hrAngle)
  stroke ("blue")
  strokeWeight (7)
  line(400,200,440,200)
  pop ()


  stroke ("red")
  strokeWeight (8)
  noFill ()
  arc(0, 0, 260, 260,scAngle,0)
    
  stroke ("lightGreen")
  arc(0, 0, 280, 280,mnAngle,0)
  
  stroke ("blue")
  arc(0, 0, 300, 300,hrAngle,0)
  
  

  drawSprites();
}