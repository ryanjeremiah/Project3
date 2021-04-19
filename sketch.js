 function setup() {
  createCanvas(windowWidth, windowHeight);
  background(#42f542);
  noCursor():
  
  strokeWeight(10);
 }

function windowResized(){
  resizeCanvas(windowWidth, widowHeight); 
}

function draw(){
   if (keyIsPressed == true){
    if (key == 's'){
    ellipse();
   }else if (key == 's'){
    saveCanvas('fileName', 'jpg');
   }
 
function mousePressed(){
  clear();
  background(168)
}

function triangles(){
ellipse (mouseX, mouseY, pmouseX, pmouseY);
 translate(width, height);
  ellipse((mouseX * -2), (mouseY * -4), (pmouseX * -6), (pmouseY * -8));
  pop();
  push();
  translate(width, 0);
  ellipse((mouseX * -4), (mouseY), (pmouseX * -8), (pmouseY));
  pop();
  push();
  translate(0, height);
  ellipse((mouseX), (mouseY * -3), (pmouseX), (pmouseY * -6));
  pop();
}
 
}
