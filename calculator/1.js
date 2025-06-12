const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});