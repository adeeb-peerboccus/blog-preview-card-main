console.log("index js is loaded!");

let total = 10;

// TODO: ADD 2 PARAMETERS AND NEW CONSOLE.LOG TO DISPLAY THEM
function subtract (message) {
    const userInput = prompt("Please enter an amount: ");

    let result = userInput - total;

    console.log("result", result);
}

function changeColor() {
    // get element on which I want to change color
    const element = document.getElementById("viewport-id");

    // change the color
    const backgroundColor = window.getComputedStyle(element).getPropertyValue('background-color');

    const color1 = "rgb(232, 130, 130)";
    const color2 = "rgb(82, 188, 164)";

    if (backgroundColor === color1) {
        element.style.backgroundColor = color2;
    } else {
        element.style.backgroundColor = color1;
    }
}