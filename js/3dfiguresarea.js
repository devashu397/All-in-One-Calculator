function cuboid() {
  const length = document.getElementById("lengthinput").value;
  const breadth = document.getElementById("breadthinput").value;
  const height = document.getElementById("heightinput").value;
  const unit = document.getElementById("cuboidunitinput").value;
  const resultdiv1 = document.getElementById("resultdiv1");
  const area =
    2 * length * breadth + 2 * breadth * height + 2 * length * height;
  resultdiv1.innerHTML = `Surface Area of Cuboid = ${area} ${unit.toLowerCase()}²`;
}

function cube() {
  const edge = document.getElementById("edgeinput").value;
  const unit = document.getElementById("cubeunitinput").value;
  const resultdiv2 = document.getElementById("resultdiv2");
  const area = 6 * edge * edge;
  resultdiv2.innerHTML = `Surface Area of Cube = ${area} ${unit.toLowerCase()}²`;
}

function cylinder() {
  const radius = document.getElementById("radiusinput").value;
  const height = document.getElementById("cyheightinput").value;
  const unit = document.getElementById("cylinderunitinput").value;
  const resultdiv3 = document.getElementById("resultdiv3");
  const area = 2 * (22 / 7) * radius * height + 2 * (22 / 7) * radius * radius;
  resultdiv3.innerHTML = `Surface Area of Cylinder = ${area} ${unit.toLowerCase()}²`;
}
