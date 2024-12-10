// Append value to the input field
function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  // Clear the display
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  // Delete the last character
  function deleteLast() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
  }
  
  // Calculate the result
  function calculateResult() {
    const display = document.getElementById('result');
    try {
      display.value = eval(display.value); // Use eval to evaluate the expression
    } catch (error) {
      display.value = 'Error'; // Display error for invalid expressions
    }
  }
  