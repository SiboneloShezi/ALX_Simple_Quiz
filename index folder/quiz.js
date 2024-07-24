const correctAnswer = 4;

function checkAnswer() {
  const checkedRadioButton = document.querySelector(
    'input[name="quiz"]:checked'
  );
  const userAnswer = checkedRadioButton ? checkedRadioButton.value : null;
  console.log("Checked Radio Button:", checkedRadioButton);

  const feedbackElement = document.getElementById("feedback");
  console.log("User Answer:", userAnswer);

  if (userAnswer == correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
  } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
  }
}

const submitButton = document.getElementById("submit-answer");

submitButton.addEventListener("click", checkAnswer);
console.log("Script linked and running");
