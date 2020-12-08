/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variables
let x = 0.0, y = 0.0, z = 0.0 ; // accelerometer variables
let bunnyImage;
let space;
let xPosition = 0;
let yPosition = 0;

var img0, img1, img2, img3, img4;
let cars = [];
let f1, f2;
let bg;
let img = [];
let maxCars = 20;
let frogPos;
let state = 0;
let timer = 0;
let i = 0;
let petals = 0;
let highscore = 0;

function setup() {

  createCanvas(500, 500);

  space = loadImage("assets/space.png");
  img4 = loadImage("assets/ship.png");

  frogPos = createVector(250, 250);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  f1 = loadFont("assets/game_over.ttf");
  f2 = loadFont("assets/space age.ttf");

  img0 = loadImage("assets/image0.png");
  img1 = loadImage("assets/image1.png");
  img2 = loadImage("assets/image2.png");
  img3 = loadImage("assets/image3.png")

  img = [img1, img2, img3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

//---------------------------------

function draw() {
  textFont(f1);
  textSize(35);

  // Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

  window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

  switch (state) {
    case 0:
      background('black');
      fill(255);
      textFont(f2);
      textSize(30);
      text("Click to start!", width / 2, height / 2, 250, 400);
      text("Welcome to my game!", width / 2, height / 2);
      break;

    case 1:
      background('black');
      fill(255);
      textFont(f1);
      text("Meteors smashed: " + petals, 70, 50);
      text("Highscore: " + highscore, 50, 100);
  push();
      xPosition = map(gamma, -18, 18, 0, width);
      yPosition = map(beta, 25, 40, 0, height);

      translate(xPosition, yPosition); // move everything over by x, y

      rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

      image(img4, 0, 0, 75, 125);
      // rect(0, 0, 100, 100) ;

  pop();

    frogPos.x = xPosition
    frogPos.y = yPosition

    for (i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 75) {
      cars.splice(i, 1);
      cars.push(new Car());
      petals++ ;
    }

  }
      timer++;
      if (timer > 10 * 60) {
        state = 2;
      }
      break;

    case 2:
      background('black');
      fill(255);
      text("Meteors smashed: " + petals, 70, 50);
      text("Highscore: " + highscore, 50, 100);
      text("Play again?", width / 2, height / 2);
      resetTheGame()
      break;
  }

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
    this.pos = createVector(random(25, 525), 5);
    this.vel = createVector(random(0, -5), random(3, 7));

    let b = floor(random(0, 3)); // random number between 0 - 2.99999
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
