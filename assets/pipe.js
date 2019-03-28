function Pipe(speed) {
  this.top = random(height-32);
  this.bottom = height - this.top - random(200,300);
  this.x = width;
  this.w = 30;
  this.speed = speed;
  this.passed = false;

  this.highlight = false

  this.hits = function(bird) {
    if (bird.x > this.x && bird.x < this.x + this.w) {
      if  (bird.y < this.top || bird.y > height - this.bottom){
        bird.end = true;
        this.highlight = true;
        return true;
      } else if (!this.passed) {
        bird.score += 1;
        this.passed = true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255,0,0);
    } else if (this.passed) {
      fill(0,255,0)
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x,height-this.bottom, this.w,this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < - this.w) {
      return true;
    } else {
      return false;
    }
  }


}
