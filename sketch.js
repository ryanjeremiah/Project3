function setup() {
  createCanvas(800,800);
  background(400);
  
  strokeWeight(7);
}

function draw(){
  if (!mouseIsPressed == false){
    stroke(map(mouseX, 1, 550, 2, 250, true))
    ellipse(width - mouseX, height - mouseY, width - pmouseX, height -pmouseY);
    ellipse(mouseX, mouse, pmouse, pmouseY);  
    
    return false;
  }

}
