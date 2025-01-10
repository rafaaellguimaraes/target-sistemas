interface FaturamentoPorEstado {
    estado: string;
    valor: number;
  }
  
  function calcularPercentuaisDeFaturamento(faturamento: FaturamentoPorEstado[]): void {

    const faturamentoTotal = faturamento.reduce((total, estado) => total + estado.valor, 0);
  
    console.log("Percentuais de Faturamento por Estado:");
    faturamento.forEach(estado => {
      const percentual = (estado.valor / faturamentoTotal) * 100;
      console.log(`${estado.estado}: ${percentual.toFixed(2)}%`);
    });
  
    console.log("Faturamento Total: R$", faturamentoTotal.toFixed(2));
  }
  
  const faturamentoMensal: FaturamentoPorEstado[] = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 },
  ];
  
  calcularPercentuaisDeFaturamento(faturamentoMensal);
  