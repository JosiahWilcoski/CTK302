  let timer = 0 ;
  let state = 0 ;

function setup() {
  createCanvas(500, 500) ;
  textSize(32) ;
  textAlign(CENTER) ;
}

function draw() {
  switch (state) {
    case 0:
      background('purple');
      text("Be there or be square", 250, 250) ;
      break;

    case 1:
      background('orange');
      text("Because you won't be around", 250, 250) ;
      break;
  }

}

function mouseReleased(){
  state++ ;
  if (state > 1){
    state = 0;
  }
}
