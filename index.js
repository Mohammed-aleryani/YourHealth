var heightInput = document.querySelector(".height");
var heightChecker = document.querySelector(".height-checker");
var ageInput = document.querySelector(".age");
var ageChecker = document.querySelector(".age-checker");
var genderInput = document.querySelector(".gender");
var calculateButton = document.getElementById("calculat-button");
var result = document.querySelector(".result");
var BMI, height, weight;

if (calculateButton) {
  calculateButton.addEventListener("click", (e) => {
    e.preventDefault();

    var height = heightInput.value;
    var age = ageInput.value;
    var gender = genderInput.value;

    if (gender == "male") {
      weight = (height - 100 + age / 10) * 0.9;
    } else {
      weight = (height - 100 + age / 10) * 0.85;
    }

    result.innerText = "Your ideal weight is " + Math.floor(weight);

    if (age < 1 || age > 120) {
      ageChecker.innerText = "Age must be between 1-120";
      result.innerText = "";
    } else {
      ageChecker.innerText = "";
    }

    if (height <= 100 || height >= 220) {
      heightChecker.innerText = "Height must be between 100-220";
      result.innerText = "";
    } else {
      heightChecker.innerText = "";
    }
  });
}
