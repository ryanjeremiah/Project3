function setup() {
  createCanvas(800,800);
  background(400);
  
  strokeWeight(7);
}

function draw(){
  if (mouseIsPressed){
    stroke(map(mouseX, 10,540,20,32 true))
    ellipse(width - mouseX, height - mouseY, width - pmouseX, height -pmouseY);
    ellipse(mouseX, mouse, pmouse, pmouseY);  
    
    
  }
function keyType(){
  console.log('key s is being type')
 
  if (key === 's'){
    saveCanvas('file name', 'jpg')
    
  }
  return false;
  
}
