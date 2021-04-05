let array = [];


function setup() {
  createCanvas(1000, 1000);
  background(220);
  strokeWeight(25);
  
}

function draw() {
  if(mouseIsPressed){  
     // line(mouseX, mouseY, pmouseX, pmouseY);
     array.push([mouseX, mouseY]);
  }
function keyType(){
  
  if(key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key==='d'){
    // display image
    
    line(array[0][0], array[0][1], array[1][0], array[1][1]);
  }
  
  return false
}

}
