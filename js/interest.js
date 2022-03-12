function simpleinterest() {
  const principle = document.getElementById("principleinput").value;
  const rate = document.getElementById("rateofinterestinput").value;
  const time = document.getElementById("timeinput").value;
  const simpleinterest = (principle * rate * time) / 100;
  const interestGained = simpleinterest;
  const totalAmount = principle * 1 + interestGained * 1;
  const resultdiv1 = document.getElementById("resultdiv1");
  resultdiv1.innerHTML = `Interest gained = ${interestGained.toLocaleString()}<br />Total amount recieved = ${totalAmount.toLocaleString()}`;
}

function compoundinterest() {
  const resultdiv2 = document.getElementById("resultdiv2");
  resultdiv2.innerHTML = "In Development Mode ⚒️";
}
