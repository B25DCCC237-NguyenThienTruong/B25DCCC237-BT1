let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        let value = buttons[i].innerText;

        if (value == "Clear") {

            display.innerText = "0";

        } else if (value == "=") {

            display.innerText = eval(display.innerText);

        } else {

            if (display.innerText == "0") {
                display.innerText = value;
            } else {
                display.innerText = display.innerText + value;
            }

        }

    });

}