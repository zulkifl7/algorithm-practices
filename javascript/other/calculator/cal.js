
commands = '';
let ans = 0;
let buttons = document.querySelectorAll('.col');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Button clicked')
        const input = button.value
        if (input === '=')
        {
            const result = eval(commands);
            document.getElementById('screen').value = result;
            commands = '';
        } else if (input === 'CE')
        {
            commands = '';
            document.getElementById('screen').value = '';
        }
        else if (input == ""){}
        
        else
        {
            
            commands += input;
            document.getElementById('screen').value = commands;
        }
    });
});

console.log('Calculator loaded');
console.log('eval : ', eval("2"));