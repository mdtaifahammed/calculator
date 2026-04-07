<<<<<<< HEAD
const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".box");
function appendToScreen (input) {
    screen.value += input;
}
function clearScreen () {
    screen.value = "";
}
function backspace () {
    screen.value = screen.value.slice(0,-1);
}
function calculate () {
    try {
        screen.value = eval(screen.value);
    }
    catch (error) {
        screen.value = "Error";
    }
}
=======
const screen = document.querySelector(".screen");
const btn = document.querySelectorAll(".box");
function appendToScreen (input) {
    screen.value += input;
}
function clearScreen () {
    screen.value = "";
}
function backspace () {
    screen.value = screen.value.slice(0,-1);
}
function calculate () {
    try {
        screen.value = eval(screen.value);
    }
    catch (error) {
        screen.value = "Error";
    }
}
>>>>>>> c9c76963d423df96653bf19782bdf153e2c056c2
