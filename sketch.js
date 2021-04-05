let array = [];
function setup() {
  createCanvas(600, 600);
  background(220);
  
  strokeWeight(15);
  
}

function draw() {
  if(mouseIsPressed == true){
  stroke(map(mouseX, 0,600,0, 255, true))  
     line(mouseX, mouseY, pmouseX, pmouseY);
    // line( width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    array.push([mouseX, mouseY]);
  }
function keyType(){
  
  if(key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    // display image
    console.log(array);
  }
  
  return false
}

}
