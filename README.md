# Top Speed of Animals

The main goal of this project is to compare human's **top speed** with other animals (tortoise, elk, giraffe, and elephant are chosen in this case). In order to clearly see differences among human and the creatures, my idea is to put each of them in a "mouse-running wheel" ; therefore, we can easily learn from gradually lightened bulbs on the wheel and a speed measuring instrument which animal is faster or slower.


Some challenges or difficulties in this project: 
### How to make the wheels run, the bulbs lighten, and the measuring intruments generate individually according to different datas (or animals) ?
After several tries, I found out that utilizing "**INSTANCE MODE**" helps me quickly build one mode for one animal, and then just duplicated it and modified some parts of codes. Like an example below:

```
// Sketch One_Human
  var Human = function( p ) {

  p.setup = function() {
  p.createCanvas(800,600);
  };

  p.draw = function() {
  p.fill(50);
  p.ellipse(p.width/2,p.height/2,10,10);
  };
  };

  var myp5 = new p5(Human, 'c1')

// Sketch Two_Tortoise
  var Tortoise = function( p ) {

  p.setup = function() {
  p.createCanvas(800,600);
  };

  p.draw = function() {
  p.fill(100);
  p.ellipse(p.width/2,p.height/2,10,10);
  };
  };

  var myp5 = new p5(Tortoise, 'c2')
```

### How to position each mode in the place I want?
In purpose of putting all modes (total of 5) in the global mode, I used a way like this:

```
var canvas;
// Sketch One_Human
  var Human = function( p ) {

  p.setup = function() {
  canvas = p.createCanvas(800,600);
  canvas.position(200,0);
  };

  p.draw = function() {
  p.fill(50);
  p.ellipse(p.width/2,p.height/2,10,10);
  };
  };

  var myp5 = new p5(Human, 'c1')
```
