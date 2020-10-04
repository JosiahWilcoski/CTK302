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
    text("What's the best part of switzerland?", 250, 250, 350, 400) ;

    timer++ ;

    if(time > 200) {
      state = 1 ;
      timer = 0 ;
    }
    break ;

    case 1:
    background('blue') ;
    text("Well the flag is a big plus", 250, 250, 350, 400) ;

        timer = timer + 1 ;

        if(time > 30) {
          state = 0 ;
          timer = 0 ;
        }
    break ;

  }

}
