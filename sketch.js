var bird;
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  bird = new Bird();
}
function draw() {
  background(0);
  bird.show()
  bird.update();
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}
