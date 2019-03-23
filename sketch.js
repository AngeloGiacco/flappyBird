var bird;
var pipes = []
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  bird = new Bird();
  pipes.push(new Pipe())
}
function draw() {
  background(0);
  bird.show()
  bird.update();
  for (var i = 0; i < pipes.length; i++) {
    pipes[i].show();
    pipes[i].update();
  }
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}
