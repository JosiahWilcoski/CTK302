  var x = -250 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
noStroke();   
  background(100) ;

  push() ;
  translate(x, 0) ;
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
  x = x + 5 ;

  if (x > width) {
    x = -250 ;
  }
  pop() ;

}
