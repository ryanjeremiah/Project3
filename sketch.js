function setup() {
  createCanvas(windowWidth, windowHeight);
  background(52, 168, 235);
  
  strokeWeight(10);
}

function draw(){
   if (mouseIsPressed == true){
     ellipse(width - mouseX, height - mouseY,  width - pmouseX,  height - pmouseY);
     
   }
  
function windowResized(){
  resizeCanvas(windowWidth, widowHeight);
}
 
}
