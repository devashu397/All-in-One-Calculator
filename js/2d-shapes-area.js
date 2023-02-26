function rectangleArea() {
  let length = document.getElementById("rectlength").value;
  let breadth = document.getElementById("rectbreadth").value;
  let unit = document.getElementById("rectunit").value;
  let output = document.getElementById("rectanswer");

  if (!length || !breadth) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area = length * breadth;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}

function squareArea() {
  let side = document.getElementById("sqside").value;
  let unit = document.getElementById("squnit").value;
  let output = document.getElementById("sqanswer");

  if (!side) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area = side * side;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}

function triangleArea() {
  let base = document.getElementById("tribase").value;
  let height = document.getElementById("triheight").value;
  let unit = document.getElementById("triunit").value;
  let output = document.getElementById("trianswer");

  if (!base || !height) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area = (1 / 2) * base * height;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}² `;
  }
}

function circleArea() {
  let radius = document.getElementById("circleradius").value;
  let unit = document.getElementById("circleunit").value;
  let output = document.getElementById("circleanswer");

  if (!radius) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area = (22 / 7) * radius * radius;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}

function parallelogramArea() {
  let base = document.getElementById("parabase").value;
  let height = document.getElementById("paraheight").value;
  let unit = document.getElementById("paraunit").value;
  let output = document.getElementById("paraanswer");

  if (!base || !height) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area = base * height;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}

function rhombusArea() {
  let diagonal1 = document.getElementById("rhomd1").value;
  let diagonal2 = document.getElementById("rhomd2").value;
  let unit = document.getElementById("rhomunit").value;
  let output = document.getElementById("rhomanswer");

  if (!diagonal1 || !diagonal2) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area = (1 / 2) * diagonal1 * diagonal2;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}
