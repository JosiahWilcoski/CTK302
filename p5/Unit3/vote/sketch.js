let cars = [];
let f1, f2, f3 ;
let bg;
let fons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  f1 = loadFont("assets/Adventure.otf");
  f2 = loadFont("assets/FunSized.ttf");
  f3 = loadFont("assets/NewVictoriaDemo.otf");

  bg = loadImage("assets/fallPic.jpg") ;

  fonts = [f1, f2, f3] ;

  // Spawn 20 objects
  for (let i = 0 ; i < 20 ; i++) {
    cars.push(new Car());
  }

}

function draw() {
  background(100);
  image(bg, 0, 0, width, height)

  // display and move 20 objects
  for (let i = 0 ; i < 20 ; i++) {
    cars[i].display() ;
    cars[i].move() ;
  }
}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.size = random(15, 100);
    this.c = color(random(225, 255), random(25, 125), random(25, 125)) ;

    let b = floor(random(3));

    this.font = fonts[b] ;
  }

  // methods

  display() {
    fill(this.c);
    textFont(this.font);
    textSize(this.size);
    text("vote", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
