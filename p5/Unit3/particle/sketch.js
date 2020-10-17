let cars = [];

function setup() {
  createCanvas(500, 500);

  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }

  noStroke() ;

}

function draw() {
  background('grey') ;
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1) ;
    }
  }
}

class Car {

  constructor() {
    this.pos = createVector(width/2, height-80);
    this.vel = createVector(random(-4,4), random(-15,-10));
    this.r = random(255);
    this.g = random(255);
    this.b = 255 //random(255);
    this.a = random(200, 255);
    this.w = random(40, 60) ;
  }

  display() {
    fill(this.r, this.g, this.b, this.a) ;
    //rect(this.pos.x, this.pos.y, this.w, 25) ;
    //fill('black') ;
    //ellipse(this.pos.x-20, this.pos.y+15, 15) ;
    //ellipse(this.pos.x+20, this.pos.y+15, 15) ;
    //text("word", this.pos.x, this.pos.y) ;
    quad(this.pos.x, this.pos.y, this.pos.x+20, this.pos.y+30, this.pos.x, this.pos.y+70, this.pos.x-20, this.pos.y+30) ;
  }

  move() {
    this.pos.add(this.vel) ;
    this.a = this.a - 10 ;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > width) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
