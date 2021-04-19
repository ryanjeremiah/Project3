 function setup() {
  createCanvas(windowWidth, windowHeight);
  background(73%, 45%, 0%, 4%);
  noCursor():
  
  strokeWeight(10);
  
 }

function draw(){
   if (keyIsPressed == true){
     triangles():
   }else if (key == 'r'){
    ellipse():
   }else if (key == 'j'){
    rect();
   }else if (key == 's'){
    saveCanvas('fileName', 'jpg');
   }
 
function mousePressed(){
  clear();
  background(168)
}

function windowResized(){
  resizeCanvas(windowWidth, widowHeight);
}
 
}
