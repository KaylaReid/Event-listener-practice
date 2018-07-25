/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

function handlerFunction(){
    let section = document.querySelector("#flight");
    section.classList.toggle("enabled");
    section.classList.toggle("disabled");
}
document.querySelector("#activate-flight").addEventListener("click", handlerFunction);

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

// mindreading 
function mindReading(){
    let section = document.querySelector("#mindreading");
    section.classList.toggle("enabled");
    section.classList.toggle("disabled");
}
document.querySelector("#activate-mindreading").addEventListener("click", mindReading);


// X-ray Button
function xray(){
    let section = document.querySelector("#xray");
    section.classList.toggle("enabled");
    section.classList.toggle("disabled");
}
document.querySelector("#activate-xray").addEventListener("click", xray);

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

