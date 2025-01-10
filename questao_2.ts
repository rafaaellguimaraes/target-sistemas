function isFibonacci(num: number): string {
    if (num < 0) return `${num} não pertence à sequência de Fibonacci.`;
  
    const generateFibonacci = (limit: number): number[] => {
      const sequence: number[] = [0, 1];
      let next = 0;
  
      while ((next = sequence[sequence.length - 1] + sequence[sequence.length - 2]) <= limit) {
        sequence.push(next);
      }
  
      return sequence;
    };
  
    const fibonacciSequence = generateFibonacci(num);
  
    if (fibonacciSequence.includes(num)) {
      return `${num} pertence à sequência de Fibonacci.`;
    } else {
      return `${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("Por favor, forneça um número como argumento.");
  } else {
    const numberToCheck = parseInt(args[0], 10);
    if (isNaN(numberToCheck)) {
      console.log("O argumento fornecido não é um número válido.");
    } else {
      console.log(isFibonacci(numberToCheck));
    }
  }