const objetivo = 100000;
const deposito = 1000;
const rendimentoAnual = 0.12;

let conta = 0;
let meses = 0;

while (conta < objetivo) {
  conta += deposito;
  conta += conta * rendimentoAnual / 12;
  meses += 1;
}

console.log ("Demorou:", meses, "meses!");
console.log ("Demorou:", meses/12, "anos!");
console.log (objetivo, "reais, rende", objetivo*(rendimentoAnual/12), "por mês!");
