commands = "";
display = "";
let history = [];
let ans = 0;
let screen = document.getElementById("screen");
let secondScreen = document.getElementById("secondScreen");
let buttons = document.querySelectorAll(".col");

// function for factorial
function factorial(n) {
	return n ? n * factorial(n - 1) : 1;
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		console.log("Button clicked");
		const input = button.getAttribute("data-value");
		if (input === "=") {
			try {
				const result = eval(commands);
                history.push(commands + " = " + result);
                console.log(history);
				screen.value = result;
                secondScreen.value = commands + " = ";
				commands = "";
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input === "CE") {
			commands = "";
			display = "";
			screen.value = "0";
            secondScreen.value = "";
		} else if (input == "pow") {
			commands += "**";
			display += "^";
			screen.value = display;
		} else if (input == "sqrt") {
			try {
				commands += "Math.sqrt(";
				display += "√(";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "sin") {
			try {
				commands += "Math.sin(";
				display += "sin(";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "cos") {
			try {
				commands += "Math.cos(";
				display += "cos(";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "tan") {
			try {
				commands += "Math.tan(";
				display += "tan(";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "log") {
			try {
				commands += "Math.log(";
				display += "log(";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "pi") {
			try {
				commands += "Math.PI";
				display += "π";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "factorial") {
			try {
				commands += "factorial(";
				display += "!";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "persentage") {
			try {
				commands += "/100";
				display += "%";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "e") {
			try {
				commands += "Math.E";
				display += "e";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "inv") {
			try {
				commands = "1/(";
				display += "Inv(";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "ln") {
			try {
				commands += "Math.log(";
				display += "ln(";
				screen.value = display;
			} catch (e) {
				screen.value = "Error";
			}
		} else {
			commands += input;
			display += input;
			screen.value = display;
		}
	});
});

console.log("Calculator loaded");
console.log("eval : ", eval("factorial(4)"));
