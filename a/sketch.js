var canvas_1,canvas_2,canvas_3,canvas_4,canvas_5;
var colors = [" rgba(255,249,87,0.8) ",
             " rgba(91,255,66,0.8) ",
             " rgba(71,255,252,0.8) ",
             " rgba(252,71,255,0.8) ",
             " rgba(255,114,71,0.8) "]; // light colors


// Sketch One_Tortoise
var tortoise = function( p ) { // p could be any variable name
  var centreX; // x position of centre wheel
  var centreY; // y position of centre wheel
  var r1 = 260; // radius of wheel
  var r2 = r1 - 50;
  var degree = 0; // light_01
  var degree_1 = 0;
  var n = 0.0; //noise
  var lightSize = 32;
  var speedTortoise = 0.01; // real speed : 0.3 km/h;
  var m = 5; // width of measurer 5/475
  var mH = 0; // movement of head
  var mF = 0; // movement of feet

  p.preload = function() {
    bulb_01 = p.loadImage("pic/light_01.png");
    label_01 = p.loadImage("pic/label_01.png");
    tortoise_01 = p.loadImage("pic/tortoise_01.png");
    tortoise_02 = p.loadImage("pic/tortoise_02.png");
    tortoise_03 = p.loadImage("pic/tortoise_03.png");
    tortoise_04 = p.loadImage("pic/tortoise_04.png");
    topspeed_01 = p.loadImage("pic/red_01.png");
  };
    
  p.setup = function() {
    canvas_1 = p.createCanvas(900, p.windowHeight);
    canvas_1.position(1100,0);
    centreX = p.width/2-50;
    centreY = p.height/2-10;
  };

  p.draw = function() {
    p.background(40);
    
  // measurer
  p.stroke(250);
  p.strokeWeight(3);
  p.noFill();
  p.line(centreX+200,centreY+250,centreX+350,centreY+250);
  p.arc(centreX+350,centreY+290,80,80,p.PI+p.HALF_PI,p.HALF_PI);
  p.line(centreX+350,centreY+330,centreX+250,centreY+330);
  p.line(centreX+285,centreY+322,centreX+285,centreY+338);
  p.line(centreX+290,centreY+322,centreX+290,centreY+338);
  p.line(centreX+295,centreY+322,centreX+295,centreY+338);
   // measurer_tube
  p.stroke(200);
  p.strokeWeight(2);
  p.line(centreX+220,centreY+317,centreX-260,centreY+317);
  p.line(centreX+220,centreY+343,centreX-260,centreY+343);
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
      
  p.strokeWeight(1);
  p.line(centreX+220,centreY+325,centreX-255,centreY+325);
  p.line(centreX+220,centreY+335,centreX-255,centreY+335);
  p.arc(centreX-255,centreY+330,10,10,p.PI-p.HALF_PI,p.PI+p.HALF_PI)
  
  p.fill(250,250,250,50);
  p.noStroke();
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
  p.rect(centreX-260,centreY+317,480,26);
   // measurer_calculator
  p.stroke(colors[2]);  
  p.strokeWeight(7);
  p.line(centreX+220,centreY+330,(centreX+220)-degree_1,centreY+330);
  
  p.fill(250);
  p.noStroke();
  p.ellipse(centreX+260,centreY+330,30,30);
  p.rect(centreX+220,centreY+315,40,30);
  p.rect(centreX+250,centreY+325,30,10);
      
      
  // frame of generator
  p.noFill();
  p.stroke(80);
  p.strokeWeight(9);
  p.arc(centreX,centreY,40,40,p.PI,0);
  p.line(centreX+20,centreY,centreX-200,centreY+250);
  p.line(centreX-20,centreY,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX-260,centreY+280);
  p.line(centreX+200,centreY+250,centreX+260,centreY+280);
  p.line(centreX-260,centreY+280,centreX+260,centreY+280);
    
  // wheel of generator
  p.strokeWeight(13);
  p.stroke(180);
  p.noFill();
  p.ellipse(centreX,centreY,r2*2);
p.push();
   p.strokeWeight(8);
   p.stroke(120);
   for (var a = 0 ; a < 360 ; a += 10) {
      p.line(centreX + r2*p.cos(p.radians(-degree+a)),centreY + r2*p.sin(p.radians(-degree+a)),centreX + r1*p.cos(p.radians(-degree+a)),centreY + r1*p.sin(p.radians(-degree+a)))
   }
p.pop();
  p.ellipse(centreX,centreY,r1*2);
    
  // bulb_01
  p.noStroke();
  var L = p.map(degree_1,0,m,0,200);
  p.fill(71,255,252,L); //colors[2]
  for (var b = 0 ; b < 360 ; b += 30){
     p.ellipse(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)),lightSize);
p.push();
  p.translate(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)));
  p.image(bulb_01,-18,-18,36,36);
p.pop();     
};
      
  // label_01
  p.image(label_01,760,centreY+230,118,47);

  // tortoise
  p.image(tortoise_02,centreX-100-mH,centreY+165,77,43); // head
  p.fill(40);
  p.noStroke();
  p.ellipse(centreX-83-mH,centreY+182,8,8); // eye
  if (p.mouseIsPressed) {
      mH = mH + 0.03;
  };
  if (mH >= 4){
      mH = 0;
  };
  p.image(tortoise_03,centreX-48+mF,centreY+190,40,42); // left foot
  p.image(tortoise_03,centreX+9-mF,centreY+190,40,42); // right foot
  if (p.mouseIsPressed) {
      mF = mF + 0.03;
  };
  if (mF >= 6){
      mF = 0;
  };
  p.image(tortoise_04,centreX+36,centreY+175,42,31); // tail
  var mT = p.map(p.mouseY,0,p.height,0,5);
  p.image(tortoise_01,centreX-55.5,centreY+125+mT,111,86); // body
  
  if (p.mouseIsPressed) {
      degree_1 = degree_1 + speedTortoise;
  } else {
      degree_1 = 0;
  };
  if (p.mouseIsPressed){
      n = n + .01;
  };
  var N = p.noise(n) * 10
  if (degree_1 >= m){
     degree_1 = m + N,
     p.stroke(230,0,18),
     p.strokeWeight(1),
     p.line(centreX+210-m,centreY+317,centreX+210-m,centreY+343); // red line 
     p.image(topspeed_01,centreX+169,centreY+276,72,41); // red label
  };  
  // make the generator rotate
  if (p.mouseIsPressed) {
      degree = degree + speedTortoise;
  };
};
};
var myp5 = new p5(tortoise , 'c1')

//////////////////////////////////////////////////////////////////////////////////////////////


// Sketch Two_Elk
var elk = function( p ) { // p could be any variable name
  var centreX; // x position of centre wheel
  var centreY; // y position of centre wheel
  var r1 = 260; // radius of wheel
  var r2 = r1 - 50;
  var degree = 0; // light_01
  var degree_1 = 0;
  var n = 0.0; //noise
  var lightSize = 32;
  var speedElk = 2.4; // real speed : 72.4 km/h;
  var m = 400; // width of measurer 400/475
  var mlF = 45; // movement of left foot
  var mrF = -45; // movement of right foot
  var mB = 0 ; // movement of head

  p.preload = function() {
    bulb_01 = p.loadImage("pic/light_01.png");
    label_02 = p.loadImage("pic/label_02.png");
    elk_01 = p.loadImage("pic/elk_01.png");
    elk_02 = p.loadImage("pic/elk_02.png");
    elk_03 = p.loadImage("pic/elk_03.png");
    elk_04 = p.loadImage("pic/elk_04.png");
    topspeed_02 = p.loadImage("pic/red_02.png");
  };
    
  p.setup = function() {
    canvas_2 = p.createCanvas(900, p.windowHeight);
    canvas_2.position(2000,0);
    centreX = p.width/2-50;
    centreY = p.height/2-10;
  };

  p.draw = function() {
    p.background(40);
    
  // measurer
  p.stroke(250);
  p.strokeWeight(3);
  p.noFill();
  p.line(centreX+200,centreY+250,centreX+350,centreY+250);
  p.arc(centreX+350,centreY+290,80,80,p.PI+p.HALF_PI,p.HALF_PI);
  p.line(centreX+350,centreY+330,centreX+250,centreY+330);
  p.line(centreX+285,centreY+322,centreX+285,centreY+338);
  p.line(centreX+290,centreY+322,centreX+290,centreY+338);
  p.line(centreX+295,centreY+322,centreX+295,centreY+338);
   // measurer_tube
  p.stroke(200);
  p.strokeWeight(2);
  p.line(centreX+220,centreY+317,centreX-260,centreY+317);
  p.line(centreX+220,centreY+343,centreX-260,centreY+343);
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
      
  p.strokeWeight(1);
  p.line(centreX+220,centreY+325,centreX-255,centreY+325);
  p.line(centreX+220,centreY+335,centreX-255,centreY+335);
  p.arc(centreX-255,centreY+330,10,10,p.PI-p.HALF_PI,p.PI+p.HALF_PI)
  
  p.fill(250,250,250,50);
  p.noStroke();
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
  p.rect(centreX-260,centreY+317,480,26);
   // measurer_calculator
  p.stroke(colors[0]);  
  p.strokeWeight(7);
  p.line(centreX+220,centreY+330,(centreX+220)-degree_1,centreY+330);
  
  p.fill(250);
  p.noStroke();
  p.ellipse(centreX+260,centreY+330,30,30);
  p.rect(centreX+220,centreY+315,40,30);
  p.rect(centreX+250,centreY+325,30,10);
      
      
  // frame of generator
  p.noFill();
  p.stroke(80);
  p.strokeWeight(9);
  p.arc(centreX,centreY,40,40,p.PI,0);
  p.line(centreX+20,centreY,centreX-200,centreY+250);
  p.line(centreX-20,centreY,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX-260,centreY+280);
  p.line(centreX+200,centreY+250,centreX+260,centreY+280);
  p.line(centreX-260,centreY+280,centreX+260,centreY+280);
    
  // wheel of generator
  p.strokeWeight(13);
  p.stroke(180);
  p.noFill();
  p.ellipse(centreX,centreY,r2*2);
p.push();
   p.strokeWeight(8);
   p.stroke(120);
   for (var a = 0 ; a < 360 ; a += 10) {
      p.line(centreX + r2*p.cos(p.radians(-degree+a)),centreY + r2*p.sin(p.radians(-degree+a)),centreX + r1*p.cos(p.radians(-degree+a)),centreY + r1*p.sin(p.radians(-degree+a)))
   }
p.pop();
  p.ellipse(centreX,centreY,r1*2);
    
  // bulb_01
  p.noStroke();
  var L = p.map(degree_1,0,m,0,200);
  p.fill(255,249,87,L); //colors[0]
  for (var b = 0 ; b < 360 ; b += 30){
     p.ellipse(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)),lightSize);
p.push();
  p.translate(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)));
  p.image(bulb_01,-18,-18,36,36);
p.pop();     
};
      
  // label_02
  p.image(label_02,760,centreY+230,118,47);
      
  // elk
p.push();
  p.translate(centreX-60,centreY+115);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mlF=mlF-1.3));
  };
  if (mlF <= 0) {
      mlF = 45
  }
  p.image(elk_03,-13,0,25,108); // front foot_left
p.pop();
p.push();
  p.translate(centreX-30,centreY+115);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mlF=mlF-1.3));
  };
  if (mlF <= 0) {
      mlF = 45
  }
  p.image(elk_04,-13,0,25,108); // back foot_left
p.pop();
p.push();
  p.translate(centreX+30,centreY+115);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mrF=mrF+1.3));
  };
  if (mrF >= 0) {
      mrF = -45
  }
  p.image(elk_03,-13,0,25,108); // front foot_right
p.pop();
p.push();
  p.translate(centreX+60,centreY+115);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mrF=mrF+1.3));
  };
  if (mrF >= 0) {
      mrF = -45
  }
  p.image(elk_04,-13,0,25,108); // back foot_right
p.pop();
  if (p.mouseIsPressed) {
      mB = mB + 0.4;
  };
  if (mB >= 5) {
      mB = 0;
  };
  p.image(elk_01,centreX-130,centreY-10-mB,212,145); // body
  p.fill(40);
  p.noStroke();
  p.ellipse(centreX-90,centreY+8-mB,8,8); // eye
  p.image(elk_02,centreX-80,centreY-40-mB,146,57); // antlers

  if (p.mouseIsPressed) {
      degree_1 = degree_1 + speedElk;
  }else{
      degree_1 = 0;
  }
  if (p.mouseIsPressed){
      n = n + .01;
  }
  var N = p.noise(n) * 30
  if (degree_1 >= m){
     degree_1 = m + N,
     p.stroke(230,0,18),
     p.strokeWeight(1),
     p.line(centreX+210-m,centreY+317,centreX+210-m,centreY+343), // red line 
     p.image(topspeed_02,centreX-225,centreY+276,72,41); // red label
};
  // make the generator rotate
  if (p.mouseIsPressed) {
        degree = degree + speedElk;
    };
};
};
var myp5 = new p5(elk , 'c2')

//////////////////////////////////////////////////////////////////////////////////////////////

// Sketch Three_Giraffe
var giraffe = function( p ) { // p could be any variable name
  var centreX; // x position of centre wheel
  var centreY; // y position of centre wheel
  var r1 = 260; // radius of wheel
  var r2 = r1 - 50;
  var degree = 0; // light_01
  var degree_1 = 0;
  var n = 0.0; //noise
  var lightSize = 32;
  var speedGiraffe = 1.7; // real speed : 52 km/h;
  var m = 300; // width of measurer 300/475
  var mlF = 40;  // movement of left foot
  var mrF = -40; // movement of right foot
  var mB = 0; // movement of head

  p.preload = function() {
    bulb_01 = p.loadImage("pic/light_01.png");
    label_03 = p.loadImage("pic/label_03.png");
    giraffe_01 = p.loadImage("pic/giraffe_01.png");
    giraffe_02 = p.loadImage("pic/giraffe_02.png");
    giraffe_03 = p.loadImage("pic/giraffe_03.png");
    topspeed_03 = p.loadImage("pic/red_03.png");
  };
    
  p.setup = function() {
    canvas_3 = p.createCanvas(900, p.windowHeight);
    canvas_3.position(2900,0);
    centreX = p.width/2-50;
    centreY = p.height/2-10;
  };

  p.draw = function() {
    p.background(40);
    
  // measurer
  p.stroke(250);
  p.strokeWeight(3);
  p.noFill();
  p.line(centreX+200,centreY+250,centreX+350,centreY+250);
  p.arc(centreX+350,centreY+290,80,80,p.PI+p.HALF_PI,p.HALF_PI);
  p.line(centreX+350,centreY+330,centreX+250,centreY+330);
  p.line(centreX+285,centreY+322,centreX+285,centreY+338);
  p.line(centreX+290,centreY+322,centreX+290,centreY+338);
  p.line(centreX+295,centreY+322,centreX+295,centreY+338);
   // measurer_tube
  p.stroke(200);
  p.strokeWeight(2);
  p.line(centreX+220,centreY+317,centreX-260,centreY+317);
  p.line(centreX+220,centreY+343,centreX-260,centreY+343);
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
      
  p.strokeWeight(1);
  p.line(centreX+220,centreY+325,centreX-255,centreY+325);
  p.line(centreX+220,centreY+335,centreX-255,centreY+335);
  p.arc(centreX-255,centreY+330,10,10,p.PI-p.HALF_PI,p.PI+p.HALF_PI)
  
  p.fill(250,250,250,50);
  p.noStroke();
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
  p.rect(centreX-260,centreY+317,480,26);
   // measurer_calculator
  p.stroke(colors[1]);  
  p.strokeWeight(7);
  p.line(centreX+220,centreY+330,(centreX+220)-degree_1,centreY+330);
  
  p.fill(250);
  p.noStroke();
  p.ellipse(centreX+260,centreY+330,30,30);
  p.rect(centreX+220,centreY+315,40,30);
  p.rect(centreX+250,centreY+325,30,10);
      
      
  // frame of generator
  p.noFill();
  p.stroke(80);
  p.strokeWeight(9);
  p.arc(centreX,centreY,40,40,p.PI,0);
  p.line(centreX+20,centreY,centreX-200,centreY+250);
  p.line(centreX-20,centreY,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX-260,centreY+280);
  p.line(centreX+200,centreY+250,centreX+260,centreY+280);
  p.line(centreX-260,centreY+280,centreX+260,centreY+280);
    
  // wheel of generator
  p.strokeWeight(13);
  p.stroke(180);
  p.noFill();
  p.ellipse(centreX,centreY,r2*2);
p.push();
   p.strokeWeight(8);
   p.stroke(120);
   for (var a = 0 ; a < 360 ; a += 10) {
      p.line(centreX + r2*p.cos(p.radians(-degree+a)),centreY + r2*p.sin(p.radians(-degree+a)),centreX + r1*p.cos(p.radians(-degree+a)),centreY + r1*p.sin(p.radians(-degree+a)))
   }
p.pop();
  p.ellipse(centreX,centreY,r1*2);
    
  // bulb_01
  p.noStroke();
  var L = p.map(degree_1,0,m,0,200);
  p.fill(91,255,66,L); //colors[1]
  for (var b = 0 ; b < 360 ; b += 30){
     p.ellipse(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)),lightSize);
p.push();
  p.translate(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)));
  p.image(bulb_01,-18,-18,36,36);
p.pop();     
};
      
  // label_03
  p.image(label_03,760,centreY+230,118,47);

  // giraffe
p.push();
  p.translate(centreX-51,centreY+90);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mlF=mlF-1));
  };
  if (mlF <= 0) {
      mlF = 40
  }
  p.image(giraffe_02,-13,0,26,142); // front foot_left
p.pop();
p.push();
  p.translate(centreX-22,centreY+90);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mlF=mlF-1));
  };
  if (mlF <= 0) {
      mlF = 40
  }
  p.image(giraffe_03,-13,0,26,142); // back foot_left
p.pop();
p.push();
  p.translate(centreX+22,centreY+90);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mrF=mrF+1));
  };
  if (mrF >= 0) {
      mrF = -40
  }
  p.image(giraffe_02,-13,0,26,142); // front foot_right
p.pop();
p.push();
  p.translate(centreX+51,centreY+90);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mrF=mrF+1));
  };
  if (mrF >= 0) {
      mrF = -40
  }
  p.image(giraffe_03,-13,0,26,142); // back foot_right
p.pop();
  if (p.mouseIsPressed) {
      mB = mB + 0.3;
  };
  if (mB >= 5) {
      mB = 0;
  };
  p.image(giraffe_01,centreX-118,centreY-250-mB,204,380); // body
  p.fill(40);
  p.noStroke();
  p.ellipse(centreX-75,centreY-207-mB,8,8); // eye
      
  if (p.mouseIsPressed) {
      degree_1 = degree_1 + speedGiraffe;
  }else{
      degree_1 = 0;
  }
  if (p.mouseIsPressed){
      n = n + .01;
  }
  var N = p.noise(n) * 30
  if (degree_1 >= m){
     degree_1 = m + N,
     p.stroke(230,0,18),
     p.strokeWeight(1),
     p.line(centreX+210-m,centreY+317,centreX+210-m,centreY+343), // red line 
     p.image(topspeed_03,centreX-125,centreY+276,72,41); // red label
};
  // make the generator rotate
  if (p.mouseIsPressed) {
        degree = degree + speedGiraffe;
    };
};
};
var myp5 = new p5(giraffe , 'c3')

//////////////////////////////////////////////////////////////////////////////////////////////

// Sketch Four_Elephant
var elephant = function( p ) { // p could be any variable name
  var centreX; // x position of centre wheel
  var centreY; // y position of centre wheel
  var r1 = 260; // radius of wheel
  var r2 = r1 - 50;
  var degree = 0; // light_01
  var degree_1 = 0;
  var n = 0.0; //noise
  var lightSize = 32;
  var speedElephant = 1.3; // real speed : 40 km/h;
  var m = 250; // width of measurer 250/475
  var mB = 0; // movement of body
  var mlF = 10 // movement of left foot
  var mrF = -10 // movement of right foot
  
  p.preload = function() {
    bulb_01 = p.loadImage("pic/light_01.png");
    label_04 = p.loadImage("pic/label_04.png");
    elephant_01 = p.loadImage("pic/elephant_01.png");
    elephant_02 = p.loadImage("pic/elephant_02.png");
    elephant_03 = p.loadImage("pic/elephant_03.png");
    topspeed_04 = p.loadImage("pic/red_04.png");
  };
    
  p.setup = function() {
    canvas_1 = p.createCanvas(900, p.windowHeight);
    canvas_1.position(3800,0);
    centreX = p.width/2-50;
    centreY = p.height/2-10;
  };

  p.draw = function() {
    p.background(40);
    
  // measurer
  p.stroke(250);
  p.strokeWeight(3);
  p.noFill();
  p.line(centreX+200,centreY+250,centreX+350,centreY+250);
  p.arc(centreX+350,centreY+290,80,80,p.PI+p.HALF_PI,p.HALF_PI);
  p.line(centreX+350,centreY+330,centreX+250,centreY+330);
  p.line(centreX+285,centreY+322,centreX+285,centreY+338);
  p.line(centreX+290,centreY+322,centreX+290,centreY+338);
  p.line(centreX+295,centreY+322,centreX+295,centreY+338);
   // measurer_tube
  p.stroke(200);
  p.strokeWeight(2);
  p.line(centreX+220,centreY+317,centreX-260,centreY+317);
  p.line(centreX+220,centreY+343,centreX-260,centreY+343);
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
      
  p.strokeWeight(1);
  p.line(centreX+220,centreY+325,centreX-255,centreY+325);
  p.line(centreX+220,centreY+335,centreX-255,centreY+335);
  p.arc(centreX-255,centreY+330,10,10,p.PI-p.HALF_PI,p.PI+p.HALF_PI)
  
  p.fill(250,250,250,50);
  p.noStroke();
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
  p.rect(centreX-260,centreY+317,480,26);
   // measurer_calculator
  p.stroke(colors[3]);
  p.strokeWeight(7);
  p.line(centreX+220,centreY+330,(centreX+220)-degree_1,centreY+330);
  
  p.fill(250);
  p.noStroke();
  p.ellipse(centreX+260,centreY+330,30,30);
  p.rect(centreX+220,centreY+315,40,30);
  p.rect(centreX+250,centreY+325,30,10);
      
      
  // frame of generator
  p.noFill();
  p.stroke(80);
  p.strokeWeight(9);
  p.arc(centreX,centreY,40,40,p.PI,0);
  p.line(centreX+20,centreY,centreX-200,centreY+250);
  p.line(centreX-20,centreY,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX-260,centreY+280);
  p.line(centreX+200,centreY+250,centreX+260,centreY+280);
  p.line(centreX-260,centreY+280,centreX+260,centreY+280);
    
  // wheel of generator
  p.strokeWeight(13);
  p.stroke(180);
  p.noFill();
  p.ellipse(centreX,centreY,r2*2);
p.push();
   p.strokeWeight(8);
   p.stroke(120);
   for (var a = 0 ; a < 360 ; a += 10) {
      p.line(centreX + r2*p.cos(p.radians(-degree+a)),centreY + r2*p.sin(p.radians(-degree+a)),centreX + r1*p.cos(p.radians(-degree+a)),centreY + r1*p.sin(p.radians(-degree+a)))
   }
p.pop();
  p.ellipse(centreX,centreY,r1*2);
    
  // bulb_01
  p.noStroke();
  var L = p.map(degree_1,0,m,0,200);
  p.fill(252,71,255,L); //colors[3]
  for (var b = 0 ; b < 360 ; b += 30){
     p.ellipse(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)),lightSize);
p.push();
  p.translate(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)));
  p.image(bulb_01,-18,-18,36,36);
p.pop();     
};
      
  // label_04
  p.image(label_04,760,centreY+230,118,47);

  // elephant
  p.push();
  p.translate(centreX-140,centreY+105);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mlF=mlF-0.3));
  };
  if (mlF <= 0) {
      mlF = 10
  };
  p.image(elephant_03,9.2,0,93,100); // left foot
  p.pop();
  p.push();
  p.translate(centreX+150,centreY+105);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mrF=mrF+0.3));
  };
  if (mrF >= 0) {
      mrF = -10
  };
  p.image(elephant_03,-93,0,93,100); // right foot
  p.pop();
  if (p.mouseIsPressed) {
      mB = mB + 0.15;
  };
  if (mB >= 4) {
      mB = 0;
  };
  p.image(elephant_01,centreX-240,centreY-58+mB,408,226); // body
  p.fill(40);
  p.noStroke();
  p.ellipse(centreX-140,centreY-10+mB,8,8); // eye
  p.push();
  p.translate(centreX-185,centreY-133+mB);
  p.image(elephant_02,54,75,108,151); // ear
  p.pop();
  
  if (p.mouseIsPressed) {
      degree_1 = degree_1 + speedElephant;
  } else {
      degree_1 = 0;
  };
  if (p.mouseIsPressed){
      n = n + .01;
  };
  var N = p.noise(n) * 25
  if (degree_1 >= m){
     degree_1 = m + N,
     p.stroke(230,0,18),
     p.strokeWeight(1),
     p.line(centreX+210-m,centreY+317,centreX+210-m,centreY+343); // red line 
     p.image(topspeed_04,centreX-75,centreY+276,72,41); // red label
  };  
  // make the generator rotate
  if (p.mouseIsPressed) {
      degree = degree + speedElephant;
  };
};
};
var myp5 = new p5(elephant , 'c4')

//////////////////////////////////////////////////////////////////////////////////////////////

// Sketch Five_Human
var human = function( p ) { // p could be any variable name
  var centreX; // x position of centre wheel
  var centreY; // y position of centre wheel
  var r1 = 260; // radius of wheel
  var r2 = r1 - 50;
  var degree = 0; // light_01
  var degree_1 = 0;
  var n = 0.0; //noise
  var lightSize = 32;
  var speedHuman = 0.6; // real speed : 17.6 km/h;
  var m = 80; // width of measurer 80/475
  var mB = 0; // movement of body
  var mfF = 0; // movement of front foot
  var mbF = 0; // movement of back foot
  var mfH = 0; // movement of front hand
  var mbH = 0; // movement of back hand

  p.preload = function() {
    bulb_01 = p.loadImage("pic/light_01.png");
    label_05 = p.loadImage("pic/label_05.png");
    human_01 = p.loadImage("pic/human_01.png");
    human_02 = p.loadImage("pic/human_02.png");
    human_03 = p.loadImage("pic/human_03.png");
    human_04 = p.loadImage("pic/human_04.png");
    topspeed_05 = p.loadImage("pic/red_05.png");
    title = p.loadImage("pic/title.png");
  };
    
  p.setup = function() {
    canvas_1 = p.createCanvas(1100, p.windowHeight);
    canvas_1.position(0,0);
    centreX = p.width/2+50;
    centreY = p.height/2-10;
  };

  p.draw = function() {
    p.background(40);
    
  // measurer
  p.stroke(250);
  p.strokeWeight(3);
  p.noFill();
  p.line(centreX+200,centreY+250,centreX+350,centreY+250);
  p.arc(centreX+350,centreY+290,80,80,p.PI+p.HALF_PI,p.HALF_PI);
  p.line(centreX+350,centreY+330,centreX+250,centreY+330);
  p.line(centreX+285,centreY+322,centreX+285,centreY+338);
  p.line(centreX+290,centreY+322,centreX+290,centreY+338);
  p.line(centreX+295,centreY+322,centreX+295,centreY+338);
   // measurer_tube
  p.stroke(200);
  p.strokeWeight(2);
  p.line(centreX+220,centreY+317,centreX-260,centreY+317);
  p.line(centreX+220,centreY+343,centreX-260,centreY+343);
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
      
  p.strokeWeight(1);
  p.line(centreX+220,centreY+325,centreX-255,centreY+325);
  p.line(centreX+220,centreY+335,centreX-255,centreY+335);
  p.arc(centreX-255,centreY+330,10,10,p.PI-p.HALF_PI,p.PI+p.HALF_PI)
  
  p.fill(250,250,250,50);
  p.noStroke();
  p.arc(centreX-260,centreY+330,26,26,p.PI-p.HALF_PI,p.PI+p.HALF_PI);
  p.rect(centreX-260,centreY+317,480,26);
   // measurer_calculator
  p.stroke(colors[4]);  
  p.strokeWeight(7);
  p.line(centreX+220,centreY+330,(centreX+220)-degree_1,centreY+330);
  
  p.fill(250);
  p.noStroke();
  p.ellipse(centreX+260,centreY+330,30,30);
  p.rect(centreX+220,centreY+315,40,30);
  p.rect(centreX+250,centreY+325,30,10);
      
      
  // frame of generator
  p.noFill();
  p.stroke(80);
  p.strokeWeight(9);
  p.arc(centreX,centreY,40,40,p.PI,0);
  p.line(centreX+20,centreY,centreX-200,centreY+250);
  p.line(centreX-20,centreY,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX+200,centreY+250);
  p.line(centreX-200,centreY+250,centreX-260,centreY+280);
  p.line(centreX+200,centreY+250,centreX+260,centreY+280);
  p.line(centreX-260,centreY+280,centreX+260,centreY+280);
    
  // wheel of generator
  p.strokeWeight(13);
  p.stroke(180);
  p.noFill();
  p.ellipse(centreX,centreY,r2*2);
p.push();
   p.strokeWeight(8);
   p.stroke(120);
   for (var a = 0 ; a < 360 ; a += 10) {
      p.line(centreX + r2*p.cos(p.radians(-degree+a)),centreY + r2*p.sin(p.radians(-degree+a)),centreX + r1*p.cos(p.radians(-degree+a)),centreY + r1*p.sin(p.radians(-degree+a)))
   }
p.pop();
  p.ellipse(centreX,centreY,r1*2);
    
  // bulb_01
  p.noStroke();
  var L = p.map(degree_1,0,m,0,200);
  p.fill(255,114,71,L); //colors[4]
  for (var b = 0 ; b < 360 ; b += 30){
     p.ellipse(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)),lightSize);
p.push();
  p.translate(centreX+r1*p.cos(p.radians(-degree+b)),centreY+r1*p.sin(p.radians(-degree+b)));
  p.image(bulb_01,-18,-18,36,36);
p.pop();     
};
      
  // label_05
  p.image(label_05,960,centreY+230,118,47);

  // human
p.push();
  p.translate(centreX,centreY+70-mB);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mbH=mbH+1.5));
  };
  if (mbH >= 25) {
      mbH = -25
  };
  p.image(human_02,-10.5,-10,21,94); // back hand
p.pop();
p.push();
  p.translate(centreX+2.5,centreY+110-mB);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mbF=mbF+1.5));
  };
  if (mbF >= 25) {
      mbF = -25
  };
  p.image(human_04,-22,-14,37,138); // back foot
p.pop();
p.push();
  p.translate(centreX+2.5,centreY+110-mB);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mfF=mfF-1.5));
  };
  if (mfF <= -25) {
      mfF = 25
  };
  p.image(human_03,-22,-14,37,138); // front foot
p.pop();
  if (p.mouseIsPressed) {
      mB = mB + 0.15;
  };
  if (mB >= 3) {
      mB = 0;
  };
  p.image(human_01,centreX-21.5,centreY-mB,43,120); // body
  p.fill(40);
  p.noStroke();
  p.ellipse(centreX-7,centreY+24-mB,4,4); // eye
p.push();
  p.translate(centreX,centreY+70-mB);
  if (p.mouseIsPressed) {
      p.rotate(p.radians(mfH=mfH-1.5));
  };
  if (mfH <= -25) {
      mfH = 25
  };
  p.image(human_02,-10.5,-10,21,94); // front hand
p.pop();
      
  if (p.mouseIsPressed) {
      degree_1 = degree_1 + speedHuman;
  } else {
      degree_1 = 0;
  };
  if (p.mouseIsPressed){
      n = n + .01;
  };
  var N = p.noise(n) * 25
  if (degree_1 >= m){
     degree_1 = m + N,
     p.stroke(230,0,18),
     p.strokeWeight(1),
     p.line(centreX+210-m,centreY+317,centreX+210-m,centreY+343); // red line 
     p.image(topspeed_05,centreX+95,centreY+276,72,41); // red label
  };  

  p.image(title,30,30,172,81); // title
      
  // make the generator rotate
  if (p.mouseIsPressed) {
      degree = degree + speedHuman;
  };
};
};
var myp5 = new p5(human , 'c5')
