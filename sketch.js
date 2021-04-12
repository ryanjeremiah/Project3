let array = [];
let nosieX = 0.0;
let stronkeWidth = 5;
let s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 50, 133);
  saveCanvas('myCanvas', 'jpg');
  
}

function draw(){
  
    background(220, 50, 133,20);
    strokeWeight(strokeWidth);
   
    nosieX += 0.09;
    strokeWidth = noise(noiseX) * 310;
   
    stroke(map(mouseX, 0, 600, 0,255, true))
    line(width -mouseX, height -mouseY, width - mouseX, height -pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    background(0);
     array.push([mouseX, mouseY]);
  }

    
  }
  
function keyType() {
  
  if(key === 's'){
    // save this image
    saveCanvas(s, 'myCanvas', 'png');
 
    
    beginShape();
    for(let i = 0; i< array.length; i++){
      line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
     endShape();
    line(array[1][0], array[0][1], array[2][0], array[1][1]);
    line(array[0][0], array[0][1], array[1][0], array[1][1]);
  }

  
  return false
}

}
