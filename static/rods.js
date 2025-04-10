let rods = [];
const numrods = 7;
const rodspacing = 100;
const flickerduration = 30;

class Rod {
  constructor(x) {
    this.x = x;
    this.y = windowHeight;
    this.length = 200;
    this.angle = 0;
    this.angularvelocity = 0;
    this.spring = 0.02;
    this.damping = 0.98;
    this.glow = 0;
    this.flickerTimer = 0;
  }

  applyforce(force) {
    this.angularvelocity += force;
  }

  update() {
    let restoringforce = -this.angle * this.spring;
    this.angularvelocity += restoringforce;
    this.angularvelocity *= this.damping;
    this.angle += this.angularvelocity;

    if (this.flickerTimer > 0) {
      this.flickerTimer--;
      this.glow = random(150, 250);
    } else {
      this.glow = 0;
    }
  }

  draw() {
    let tipX = this.x + sin(this.angle) * this.length;
    let tipY = this.y - cos(this.angle) * this.length;

    stroke(255, 140, 0);
    strokeWeight(5);
    line(this.x, this.y, tipX, tipY);

    if (this.glow > 0) {
      for (let i = 0; i < 15; i++) {
        let radius = random(5, 25);
        let alpha = map(i, 0, 15, 80, 0);
        fill(255, 140, 0, alpha);
        noStroke();
        ellipse(tipX, tipY, radius);
      }
    }
  }

  getTipPosition() {
    return {
      x: this.x + sin(this.angle) * this.length,
      y: this.y - cos(this.angle) * this.length
    };
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numrods; i++) {
    rods.push(new Rod((i + 1) * rodspacing));
  }
}

function draw() {
  background(13, 13, 13, 100);

  for (let rod of rods) {
    rod.update();
    rod.draw();
  }

  for (let i = 0; i < rods.length; i++) {
    for (let j = i + 1; j < rods.length; j++) {
      let tipA = rods[i].getTipPosition();
      let tipB = rods[j].getTipPosition();
      let d = dist(tipA.x, tipA.y, tipB.x, tipB.y);
      if (d < 20) {
        rods[i].flickerTimer = flickerduration;
        rods[j].flickerTimer = flickerduration;
      }
    }
  }
}

function mousePressed() {
  for (let rod of rods) {
    rod.applyforce(random(-0.2, 0.2));
  }
}