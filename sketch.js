let value = 0;
let imgAdd;

function setup() {
  createCanvas(800,800);
  background(400);
  
  stroke('rgba(73%, 0%, 11%, 4%)');
  strokeWeight(7);
}

function draw(){
  if (!mouseIsPressed == false){
    stroke(map(mouseX, 1, 200, 2, 200, true))
    ellipse(width - mouseX, height - mouseY, width - pmouseX, height -pmouseY);
    ellipse(mouseX, mouse, pmouse, pmouseY);
  }
function imgAdd(){
  if (mouseIsPressed)
    resizeCanvas(reX*800,800);
  if(img){
      image(imag, 0,0,width, height)
}
  
}
