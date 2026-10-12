
let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

incrementButton.addEventListener("click", function () {
    count = count + 1;
    updateDisplay();
});

decrementButton.addEventListener("click", function () {
    count = count - 1;
    updateDisplay();
});

resetButton.addEventListener("click", function () {
    count = 0;
    updateDisplay();
});

