function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 50, 133);
  
}

function draw(){
  if (mouseIsPressed == true){
    ellipse(mouseX, mouseY, 30,80); 
}

