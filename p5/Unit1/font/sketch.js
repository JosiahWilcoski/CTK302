var f;  
var f1;

  function setup() { 
    createCanvas(800, 800);  

    f = loadFont("assets/Val.ttf");   
    f1 = loadFont("assets/1942.ttf");   

    textAlign(CENTER); 
  }  

  function draw() { 
    background(100);  

    textFont(f); 
    textSize(60); 
    text("Test1", width / 2, height / 2);   

    textFont(f1); 
    textSize(40); 
    text("Test2", width / 2, height / 2-30);   

  } 
