function setup() {
  createCanvas(600, 600);
  background(220);
  
  strokeWeight(15);
  
}

function draw() {
  if(mouseIsPressed == true){
stroke(map(mouseX, 0,600,0, 255, true))  
    line( width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
function keyType(){
  if(key === 'a'){
    console.log('key a is being type')
  }
  
  return false
}

}
