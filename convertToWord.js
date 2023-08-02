function convertToWord(number) {
  if (number % 10 === 0 && number !== 0) {
    const words = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
    return words[number / 10];
  } else {
    return number;
  }
}

function printNumbersWithWords() {
  for (let i = 0; i <= 100; i++) {
    console.log(convertToWord(i));
  }
}

// Call the function to print numbers with words for every tenth number
printNumbersWithWords();
