// Initialize variables
let commands = ""; // Stores the mathematical expression
let display = ""; // Stores the expression to display on the screen
let history = []; // Stores the history of calculations

// Get screen elements
let screen = document.getElementById("screen"); // Main screen
let secondScreen = document.getElementById("secondScreen"); // Secondary screen

// Get buttons
let buttons = document.querySelectorAll(".col"); // All calculator buttons

// Function for factorial calculation
function factorial(n) {
	return n ? n * factorial(n - 1) : 1; // Recursive factorial calculation
}

// Add event listeners to buttons
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		console.log("Button clicked");
		const input = button.getAttribute("data-value"); // Get the value of the clicked button

		// Handle different button inputs
		if (input === "=") {
			// Evaluate the expression and display the result
			try {
				const result = eval(commands); // Evaluate the expression
				history.push(commands + " = " + result); // Add the expression and result to history
				console.log(history);
				screen.value = result; // Display the result on the main screen
				secondScreen.value = commands + " = "; // Display the expression on the secondary screen
				commands = ""; // Reset the expression
			} catch (e) {
				screen.value = "Error"; // Display "Error" if evaluation fails
			}
		} else if (input === "CE") {
			// Clear the expression and display
			commands = "";
			display = "";
			screen.value = "0"; // Reset the main screen to 0
			secondScreen.value = ""; // Clear the secondary screen
		} else if (input == "pow") {
			// Add exponentiation operator to the expression
			commands += "**";
			display += "^";
			screen.value = display; // Update the main screen
		} else if (input == "sqrt") {
			// Add square root function to the expression
			try {
				commands += "Math.sqrt(";
				display += "√(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "sin") {
			// Add sine function to the expression
			try {
				commands += "Math.sin(";
				display += "sin(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "cos") {
			// Add cosine function to the expression
			try {
				commands += "Math.cos(";
				display += "cos(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "tan") {
			// Add tangent function to the expression
			try {
				commands += "Math.tan(";
				display += "tan(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "log") {
			// Add logarithm function to the expression
			try {
				commands += "Math.log(";
				display += "log(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "pi") {
			// Add pi constant to the expression
			try {
				commands += "Math.PI";
				display += "π";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "factorial") {
			// Add factorial function to the expression
			try {
				commands += "factorial(";
				display += "!";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "persentage") {
			// Add percentage calculation to the expression
			try {
				commands += "/100";
				display += "%";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "e") {
			// Add Euler's number to the expression
			try {
				commands += "Math.E";
				display += "e";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "inv") {
			// Add inverse calculation to the expression
			try {
				commands = "1/(";
				display += "Inv(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "ln") {
			// Add natural logarithm function to the expression
			try {
				commands += "Math.log(";
				display += "ln(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else {
			// Add the button input to the expression
			commands += input;
			display += input;
			screen.value = display; // Update the main screen
		}
	});
});

console.log("Calculator loaded");
console.log("eval : ", eval("factorial(4)")); // Example evaluation
