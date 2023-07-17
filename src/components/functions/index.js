function calculate() {
    let input = document.getElementById('result').value
    input = input.replace(/(^|[^0-9])0+([0-9]+)/g, '$1$2');

    if (input.length > 0) {
        try {
            let result = eval(input);
            document.getElementById('result').value = result;
        } catch (error) {
            document.getElementById('result').value = 'Erro';
        }
    }
}

function clearValue() {
    document.getElementById('result').value = '';
}

function appendValue(value) {
    document.getElementById('result').value += value;
}

function removeValue() {
    let input = document.getElementById('result');
    if (input.value.length > 0) input.value = input.value.slice(0, -1)
}


function changeTheme() {
    const body = document.querySelector('body');
    const calculator = document.querySelector('.calculator');
    body.classList.toggle('dark-mode');
    calculator.classList.toggle('dark-mode');
}

window.onload = function () {
    document.addEventListener("keydown", function (event) {
        const operators = ['.', '+', '-', '*', '/'];
        const pressed = event.key;

        if (operators.includes(pressed) || (pressed >= 0 && pressed <= 9)) { appendValue(pressed); }
        else if (pressed === "Escape") { clearValue(); }
        else if (pressed === "Enter") { calculate(); }
        else if (pressed === ",") { appendValue('.'); }
        else if (pressed === "Backspace") { removeValue() }
        event.preventDefault();
    })
}
