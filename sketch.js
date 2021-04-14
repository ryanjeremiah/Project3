function setup() {
  createCanvas(800,800);
  background(400);
  
}

function draw(){
  if (mouseIsPressed == true){
    ellipse(mouseX, mouseY, 30,80); 
}

