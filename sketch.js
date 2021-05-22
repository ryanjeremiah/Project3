let array = [];


function setup() {
  createCanvas(windowWidth, windowHeight);                       background(235, 52, 168);
    noCursor();
    strokeWeight(1);
}

function draw() {
 if (mouseIsPressed){
    fill(123, 173, 129);
    stroke(map(mouseX,  0, 5, 1, 0, true))
    ellipse (width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    ellipse (mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
 }
}

function keyTyped(){
  
  if (key === 'r'){
    saveCanvas('fileName', 'png');
  } else if ( key === 'y'){
    //clear the image
   clear();
   
  }
  
  return false;
  
}

function mousePressed(){
  console.log("mouse pressed function");
  array =[];
  console.log(array)
}
  
  
