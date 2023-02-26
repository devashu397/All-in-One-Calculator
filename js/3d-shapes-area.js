function cuboidArea() {
  let length = document.getElementById("cuboidlength").value;
  let breadth = document.getElementById("cuboidbreadth").value;
  let height = document.getElementById("cuboidheight").value;
  let unit = document.getElementById("cuboidunit").value;
  let output = document.getElementById("cuboidanswer");

  if (!length || !breadth || !height) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area =
      2 * length * breadth + 2 * length * height + 2 * height * breadth;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}

function cubeArea() {
  let edge = document.getElementById("cubeedge").value;
  let unit = document.getElementById("cubeunit").value;
  let output = document.getElementById("cubeanswer");

  if (!edge) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area = 6 * edge * edge;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}

function cylinderArea() {
  let radius = document.getElementById("cyradius").value;
  let height = document.getElementById("cyheight").value;
  let unit = document.getElementById("cyunit").value;
  let output = document.getElementById("cyanswer");

  if (!radius || !height) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area =
      ((2 * 22) / 7) * radius * height + ((2 * 22) / 7) * radius * radius;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}

function coneArea() {
  let radius = document.getElementById("coneradius").value;
  let height = document.getElementById("coneheight").value;
  let unit = document.getElementById("coneunit").value;
  let output = document.getElementById("coneanswer");

  if (!radius || !height) {
    output.innerHTML = "Please enter the above details";
  } else {
    let length = Math.sqrt(radius * radius + height * height);
    let area = (22 / 7) * radius * length + (22 / 7) * radius * radius;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}

function sphereArea() {
  let radius = document.getElementById("spradius").value;
  let unit = document.getElementById("spunit").value;
  let output = document.getElementById("spanswer");

  if (!radius) {
    output.innerHTML = "Please enter the above details";
  } else {
    let area = 4 * (22 / 7) * radius * radius;

    output.innerHTML = `Area = ${area.toLocaleString()} ${unit}²`;
  }
}
