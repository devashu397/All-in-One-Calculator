function rectangle() {
  const length = document.getElementById("lengthinput").value;
  const breadth = document.getElementById("breadthinput").value;
  const unit = document.getElementById("rectangleunitinput").value;
  const resultdiv1 = document.getElementById("resultdiv1");
  const area = length * breadth;
  resultdiv1.innerHTML = `Area of Rectangle = ${area} ${unit.toLowerCase()}²`;
}

function square() {
  const side = document.getElementById("sideinput").value;
  const unit = document.getElementById("squareunitinput").value;
  const resultdiv2 = document.getElementById("resultdiv2");
  const area = side * side;
  resultdiv2.innerHTML = `Area of Square = ${area} ${unit.toLowerCase()}²`;
}

function triangle() {
  const base = document.getElementById("baseinput").value;
  const height = document.getElementById("heightinput").value;
  const unit = document.getElementById("triangleunitinput").value;
  const resultdiv3 = document.getElementById("resultdiv3");
  const area = (1 / 2) * base * height;
  resultdiv3.innerHTML = `Area of Triangle = ${area} ${unit.toLowerCase()}²`;
}

function circle() {
  const radius = document.getElementById("radiusinput").value;
  const unit = document.getElementById("circleunitinput").value;
  const resultdiv4 = document.getElementById("resultdiv4");
  const area = (22 / 7) * radius * radius;
  resultdiv4.innerHTML = `Area of Circle = ${area} ${unit.toLowerCase()}²`;
}

function parallelogram() {
  const base = document.getElementById("pbaseinput").value;
  const height = document.getElementById("pheightinput").value;
  const unit = document.getElementById("parallelogramunitinput").value;
  const resultdiv5 = document.getElementById("resultdiv5");
  const area = base * height;
  resultdiv5.innerHTML = `Area of Parallelogram = ${area} ${unit.toLowerCase()}²`;
}

function rhombus() {
  const diagonal1 = document.getElementById("diagonal1input").value;
  const diagonal2 = document.getElementById("diagonal2input").value;
  const unit = document.getElementById("rhombusunitinput").value;
  const resultdiv6 = document.getElementById("resultdiv6");
  const area = (1 / 2) * diagonal1 * diagonal2;
  resultdiv6.innerHTML = `Area of Rhombus = ${area} ${unit.toLowerCase()}²`;
}
