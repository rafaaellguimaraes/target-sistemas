import * as fs from 'fs';

interface Faturamento {
  dia: number;
  valor: number;
}

function analisarFaturamento(): void {
  
  const dados: Faturamento[] = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));

  const diasComFaturamento = dados.filter(d => d.valor > 0);

  if (diasComFaturamento.length === 0) {
    console.log("Não há dias com faturamento válido.");
    return;
  }

  const menorValor = Math.min(...diasComFaturamento.map(d => d.valor));
  const maiorValor = Math.max(...diasComFaturamento.map(d => d.valor));

  const soma = diasComFaturamento.reduce((acc, d) => acc + d.valor, 0);
  const media = soma / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(d => d.valor > media).length;

  console.log("Menor valor de faturamento:", menorValor);
  console.log("Maior valor de faturamento:", maiorValor);
  console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
}

analisarFaturamento();
