function cuboidVolume() {
  let length = document.getElementById("cuboidlength").value;
  let breadth = document.getElementById("cuboidbreadth").value;
  let height = document.getElementById("cuboidheight").value;
  let unit = document.getElementById("cuboidunit").value;
  let output = document.getElementById("cuboidanswer");

  if (!length || !breadth || !height) {
    output.innerHTML = "Please enter the above details";
  } else {
    let volume = length * breadth * height;

    output.innerHTML = `Volume = ${volume.toLocaleString()} ${unit}³`;
  }
}

function cubeVolume() {
  let edge = document.getElementById("cubeedge").value;
  let unit = document.getElementById("cubeunit").value;
  let output = document.getElementById("cubeanswer");

  if (!edge) {
    output.innerHTML = "Please enter the above details";
  } else {
    let volume = edge * edge * edge;

    output.innerHTML = `Volume = ${volume.toLocaleString()} ${unit}³`;
  }
}

function cylinderVolume() {
  let radius = document.getElementById("cyradius").value;
  let height = document.getElementById("cyheight").value;
  let unit = document.getElementById("cyunit").value;
  let output = document.getElementById("cyanswer");

  if (!radius || !height) {
    output.innerHTML = "Please enter the above details";
  } else {
    let volume = (22 / 7) * radius * radius * height;

    output.innerHTML = `Volume = ${volume.toLocaleString()} ${unit}³`;
  }
}

function coneVolume() {
  let radius = document.getElementById("coneradius").value;
  let height = document.getElementById("coneheight").value;
  let unit = document.getElementById("coneunit").value;
  let output = document.getElementById("coneanswer");

  if (!radius || !height) {
    output.innerHTML = "Please enter the above details";
  } else {
    let volume = (22 / 7) * radius * radius * (height / 3);

    output.innerHTML = `Volume = ${volume.toLocaleString()} ${unit}³`;
  }
}

function sphereVolume() {
  let radius = document.getElementById("spradius").value;
  let unit = document.getElementById("spunit").value;
  let output = document.getElementById("spanswer");

  if (!radius) {
    output.innerHTML = "Please enter the above details";
  } else {
    let volume = (4 / 3) * (22 / 7) * radius * radius * radius;

    output.innerHTML = `Volume = ${volume.toLocaleString()} ${unit}³`;
  }
}
