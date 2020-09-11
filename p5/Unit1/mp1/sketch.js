var f;  

function setup() {
  createCanvas(500, 500) ;

  f = loadFont("assets/Val.ttf");

  textAlign(CENTER);
}

function draw() {
noStroke();   

if (mouseIsPressed) {

   background(50, 45, 70);

  //ground
fill(204);
rect(0, 340, width);
  //bolts
      fill(random(255), random(255), random(255))
      quad(65, 0, 45, 100, 125, 70, 150, 0)
      quad(80, 85, 170, 55, 111, 160, 65, 177)
      triangle(90, 165, 140, 145, 80, 272)

      quad(215, 0, 195, 100, 275, 70, 300, 0)
      quad(230, 85, 320, 55, 261, 160, 215, 177)
      triangle(240, 165, 290, 145, 230, 272)

      quad(365, 0, 345, 100, 425, 70, 450, 0)
      quad(380, 85, 470, 55, 411, 160, 365, 177)
      triangle(390, 165, 440, 145, 380, 272)

//Emilia Electro
  //hair back
fill(237, 118, 157)
rect(200, 190, 100, 110)
triangle(200, 190, 190, 240, 200, 240)
triangle(300, 190, 310, 240, 300, 240)
triangle(200, 240, 180, 300, 200, 300)
triangle(300, 240, 320, 300, 300, 300)
triangle(180, 300, 250, 320, 320, 300)
  //body
fill(234, 200, 151);
ellipse(250, 200, 100, 100)
rect(225, 255, 50, 60)
rect(240, 240, 20, 20)
ellipse(277, 270, 10, 30)
ellipse(223, 270, 10, 30)
ellipse(236, 315, 20, 55)
ellipse(264, 315, 20, 55)
quad(228, 330, 235, 373, 240, 373, 245, 325)
quad(272, 330, 265, 373, 260, 373, 255, 325)
  fill('black')
  arc(228, 210, 15, 5, 0, PI);
  arc(272, 210, 15, 5, 0, PI);
  //hair front
fill(237, 118, 157)
arc(250, 205, 110, 120, PI, 0);
triangle(250, 145, 230, 133, 245, 138)
  fill(234, 200, 151)
  triangle(245, 190, 240, 205, 245, 205)
  //dress
    fill(41, 32, 73)
    rect(230, 252, 5, 10)
    rect(265, 252, 5, 10)
    rect(222, 262, 56, 60)
    triangle(222, 295, 211, 323, 230, 323)
    triangle(225, 320, 235, 333, 260, 320)
    triangle(278, 295, 267, 323, 286, 323)
    triangle(275, 320, 265, 333, 240, 320)

    fill(87, 232, 122)
      quad(233, 307, 245, 305, 240, 318, 230, 323)
      quad(237, 320, 249, 313, 237, 331, 234, 329)

    fill(237, 135, 172)
      quad(231, 309, 243, 307, 238, 320, 228, 325)
      quad(233, 322, 247, 315, 235, 333, 232, 331)
  //middle arm left
    fill(234, 200, 151)
    quad(222, 270, 222, 295, 215, 300, 210, 295)
  //magic guitar
    fill(87, 232, 122)
    quad(260, 310, 333, 322, 311, 335, 315, 360)
    triangle(225, 290, 190, 285, 200, 264)
    fill(20, 21, 20)
    quad(206, 285, 210, 277, 300, 325, 296, 333)
  //lower arm
    fill(234, 200, 151)
    quad(278, 270, 278, 295, 288, 320, 295, 315)
    ellipse(290, 320, 10, 20)
    ellipse(218, 292, 10, 15)
  //ground
    fill(195)
    rect(0, 350, 500, 50)
    fill(175)
    rect(0, 360, 500, 50)
    fill(155)
    rect(0, 380, 500, 50)
    fill(135)
    rect(0, 410, 500, 50)
    fill(111)
    rect(0, 450, 500, 50)
  //leggings
    fill(41, 32, 73)
    quad(230, 343, 235, 373, 240, 373, 243, 343)
    quad(270, 343, 265, 373, 260, 373, 257, 343)
  //shoes
    fill(18, 12, 38)
    arc(237, 375, 13, 15, PI, 0);
    arc(263, 375, 13, 15, PI, 0);

} else {

  background(95, 90, 125);

  //ground
  fill(111);
  rect(0, 340, 500, 200);

  //Emilia Electro
    //hair back
  fill(237, 118, 157)
  rect(200, 190, 100, 110)
  triangle(200, 190, 190, 240, 200, 240)
  triangle(300, 190, 310, 240, 300, 240)
  triangle(200, 240, 180, 300, 200, 300)
  triangle(300, 240, 320, 300, 300, 300)
  triangle(180, 300, 250, 320, 320, 300)
    //body
  fill(234, 200, 151);
  ellipse(250, 200, 100, 100)
  rect(225, 255, 50, 60)
  rect(240, 240, 20, 20)
  ellipse(277, 270, 10, 30)
  ellipse(223, 270, 10, 30)
  ellipse(236, 315, 20, 55)
  ellipse(264, 315, 20, 55)
  quad(228, 330, 235, 373, 240, 373, 245, 325)
  quad(272, 330, 265, 373, 260, 373, 255, 325)
    fill('black')
    ellipse(227, 210, 15, 20)
    ellipse(272, 210, 15, 20)
    //hair front
  fill(237, 118, 157)
  arc(250, 205, 110, 120, PI, 0);
  triangle(250, 145, 230, 133, 245, 138)
    fill(234, 200, 151)
    triangle(245, 190, 240, 205, 245, 205)
    //dress
      fill(41, 32, 73)
      rect(230, 252, 5, 10)
      rect(265, 252, 5, 10)
      rect(222, 262, 56, 60)
      triangle(222, 295, 211, 323, 230, 323)
      triangle(225, 320, 235, 333, 260, 320)
      triangle(278, 295, 267, 323, 286, 323)
      triangle(275, 320, 265, 333, 240, 320)

      fill(87, 232, 122)
        quad(233, 307, 245, 305, 240, 318, 230, 323)
        quad(237, 320, 249, 313, 237, 331, 234, 329)

      fill(237, 135, 172)
        quad(231, 309, 243, 307, 238, 320, 228, 325)
        quad(233, 322, 247, 315, 235, 333, 232, 331)
    //middle arm left
      fill(234, 200, 151)
      quad(222, 270, 222, 295, 215, 300, 210, 295)
    //magic guitar
      fill(87, 232, 122)
      quad(260, 310, 333, 322, 311, 335, 315, 360)
      triangle(225, 290, 190, 285, 200, 264)
      fill(20, 21, 20)
      quad(206, 285, 210, 277, 300, 325, 296, 333)
    //lower arm
      fill(234, 200, 151)
      quad(278, 270, 278, 295, 288, 320, 295, 315)
      ellipse(290, 315, 10, 15)
      ellipse(215, 290, 10, 15)
    //leggings
      fill(41, 32, 73)
      quad(230, 343, 235, 373, 240, 373, 243, 343)
      quad(270, 343, 265, 373, 260, 373, 257, 343)
    //shoes
      fill(18, 12, 38)
      arc(237, 375, 13, 15, PI, 0);
      arc(263, 375, 13, 15, PI, 0);

      fill('White');
      textFont(f);
      textSize(15);
      text("Emilia Electro was just a regular girl", 250, 25);
      text("trying to make her way as a rock star", 250, 40)
      text("till she came upon a magic guitar!", 250, 55)
      text("It gave her incredible powers to protect the world", 250, 70)
      text("and create awesome music!", 250, 85)
}
}
