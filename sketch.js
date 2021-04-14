let value = 0;
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

}
 function keyTyped(){
  console.log('key s{key} is being typed');
  console.log("key" + key + "is being typed);
           //save this image 
  if (key === 's'){ 
    console.log('key s is being type');
    
    saveCanvas('saveCanvas', 'jpg');
  }
   return false;
 }

}
