var img0, img1;
let timer = 0 ;
let state = 0 ;
let x = 250 ;
let y = 250 ;
let leaves = 1 ;

function setup() {
  createCanvas(500, 500) ;
  textSize(32) ;
  textAlign(CENTER) ;
  rectMode(CENTER) ;
  imageMode(CENTER);

  img0 = loadImage("pics/image0.png");
  img1 = loadImage("pics/image1.png");
}

function draw() {

  switch(state) {

    case 0:
    background(232, 188, 209);
    image(img0, 250, 250, 500, 500);
    fill(255);
    text("Click to shake the tree", 350, 250, 250, 400) ;

    break;

    case 1:
    background(232, 188, 209);
    image(img0, width / 2, height / 2, 500, 500);
    image(img1, x, y, 500, 500);
    timer = timer + 1;
    x = x + 1;
    y = y + .5;
    if (timer > 60) {
      state = 2;
      timer = 0;
    }

    break;

    case 2:
    background(232, 188, 209);
    image(img0, width / 2, height / 2, 500, 500);
    image(img1, x, y, 500, 500);
    timer = timer + 1;
    x = x - 1;
    y = y + 1;
    if (timer > 60) {
      state = 3;
      timer = 0;
    }

    break;

    case 3:
    background(232, 188, 209);
    image(img0, width / 2, height / 2, 500, 500);
    image(img1, x, y, 500, 500);
    timer = timer + 1;
    x = x + 1;
    y = y + .5;
    if (timer > 60) {
      state = 4;
      timer = 0;
    }

    break;

    case 4:
    background(232, 188, 209);
    image(img0, width / 2, height / 2, 500, 500);
    image(img1, x, y, 500, 500);
    timer = timer + 1;
    x = x - 1;
    y = y + 1;
    if (timer > 60) {
      state = 5;
      timer = 0;
    }

    break;

    case 5:
    background(232, 188, 209);
    image(img0, width / 2, height / 2, 500, 500);
    image(img1, x, y, 500, 500);
    timer = timer + 1;
    x = x + 1;
    y = y + .5;
    if (timer > 60) {
      state = 6;
      timer = 0;
    }

    break;

    case 6:
    background(232, 188, 209);
    image(img0, width / 2, height / 2, 500, 500);
    image(img1, x, y, 500, 500);
    timer = timer + 1;
    x = x - .5;
    y = y + .5;
    if (timer > 60) {
      state = 7;
      timer = 0;
    }

    break;

    case 7:
    background(232, 188, 209);
    image(img0, width / 2, height / 2, 500, 500);
    image(img1, x, y, 500, 500);
    break;

    case 8:
    background(241, 97, 151);
    text("And thus, another leaf falls.", 150, 250, 250, 400) ;
    text("Click to let another leaf fall", 350, 600, 250, 400) ;
    text("Number of leaves collected: " + leaves, 250, 425, 250, 400) ;

}
}

function mouseReleased(){
  if ((mouseX > 225) && (mouseX < 475) && (mouseY > 50) && (mouseY < 150)) {
    state++;
  }
  if ((mouseX > 280) && (mouseX < 300) && (mouseY > 450) && (mouseY < 475)) {
    state++;
  }
  if ((mouseX > 225) && (mouseX < 475) && (mouseY > 350) && (mouseY < 450)) {
    state = 0;
    leaves++;
    x = 250
    y = 250
  }
}
