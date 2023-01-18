const heightInput = document.querySelector(".height");
const heightChecker = document.querySelector(".height-checker");
const ageInput = document.querySelector(".age");
const ageChecker = document.querySelector(".age-checker");
const genderInput = document.querySelector(".gender");
const calculateButton = document.getElementById("calculat-button");
const result = document.querySelector(".result");
let  height, weight;

if (calculateButton) {
  calculateButton.addEventListener("click", (e) => {
    e.preventDefault();

    const height = heightInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;

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
