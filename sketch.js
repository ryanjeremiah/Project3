function setup() {
  createCanvas(windowWidth, windowHeight);
  background(52, 168, 235);
  
  strokeWeight(20);
}

function draw(){
   if (mouseIsPressed == true){
     rect (width - mouseX, height - mouseY,  width - pmouseX,  height - pmouseY);
     triangle (width - mouseX, height - mouseY, width - mousex, height - pmousY);
   }
  
function windowResized(){
  resizeCanvas(windowWidth, widowHeight);
}
 
}
