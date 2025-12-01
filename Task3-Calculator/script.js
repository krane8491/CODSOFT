const display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === '0') currentInput = '';
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (/[\+\-\*\/%]$/.test(currentInput)) return;
  currentInput += op;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || '0';
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  updateDisplay();
}