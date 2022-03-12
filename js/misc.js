function roundnumber() {
  const roundnumber = document.getElementById("roundnumberinput").value;
  const resultdiv = document.getElementById("resultdiv");

  resultdiv.innerHTML = `Rounded Number - ${Math.round(roundnumber)}`;
}
