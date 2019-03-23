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

  fill(0,255,255);
  text(bird.score.toString(),width/2, 20)

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe())
  }

  for (var i = 0; i < pipes.length; i++) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].offscreen()) {
      pipes.splice(i,1)
    }
  }
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}
