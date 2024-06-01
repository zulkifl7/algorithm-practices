
commands = '';
display = ''
let ans = 0;
let buttons = document.querySelectorAll('.col');



// function for factorial

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Button clicked')
        const input = button.getAttribute('data-value');
        if (input === '=')
        {
            try {

            const result = eval(commands);
            document.getElementById('screen').value = result;
            commands = '';
            }catch (e){
                document.getElementById('screen').value = "Error";
            }
        } else if (input === 'CE')
        {
            commands = '';
            display = '';
            document.getElementById('screen').value = '';
        }
        else if (input == "pow"){
            commands += "**";
            display += "^";
            document.getElementById('screen').value = display;
        }
        else if (input == "sqrt"){
            try {
                commands += "Math.sqrt(";
                display += "√(";
                document.getElementById('screen').value = display;
            }catch (e){
                document.getElementById('screen').value = "Error";
            }
        }
        else if (input == "sin") {
            try {
                commands += "Math.sin(";
                display += "sin(";
                document.getElementById('screen').value = display;
            }catch (e){
                document.getElementById('screen').value = "Error";
            }
        }
        else if (input == "cos") {
            try {
                commands += "Math.cos(";
                display += "cos(";
                document.getElementById('screen').value = display;
            }catch (e){
                document.getElementById('screen').value = "Error";
            }
        }
        else if (input == "tan") {
            try {
                commands += "Math.tan(";
                display += "tan(";
                document.getElementById('screen').value = display;
            }catch (e){
                document.getElementById('screen').value = "Error";
            }
        }
        else if (input == "log") {
            try {
                commands += "Math.log(";
                display += "log(";
                document.getElementById('screen').value = display;
            }catch (e){
                document.getElementById('screen').value = "Error";
            }
        }
        else if (input == "pi") {
            try {
                commands += "Math.PI";
                display += "π";
                document.getElementById('screen').value = display;
            }catch (e){
                document.getElementById('screen').value = "Error";
            }
        }
        else if (input == "factorial") {
            try {
                commands += "factorial(";
                display += "!";
                document.getElementById('screen').value = display;
            }catch (e){
                document.getElementById('screen').value = "Error";
            }
        }
        else
        {
            
            commands += input;
            display += input;
            document.getElementById('screen').value = display;
        }
    });
});

console.log('Calculator loaded');
console.log('eval : ', eval("factorial(4)"));