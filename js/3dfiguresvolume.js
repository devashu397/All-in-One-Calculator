function cuboid() {
  const length = document.getElementById("lengthinput").value;
  const breadth = document.getElementById("breadthinput").value;
  const height = document.getElementById("heightinput").value;
  const unit = document.getElementById("cuboidunitinput").value;
  const resultdiv1 = document.getElementById("resultdiv1");
  const volume = length * breadth * height;
  resultdiv1.innerHTML = `Volume of Cuboid = ${volume} ${unit}³`;
}

function cube() {
  const edge = document.getElementById("edgeinput").value;
  const unit = document.getElementById("cubeunitinput").value;
  const resultdiv2 = document.getElementById("resultdiv2");
  const volume = edge * edge * edge;
  resultdiv2.innerHTML = `Volume of Cube = ${volume} ${unit.toLowerCase()}³`;
}

function cylinder() {
  const radius = document.getElementById("radiusinput").value;
  const height = document.getElementById("cyheightinput").value;
  const unit = document.getElementById("cylinderunitinput").value;
  const resultdiv3 = document.getElementById("resultdiv3");
  const volume = (22 / 7) * radius * radius * height;
  resultdiv3.innerHTML = `Volume of Cylinder = ${volume} ${unit.toLowerCase()}³`;
}
