let value = 0;
function setup() {
  createCanvas(800,800);
  background(400);
  
  strokeWeight(10);
}

function draw(){
  if (!mouseIsPressed == false){
    stroke(map(mouseX, 1, 200, 2, 200, true))
    ellipse(width - mouseX, height - mouseY, width - pmouseX, height -pmouseY);
    ellipse(mouseX, mouse, pmouse, pmouseY);
  }

}
 function keyTyped(){
  console.log('key s{key} is being typed')
  console.log("key" + key + "is being typed)
           //save this image 
  if (key === 's'){ 
    console.log('key s is being type')
  }
   return false;
 }
 function save(){
    saveCanvas(s,'fileName', 'jpg');
 }
}
