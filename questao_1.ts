function calcularSoma(): number {
    let INDICE: number = 13;
    let SOMA: number = 0;
    let K: number = 0;
  
    while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
    }
  
    return SOMA;
  }
  
  console.log("O valor de SOMA é:", calcularSoma());