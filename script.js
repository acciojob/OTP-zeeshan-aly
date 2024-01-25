//your JS code here. If required.
function focusNext(currentInput) {
    const nextInput = currentInput.nextElementSibling;
    const previousInput = currentInput.previousElementSibling;

    if (event.inputType === 'deleteContentBackward' && previousInput) {
        previousInput.focus();
    } else if (nextInput) {
        nextInput.focus();
    }
}
