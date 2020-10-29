function setup() {
  createCanvas(9600, 13000);
  translate(width/2.2, height/1.2);
  // translate(x, y);
  background(254,249,243);
  //noStroke();

  // let gridSize = 35;

  for (x = 1; x <= 10000; x += 1) {
    for (y = 1; y <= 12; y += 1) {
      noStroke();
      fill('rgba(254,249,243, 0.6)');
      ellipse(random(30),random(30),random(30),random(30));

      noFill();
      stroke(0,0,0);
      strokeWeight(.45);
      beginShape();
      vertex(-200, 1000);
      quadraticVertex(x/100, y, 100, 1000);
      quadraticVertex(x/1000, y, 100, 1000);
      vertex(600, 600);
      endShape();
      strokeWeight(.4);
      beginShape();
      vertex(-200, 10);
      quadraticVertex(x/1000, y/50, 100, 300);
      quadraticVertex(x/1000, y/30, 10, 700);
      vertex(10, 60);
      endShape();

      translate(-10, -40);
      rotate(x/y);
      noStroke();
      fill('rgba(0,0,0, 0.15)');
      ellipse(20,20,20,20);
    }
  }
}
