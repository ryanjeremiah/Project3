function setup() {
  createCanvas(800,800);
  background(400);
  
  strokeWeight(20);
}

function draw(){
  if (!mouseIsPressed == false){
    ellipse(mouseX, mouseY, pmouseX, pmouseY, 30,80);
  }
}

