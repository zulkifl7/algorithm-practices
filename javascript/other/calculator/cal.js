// Initialize variables
let commands = ""; // Stores the mathematical expression
let display = ""; // Stores the expression to display on the screen
let historyCal = []; // Stores the history of calculations
let historyDisplay = []; // Stores the history to display on the screen
let onCalculationHold = []; // Stores the commands entered induvidually - for deletion
let displayReset = 0; // Flag to reset the display
let commandState = "";
let ans = 0; // Stores the result of the previous calculation

// Get screen elements
let screen = document.getElementById("screen"); // Main screen
let secondScreen = document.getElementById("secondScreen"); // Secondary screen

// Get buttons
let buttons = document.querySelectorAll(".col"); // All calculator buttons

// Function for factorial calculation
function factorial(n) {
	return n ? n * factorial(n - 1) : 1; // Recursive factorial calculation
}


// Function for resetting the display
function resetDisplay() {
    if (displayReset == 1) {
        display = "";
        screen.value = display;
        secondScreen.value = historyDisplay[historyDisplay.length - 1];
        displayReset = 0;
    }
    else if (displayReset == 2) {
        display = "";
        screen.value = display;
        displayReset = 0;
    }
}

//! Function for handling keyboard inputs - Todo


// Add event listeners to buttons
buttons.forEach((button) => {
	button.addEventListener("click", () => {
        const input = button.getAttribute("data-value"); // Get the value of the clicked button
		console.log("Button clicked " + input);

		// Handle different button inputs
		if (input === "=") {
			// Evaluate the expression and display the result
			try {
                displayReset = 1;
				const result = eval(commands); // Evaluate the expression
                ans = result; // Store the result for future calculations
				historyCal.push(commands + " = " + result); // Add the expression and result to history
				historyDisplay.push(display + " = " + result); // Add the expression and result to history
                console.log("On calculation : " + historyCal);
                console.log("On display : " + historyDisplay);
				screen.value = result; // Display the result on the main screen
				secondScreen.value = display + " = "; // Display the expression on the secondary screen
				commands = ""; // Reset the expression
			} catch (e) {
				screen.value = "Error"; // Display "Error" if evaluation fails
			}
		} else if (input === "CE") {
            displayReset = 2;
			// Clear the expression and display
			commands = "";
			display = "";
			screen.value = "0"; // Reset the main screen to 0
			secondScreen.value = ""; // Clear the secondary screen
		} else if (input == "pow") {
            resetDisplay();
			// Add exponentiation operator to the expression
			commands += "**";
			display += "^";
			screen.value = display; // Update the main screen
		} else if (input == "sqrt") {
            resetDisplay();
			// Add square root function to the expression
			try {
				commands += "Math.sqrt(";
				display += "√(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "sin") {
            resetDisplay();
			// Add sine function to the expression
			try {
				commands += "Math.sin(";
				display += "sin(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "cos") {
            resetDisplay();
			// Add cosine function to the expression
			try {
				commands += "Math.cos(";
				display += "cos(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "tan") {
            resetDisplay();
			// Add tangent function to the expression
			try {
				commands += "Math.tan(";
				display += "tan(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "log") {
            resetDisplay();
			// Add logarithm function to the expression
			try {
				commands += "Math.log(";
				display += "log(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "pi") {
            resetDisplay();
			// Add pi constant to the expression
			try {
				commands += "Math.PI";
				display += "π";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "factorial") {
            resetDisplay();
			// Add factorial function to the expression
			try {
				commands += "factorial(" ;
				display += "factorial("  ;;
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "persentage") {
            resetDisplay();
			// Add percentage calculation to the expression
			try {
				commands += "/100";
				display += "%";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "e") {
            resetDisplay();
			// Add Euler's number to the expression
			try {
				commands += "Math.E";
				display += "e";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "inv") {
            resetDisplay();
			// Add inverse calculation to the expression
			try {
				commands = "1/(";
				display += "Inv(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		} else if (input == "ln") {
            resetDisplay();
			// Add natural logarithm function to the expression
			try {
                // ! Fix : change log to ln
				commands += "Math.log(";
				display += "ln(";
				screen.value = display; // Update the main screen
			} catch (e) {
				screen.value = "Error";
			}
		}
        else if (input == "*") {
            resetDisplay();
            // Add the multiplication operator to the expression
            commands += "*";
            display += "×";
            screen.value = display; // Update the main screen
        
        } else {
            resetDisplay();
			// Add the button input to the expression
			commands += input;
			display += input;
			screen.value = display; // Update the main screen
		}
	});
});

console.log("Calculator loaded");
console.log("eval : ", eval("factorial(4)")); // Example evaluation
