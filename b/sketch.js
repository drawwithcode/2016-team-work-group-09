var defaultFrameRate = 30;

var maxDegree = 30;
var currentDegree = 0;
var aimDegree = 0;

var toBanlanceFrame = 60;
var step = 0;

var animals = [
  {name: 'Doggy', weight: 10},
  {name: 'Monkey', weight: 20},
  {name: 'Gorilla', weight: 60},
  {name: 'Lion', weight: 240},
  {name: 'Bull', weight: 600},
];
var human = {name: "Human", weight: 60};

var leftAnimal = null;
var leftCount = 0;
var rightCount = 0;
var leftWeight = 0;
var rightWeight = 0;
var maxCount = 24;

var leftAnchorX = 80;
var TopBarAnchorY = 150;

var circleDiameter = 50;
var intervalWidth = 120;

var stickLength = 600;

  function preload() {
    for (var index = 0; index < animals.length; index++) {
      animals[index].image = loadImage("./" + animals[index].name + ".png");
    }
    human.image = loadImage("./" + human.name + ".png");
  }
  
  function setup() {
    var w = Math.max(windowWidth, 1000);
    var h = Math.max(windowHeight, 720);
    
    createCanvas(w, h);
    stickLength = w - 160;
    maxDegree = Math.min(maxDegree, Math.atan2(h / 2, w) / Math.PI * 180);
    angleMode(DEGREES);
    frameRate(defaultFrameRate);
  }
  
  function drawAnimal(animal, x, y, isHuman, hasRemove, hasName) {
    // fill("#d2d3d4");
    // noStroke();
    // ellipse(x, y, circleDiameter, circleDiameter);
    image(animal.image, x - circleDiameter / 2, y - circleDiameter / 2, circleDiameter, circleDiameter);
    
    if (hasRemove) {
      if (isHuman) {
        fill("#00a1d3");
      } else {
        fill("#ff6494");
      }
      ellipse(x, y + circleDiameter * 7 / 8, circleDiameter / 2, circleDiameter / 2);
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(24);
      fill("#fff");
      text("-", x, y + circleDiameter * 7 / 8 + 6);
    } else if (hasName) {
      textAlign(CENTER);
      textStyle(BOLD);
      textSize(12);
      if (isHuman) {
        fill("#00a1d3");
      } else {
        fill("#ff6494");
      }
      noStroke();
      text(animal.name, x, y + circleDiameter);
    }
  };
  
  function draw() {
    background("#f2f2f2");
    fill("#dcdcdc");
    noStroke();
    rect(leftAnchorX / 2, TopBarAnchorY - circleDiameter, width - leftAnchorX, circleDiameter * 2);
  
    textAlign(CENTER);
    textStyle(ITALIC);
    textSize(24);
    fill("#e7923e");
    textFont("Georgia");
    text("Compare Human's Weight with Animals'", width / 2, TopBarAnchorY / 2);
    textFont("Helvetica");
    
    for (var index = 0; index < animals.length; index++) {
      drawAnimal(animals[index], leftAnchorX + intervalWidth * index, TopBarAnchorY - circleDiameter / 4, false, leftAnimal === animals[index] && leftCount > 0, true);
    }
  
    textSize(24);
    fill("#ff6494");
    text("Weight: " + leftWeight + " kg", leftAnchorX * 2, TopBarAnchorY + 96);
    
    drawAnimal(human, width - leftAnchorX, TopBarAnchorY - circleDiameter / 4, true, rightCount > 0, true);
    
    textSize(24);
    fill("#00a1d3");
    text("Weight: " + rightWeight + " kg", width - leftAnchorX * 2, TopBarAnchorY + 96);
  
    fill("#d54e5a");
    noStroke();
    rect(width / 2 - 36, TopBarAnchorY + 72, 72, 32, 4);
    
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(20);
    fill("#fff");
    noStroke();
    text("Reset", width / 2, TopBarAnchorY + 96);
    
    moveStep();
  
    fill("#ced6db");
    noStroke();
    triangle(width / 2, height * 3 / 4 + 6, width / 2 - 18, height * 3 / 4 + 40, width / 2 + 18, height * 3 / 4 + 40);
    
    translate(width / 2, height * 3 / 4);
    rotate(currentDegree);
    strokeCap(SQUARE);
    strokeWeight(10);
    stroke("#e7923e");
    line(-stickLength / 2, 0, stickLength / 2, 0);
    
    
    
    if (leftAnimal && leftCount) {
      for (var index = 0; index < leftCount; index++) {
        drawAnimal(leftAnimal, -stickLength / 2 + circleDiameter / 2 + circleDiameter * (index % 8), -circleDiameter * 3 / 4 - Math.floor(index / 8) * circleDiameter);
      }
    }
    if (rightCount) {
      for (var index = 0; index < rightCount; index++) {
        drawAnimal(human, stickLength / 2 - circleDiameter / 2 - circleDiameter * (index % 8), -circleDiameter * 3 / 4 - Math.floor(index / 8) * circleDiameter, true);
      }
    }
  }
  
  function mousePressed() {
    for (var index = 0; index < animals.length; index++) {
      // decide which animal has been click
      if (mouseX > leftAnchorX + intervalWidth * index - circleDiameter / 2 && mouseX < leftAnchorX + intervalWidth * index + circleDiameter / 2 && mouseY > TopBarAnchorY - circleDiameter  * 3 / 4 && mouseY < TopBarAnchorY + circleDiameter / 4) {
        // add
        if (leftAnimal === animals[index]) {
          leftCount = Math.min(maxCount, leftCount + 1);
        } else {
          leftAnimal = animals[index];
          leftCount = 1;
        }
      }
      if (mouseX > leftAnchorX + intervalWidth * index - circleDiameter / 4 && mouseX < leftAnchorX + intervalWidth * index + circleDiameter / 4 && mouseY > TopBarAnchorY + circleDiameter * 3 / 8 && mouseY < TopBarAnchorY + circleDiameter * 7 / 8) {
        //remove
        if (leftAnimal === animals[index] && leftCount) {
          leftCount = leftCount - 1;
          if (leftCount == 0) {
            leftAnimal = null;
          }
        }
      }
    }
    // human add
    if (mouseX > width - leftAnchorX - circleDiameter / 2 && mouseX < width - leftAnchorX + circleDiameter / 2 && mouseY > TopBarAnchorY - circleDiameter * 3 / 4 && mouseY < TopBarAnchorY + circleDiameter / 4) {
      rightCount = Math.min(maxCount, rightCount + 1);
    }
    // human remove
    if (mouseX > width - leftAnchorX - circleDiameter / 4 && mouseX < width - leftAnchorX + circleDiameter / 4 && mouseY > TopBarAnchorY + circleDiameter * 3 / 8 && mouseY < TopBarAnchorY + circleDiameter * 7 / 8) {
      if (rightCount) {
        rightCount = rightCount - 1;
      }
    }
    
    // rotate(currentDegree);
    // if (mouseX > -stickLength / 2 && mouseX < -stickLength / 2 + circleDiameter && mouseY > stickAnchorY - circleDiameter / 2 && mouseY < stickAnchorY + circleDiameter / 2) {
    //   if (leftAnimal) {
    //     leftCount = leftCount - 1;
    //     if (leftCount === 0) {
    //       leftAnimal = null;
    //     }
    //   }
    //
    // }
    // reset
    if (mouseX > width / 2 - 36 && mouseX < width / 2 + 36 && mouseY > TopBarAnchorY + 72 && mouseY < TopBarAnchorY + 104) {
      leftAnimal = null;
      leftCount = 0;
      rightCount = 0;
    }
    
    setStatus();
  }
  
  function setStatus() {
    leftWeight = leftAnimal && leftCount ? leftAnimal.weight * leftCount : 0;
    rightWeight = rightCount ? human.weight * rightCount : 0;
    
    aimDegree = leftWeight === rightWeight ? 0 : leftWeight > rightWeight ? -maxDegree : maxDegree;
    
    step = (aimDegree - currentDegree) / toBanlanceFrame;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
  }
  
  function moveStep() {
    if (currentDegree !== aimDegree) {
      if (currentDegree + step !== aimDegree
        && (currentDegree + step - aimDegree) / (currentDegree - aimDegree) < 0) {
        // if one step move too much
        currentDegree = aimDegree;
      } else {
        // normal step move
        currentDegree = currentDegree + step;
      }
    }
  }