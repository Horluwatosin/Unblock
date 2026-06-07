function checkGrade() {
  const score = Number(document.getElementById("score").value);
  const result = document.getElementById("gradeResult");

  // 1. Validate the input with if
  if (isNaN(score) || score < 0 || score > 100) {
    result.textContent = "Please enter a number between 0 and 100";
    return; // break or this conditional statment stops the entire code if the input is not valid
  }

  // 2. decide the grade

  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  result.textContent = "Score" + " " + score + " = Grade " + grade;
}

function calculate() {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const result = document.getElementById("calcResult");

  let answer;

  switch (operator) {
    case "+":
      answer = a + b;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      if (b === 0) {
        result.textContent = "Cannot divide by zero";

        return;
      }
      answer = a / b;
      break;

    default:
      result.textContent = "Unknown Operations";
      return;
  }

  result.textContent = a + " " + operator + " " + b + " = " + answer;
}

console.log("Are you here");
