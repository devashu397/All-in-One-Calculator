function age() {
  const birthYear = document.getElementById("ageinput").value;
  const age = 2022 - birthYear;
  const resultdiv1 = document.getElementById("resultdiv1");
  resultdiv1.innerHTML = `Your age is: ${age} yrs`;
}

function birthYear() {
  const age = document.getElementById("birthyearinput").value;
  const birthYear = 2022 - age;
  const resultdiv2 = document.getElementById("resultdiv2");
  resultdiv2.innerHTML = `Your were born in the year: ${birthYear}`;
}
