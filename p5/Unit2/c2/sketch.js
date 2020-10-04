var mic;
var vol;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(100);

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is


  switch (state) {
    case 0:
      background('red');
      text("Shhhh", 250, 250)
      if (vol > 0.10) { // if the volume is LOUD?
        // do something
        // here I'm setting the background to a random color
        state = 1;
      }

      break;

    case 1:
      background('green');
      text("QUIET DOWN", 250, 250)
      timer = timer + 1;
      if (timer > 3*60) {
        state = 0;
        timer = 0;
      }

      break;

  }

  // extra stuff for debugging
  //textSize(18);
  //text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
