function focusNext(currentInput, event) {
    const nextInput = currentInput.nextElementSibling;
    const previousInput = currentInput.previousElementSibling;

    // Check if the event type is 'delete' and the input value is empty
    if ((event.inputType === 'delete' || event.inputType === 'deleteContentBackward')  && previousInput) {
        previousInput.focus();
        console.log("backspace detected")
    } else if (nextInput) {
        nextInput.focus();
        console.log("next detected")
    }
}
