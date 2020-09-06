  var img1, img2, img3;

  function setup() {
    createCanvas(800, 800)
    imageMode(CENTER);

    img1 = loadImage("pics/image1.png");
    img2 = loadImage("pics/image2.png");
    img3 = loadImage("pics/image3.jpg");

  }

  function draw() {
    background(100);
    image(img1, width / 2, height / 2, 200, 200);
    image(img2, width / 2, height / 2 + 210, 200, 200);
    image(img3, width / 2, height / 2 - 210, 200, 200);

  }
