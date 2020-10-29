var img0, img1, img2, img3, img4;
let cars = [];
let f1, f2, f3;
let bg;
let img = [];
let maxCars = 20;
let frogPos;
let state = 0;
let timer = 0;
let x = 250;
let y = 250;
let i = 0;
let petals = 0;
let highscore = 0;

function setup() {
  createCanvas(600, 600);
  textSize(32);
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  f1 = loadFont("assets/Kashima Demo.otf");
  f2 = loadFont("assets/FunSized.ttf");
  f3 = loadFont("assets/NewVictoriaDemo.otf");
  bg = loadImage("assets/fallPic.jpg");

  img0 = loadImage("assets/image0.png");
  img1 = loadImage("assets/image1.png");
  img2 = loadImage("assets/image2.png");
  img3 = loadImage("assets/image3.png");
  img4 = loadImage("assets/image4.png");

  song1 = loadSound("assets/background.mp3");
  song2 = loadSound("assets/endscreen.mp3");

  img = [img1, img2, img3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  textFont(f1);
  textSize(35);
  switch (state) {
    case 0:
      background(232, 188, 209);
      image(img0, width / 2, height / 2, 600, 600);
      fill(255);
      text("Click to shake the tree", 350, 250, 250, 400);
      text("Welcome to my game!", width / 2, height / 2);
      break;

    case 1:
      background(232, 188, 209);
      text("Petals colected: " + petals, 140, 50);
      text("Highscore: " + highscore, 115, 100);
      game();
      timer++;
      if (timer > 10 * 60) {
        state = 2;
      }
      break;

    case 2:
      background(232, 188, 209);
      text("Petals colected: " + petals, 150, 50);
      text("Highscore: " + highscore, 115, 100);
      text("You won!", width / 2, height / 2);
      resetTheGame()
      break;
  }

}

function game() {

  //  background(100);

  image(img0, width / 2, height / 2, 600, 600);

  // display and move objects
  for (i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 120) {
      cars.splice(i, 1);
      cars.push(new Car());
      petals++ ;
    }

  }

  // draw the frog
  image(img4, frogPos.x, frogPos.y, 120, 120);
  checkForKeys();

}

function resetTheGame() {
  cars = [];
  for (i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
  if (petals > highscore) {
    highscore = petals;
  }
  petals = 0
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      resetTheGame();
      state = 0;
      break;

  }
}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(250, 525), random(100, 225));
    this.vel = createVector(random(0, -5), random(3, 7));

    let b = floor(random(1, 3)); // random number between 0 - 2.99999
    this.img = img[b];
  }

  // methods

  display() {
    //  rect(this.pos.x, this.pos.y, 50, 25);
    image(this.img, this.pos.x, this.pos.y, 75, 75);
    // image(name, this.pos.x, this.pos.y) ;

  }

  move() {
    this.pos.add(this.vel);
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].pos.x > width) {
        cars.splice(i, 1);
        cars.push(new Car());
      }

      if (cars[i].pos.x < 0) {
        cars.splice(i, 1);
        cars.push(new Car());
      }

      if (cars[i].pos.y > height) {
        cars.splice(i, 1);
        cars.push(new Car());
      }

      if (cars[i].pos.y < 0) {
        cars.splice(i, 1);
        cars.push(new Car());
      }
    }

  }

}
