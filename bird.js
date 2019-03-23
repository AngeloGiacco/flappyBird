function Bird() {
  this.y = height/2;
  this.x = 64;
  this.score = 0;

  this.gravity = 0.6;
  this.lift = -13;
  this.velocity = 0;

  this.show = function() {
    fill(0,255,255);
    ellipse(this.x, this.y,32,32);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    if (this.y > height - 16){
      this.y = height - 16;
      this.velocity = 0;
    } else if (this.y < 16) {
      this.y = 16;
      this.velocity = 0;
    }
  }
}
