function parseCount(value) {
  const parseResult = Number.parseFloat(value);
  if (isNaN(parseResult)) {
    throw new Error("Невалидное значение");
  }

  return parseResult;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {

    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let semiP = this.perimeter / 2;
    return Number(Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}