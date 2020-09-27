let state = 0 ;

function setup() {
createCanvas(500, 500) ;
textSize(32) ;
textAlign(CENTER) ;
}

function draw() {

switch(state) {

  case 0:
      background('grey');
      text("case0", 250, 250)
      break;

    case 1:
      background(random(255), random(255), random(255) );
      text("case1", 250, 250)
      break;

    case 2:
      background('white');
      text("case2", 250, 250)
      break;
  }

  fill('red') ;
  rect(100, 100, 100, 100) ;

}

function mouseReleased() {

  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    state++;
    if (state > 2) {
      state = 0 ;
    }
  }

}
