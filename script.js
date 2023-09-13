function decimalToBinary(num) {
  //Write you code here
	 if (decimal === 0) {
    return "0"; // Special case for decimal 0
  }

  let binary = ""; // Initialize an empty string to store binary digits

  while (decimal > 0) {
    const remainder = decimal % 2; // Calculate the remainder
    binary = remainder + binary; // Add the remainder to the beginning of the binary string
    decimal = Math.floor(decimal / 2); // Update the decimal number by dividing it by 2 (integer division)
  }

  return binary;
  
}

window.decimalToBinary = decimalToBinary;
