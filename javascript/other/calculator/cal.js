commands = ''

let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Button clicked')
        const input = button.value
        if (input === '=')
        {
            const result = eval(commands)
            document.getElementById('screen').value = result
            commands = ''
        } else
        {
            commands += input
            document.getElementById('screen').value = commands
        }
    });
});

console.log('Calculator loaded');