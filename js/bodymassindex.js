function bodymassindex() {
  const weightvalue = document.getElementById("weightinput").value;
  const heightvalue = document.getElementById("heightinput").value;
  const resultdiv = document.getElementById("resultdiv");
  const weight = Number(weightvalue);
  const height = Number(heightvalue);
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    resultdiv.innerHTML = `Your BMI is ${bmi.toFixed(
      3
    )}, this means you are underweight`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultdiv.innerHTML = `Your BMI is ${bmi.toFixed(
      3
    )}, this means you are healthy`;
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    resultdiv.innerHTML = `Your BMI is ${bmi.toFixed(
      3
    )}, this means you are overweight`;
  } else if (bmi >= 30.0) {
    resultdiv.innerHTML = `Your BMI is ${bmi.toFixed(
      3
    )}, this means you are obese`;
  } else {
    resultdiv.innerHTML = "Please enter the above values";
  }
}
