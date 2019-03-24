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
  textSize(16);
  text(bird.score.toString(),width/2, 20)

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe())
  }

  for (var i = 0; i < pipes.length; i++) {
    pipes[i].hits(bird);
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].offscreen()) {
      pipes.splice(i,1)
    }
  }

  if (bird.end) {
    pipes = [];
    background(0);
    textSize(30);
    fill(255);
    textAlign(CENTER);
    text("Your score was:",width/2,height/2) - 35;
    text(bird.score.toString(),width/2, height/2 + 35);

  }
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}
