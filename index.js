const genderMale = document.getElementById("male");
const genderFemale = document.getElementById("female");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");
const exercise = document.getElementById("exercise");
const submitBtn = document.getElementById("submit");

const gain2 = document.getElementById("heavyWeightGain");
const gain1 = document.getElementById("weightGain");
const maintain = document.getElementById("maintenance");
const loss1 = document.getElementById("weightLoss");
const loss2 = document.getElementById("heavyWeightLoss");

function genderSelector() {
  if (genderMale.checked === true) return parseInt(5);
  else return parseInt(-161);
}

function exerciseSelector() {
  if (exercise.value === "exercise1") return 1.2;
  else if (exercise.value === "exercise2") return 1.375;
  else if (exercise.value === "exercise3") return 1.465;
  else if (exercise.value === "exercise4") return 1.55;
  else return 1.725;
}

submitBtn.addEventListener("click", () => {
  const gender = genderSelector();
  const weightValue = parseInt(weight.value);
  const heightValue = parseInt(height.value);
  const ageValue = parseInt(age.value);
  const activityLevel = exerciseSelector();
  let BMR =
    (10 * weightValue + 6.25 * heightValue - 5 * ageValue + gender) *
    activityLevel;
  let FinalBMR = Math.floor(BMR);
  console.log(FinalBMR);

  gain2.textContent = FinalBMR + parseInt(500) + "kcals";
  gain1.textContent = FinalBMR + parseInt(250) + "kcals";
  maintain.textContent = FinalBMR + "kcals";
  loss1.textContent = FinalBMR - parseInt(250) + "kcals";
  loss2.textContent = FinalBMR - parseInt(500) + "kcals";
});
