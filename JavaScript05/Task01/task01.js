class Circle {

  constructor(radius) {
    this.radius = radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  area() {
    return Math.PI * (this.radius ** 2);
  }

  length() {
    return this.getDiameter() * Math.PI;
  }
}

let circle = new Circle(50);
document.write(circle.getRadius() + '<br>');
circle.setRadius(30);
document.write(circle.getRadius() + '<br>');
document.write(circle.area() + '<br>');
document.write(circle.length() + '<br>');