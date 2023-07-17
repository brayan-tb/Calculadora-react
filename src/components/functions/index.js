function appendValue(value) {
    document.getElementById('result').value += value;
}

window.onload = function () {
    document.addEventListener("keydown", function (event) {
        const operators = ['.', '+', '-', '*', '/'];
        const pressed = event.key;

        if (operators.includes(pressed) || (pressed >= 0 && pressed <= 9)) { appendValue(pressed); }
        else if (pressed === "Escape") { handleClickClear(); }
        else if (pressed === "Enter") { calculate(); }
        else if (pressed === ",") { appendValue('.'); }
        else if (pressed === "Backspace") { removeValue() }
        event.preventDefault();
    })
}
