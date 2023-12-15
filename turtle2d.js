// Implement a Turtle class that moves a turtle on a 2D plane.
class Turtle {
  constructor() {
    this.x = 0; // Initial x-coordinate
    this.y = 0; // Initial y-coordinate
    this.angle = 0; // Initial angle (in degrees)
  }

  // Move the turtle forward by a certain distance
  forward(distance) {
    const radians = (this.angle * Math.PI) / 180; // Convert angle to radians
    const deltaX = distance * Math.cos(radians);
    const deltaY = distance * Math.sin(radians);
    this.x += deltaX;
    this.y += deltaY;
  }

  right(angle) {
    this.angle -= angle;
  }

  left(angle) {
    this.angle += angle;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }

  getAngle() {
    return this.angle;
  }
}

// Example usage:
const myTurtle = new Turtle();

myTurtle.forward(50);
myTurtle.right(90);
myTurtle.forward(30);
s;

console.log(myTurtle.getPosition());
console.log(myTurtle.getAngle());
