import getRandomColor from "./colors";

class Point {
  x: number; // property
  y: number;
  color = "red";

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.color = getRandomColor();
  }

  distance() {
    return this.x + this.y;
  }

  distanceTimes(n: number) {
    return this.distance() * n;
  }
}

const p1 = new Point(50, 97); // p1 is an instance of Point
console.log(p1);

const p2 = new Point(300, 500);
console.log(p2);

p1.x = 100;
p1.y = 200;
console.log(p1);
console.log(p1.x); // p1.x is an instance variable
console.log(p1.color);
console.log(p1.distance());
console.log(p1.distanceTimes(10));

for (let i = 0; i < 10; i++) {
  const p = new Point(i * 100, i * 200);
  console.log({ i, p });
}

console.log(getRandomColor());

console.log("done.");
