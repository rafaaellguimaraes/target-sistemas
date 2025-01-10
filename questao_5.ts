function inverterString(input: string): string {
    let invertida = "";

    for (let i = input.length - 1; i >= 0; i--) {
      invertida += input[i];
    }
  
    return invertida;
  }
  
  const stringOriginal = "Target Sistemas";
  
  console.log("String original:", stringOriginal);
  console.log("String invertida:", inverterString(stringOriginal));
  