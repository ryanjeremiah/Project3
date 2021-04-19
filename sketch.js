let j = createCanvas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(190, 3, 252);
  noCursor():
  
  strokeWeight(10);
 
}

function draw(){
   if (keyIsPressed == true){
    if (key == 'r'){
    ellipse();
   }else if (key == 'a'){
     rect();
    }
   }else if (key == 'j'){
    saveCanvas('fileName', 'jpg');
   }
 
function mousePressed(){
  clear();
  background(168)
 
function creatCanvas(){
 saveCanvas (100,100);
 
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
 function triangles(){
rect(mouseX, mouseY, pmouseX, pmouseY);
 translate(width, height);
  rect((mouseX * -1), (mouseY * -6), (pmouseX * -5), (pmouseY * -3));
  pop();
  push();
  translate(width, 0);
  rect((mouseX * -3), (mouseY), (pmouseX * -3), (pmouseY));
  pop();
  push();
  translate(0, height);
  rect((mouseX), (mouseY * -7), (pmouseX), (pmouseY * -8));
  pop();
 }

function windowResized(){
  resizeCanvas(windowWidth, widowHeight); 
 
}
 
}
