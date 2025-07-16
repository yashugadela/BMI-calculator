document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const heightCm = parseFloat(document.getElementById("height").value);
  const weightKg = parseFloat(document.getElementById("weight").value);
  const resultBox = document.getElementById("resultBox");
  const bmiValueText = document.getElementById("bmiValue");
  const bmiCategoryText = document.getElementById("bmiCategory");
  const bmiTipText = document.getElementById("bmiTip");

  resultBox.className = "";
  resultBox.classList.add("card");

  if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
    alert("Please enter valid height and weight.");
    return;
  }

  // Convert height to meters
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  bmiValueText.textContent = `Your BMI is ${bmiRounded}`;

  let category = "";
  let tip = "";

  if (bmi < 18.5) {
    category = "Underweight";
    tip = "You might need to eat more nutritious food.";
    resultBox.classList.add("result-underweight");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    tip = "Great! Maintain your healthy lifestyle.";
    resultBox.classList.add("result-normal");
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    tip = "Try regular exercise and healthier food choices.";
    resultBox.classList.add("result-overweight");
  } else {
    category = "Obese";
    tip = "Consult a doctor or nutritionist for advice.";
    resultBox.classList.add("result-obese");
  }

  bmiCategoryText.textContent = `Category: ${category}`;
  bmiTipText.textContent = `Tip: ${tip}`;
  resultBox.classList.remove("hidden");
});
