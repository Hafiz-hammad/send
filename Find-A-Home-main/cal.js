// timer

var msecCounter = 0;
var secCounter = 0;
var minCounter = 0;

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var counter = 0;
var interval;

function timer() {
  msecCounter++;
  msec.innerHTML = msecCounter;
  console.log(msecCounter);
  if (msecCounter === 100) {
    secCounter++;
    sec.innerHTML = secCounter;
    msecCounter = 0;
    if (secCounter === 5) {
      secCounter = 0;
      minCounter++;
      min.innerHTML = minCounter;
    }
  }
}

function startTimer() {
  // e.disabled = true
  interval = setInterval(timer, 20);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);

  min.innerHTML = "00";
  sec.innerHTML = "00";
  msec.innerHTML = "00";
  secCounter = 0;
  minCounter = 0;
  msecCounter = 0;
}
// Calculator
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define function to calculate based on button clicked.
const calculate = (btnValue) => {display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //If DEL button is clicked, remove the last character from the output.
    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});