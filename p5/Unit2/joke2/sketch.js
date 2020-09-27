  let timer = 0 ;
  let state = 0 ;

function setup() {
  createCanvas(500, 500) ;
  textSize(32) ;
  textAlign(CENTER) ;
  rectMode(CENTER) ;
}

function draw() {

  switch(state) {

    case 0:
    background('red') ;
    text("Why did the chicken cross the road?", 250, 250, 350, 400) ;

    timer++ ;

    if(time > 200) {
      state = 1 ;
      timer = 0 ;
    }
    break ;

    case 1:
    background('blue') ;
    text("To get to the other side", 250, 250, 350, 400) ;

        timer++ ;

        if(time > 200) {
          state = 0 ;
          timer = 0 ;
        }
    break ;

  }

}
