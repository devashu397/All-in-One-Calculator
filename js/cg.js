function sectionPoint() {
  const xcord1 = document.getElementById("xcord1input").value;
  const xcord2 = document.getElementById("xcord2input").value;
  const ycord1 = document.getElementById("ycord1input").value;
  const ycord2 = document.getElementById("ycord2input").value;
  const m1 = document.getElementById("m1input").value;
  const m2 = document.getElementById("m2input").value;
  const resultdiv = document.getElementById("resultdiv1");

  let xstep = m1 * xcord2 + m2 * xcord1;
  let x = xstep / (m1 + m2);
  let ystep = m1 * ycord2 + m2 * ycord1;
  let y = ystep / (m1 + m2);

  resultdiv.innerHTML = `X = ${x.toLocaleString()}<br>Y = ${y.toLocaleString()}`;
}

function midPoint() {
  const xcord1 = document.getElementById("xcord1input2").value;
  const xcord2 = document.getElementById("xcord2input2").value;
  const ycord1 = document.getElementById("ycord1input").value;
  const ycord2 = document.getElementById("ycord2input").value;
  const resultdiv = document.getElementById("resultdiv2");

  let xstep = xcord1 + xcord2;
  let x = xstep / 2;
  let ystep = ycord1 + ycord2;
  let y = ystep / 2;

  resultdiv.innerHTML = `X = ${x.toLocaleString()}<br>Y = ${y.toLocaleString()}`;
}
