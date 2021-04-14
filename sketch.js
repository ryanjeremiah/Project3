let imgSave;
function setup() {
  createCanvas(800,800);
  background(400);
  
  strokeWeight(7);
}

function draw(){
  if (mouseIsPressed){
    stroke(map(mouseX, 10, 540, 20, 32, true))
    ellipse(width - mouseX, height - mouseY, width - pmouseX, height -pmouseY);
    ellipse(mouseX, mouse, pmouse, pmouseY);  
    
    
  }
function windowResized(){
resizeCanvas(widnowWidth, windowHeight);
  background(3, 252, 252);
}
