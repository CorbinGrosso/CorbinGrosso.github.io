const INNER_CIRCLE_SIZE = 100;
const OUTER_CIRCLE_SIZE = 25;
const TOTAL_LOOPS = 10;
const NUM_PIXELS_PLOTTED_PER_CIRCLE = 360;
const PIXELS_DRAWN_PER_FRAME = 100;

var numPixel = 0;
var colors = {
  r: 255,
  rDir: 0,
  g: 0,
  gDir: 1,
  b: 0,
  bDir: 0,
  update: function() {
    this.r += this.rDir;
    this.g += this.gDir;
    this.b += this.bDir;
    if (this.r === 255 && this.g === 0 && this.b === 0) {
      this.gDir = 1;
      this.bDir = 0;
    } else if (this.r === 255 && this.g === 255 && this.b === 0) {
      this.rDir = -1;
      this.gDir = 0;
    } else if (this.r === 0 && this.g === 255 && this.b === 0) {
      this.rDir = 0;
      this.bDir = 1;
    } else if (this.r === 0 && this.g === 255 && this.b === 255) {
      this.gDir = -1;
      this.bDir = 0;
    } else if (this.r === 0 && this.g === 0 && this.b === 255) {
      this.rDir = 1;
      this.gDir = 0;
    } else if (this.r === 255 && this.g === 0 && this.b === 255) {
      this.rDir = 0;
      this.bDir = -1;
    } 
  }
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(255);
  strokeWeight(2);
}

function draw() {
  for (i = numPixel; i < numPixel + PIXELS_DRAWN_PER_FRAME; i++) {
    stroke(colors.r, colors.g, colors.b);
    colors.update();
    drawSpirograph(NUM_PIXELS_PLOTTED_PER_CIRCLE, OUTER_CIRCLE_SIZE, INNER_CIRCLE_SIZE, TOTAL_LOOPS);
  }
  numPixel += PIXELS_DRAWN_PER_FRAME;
}

function drawSpirograph(pixelsPerCircle, outerCircleSize, innerCircleSize, totalLoops) {
    x = cos(i * 360 / pixelsPerCircle) * outerCircleSize + cos(i / totalLoops) * innerCircleSize + 200;
    y = sin(i * 360 / pixelsPerCircle) * outerCircleSize + sin(i / totalLoops) * innerCircleSize + 200;
    point(x, y)
}