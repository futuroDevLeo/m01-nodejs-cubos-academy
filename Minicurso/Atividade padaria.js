const endereço = "Avenida 1, 02, Centro";
const nome = "Padaria dois irmãos"
let preçoDoPão = 10;
let preçoDoQueijo = 25;
let preçoDoLeite= 6.5;

preçoDoPão *= 1.2;
preçoDoLeite *= 0.8;
preçoDoQueijo *= 1.5;

console.log(`Venha até a ${nome}`);
console.log(`Ficamos na ${endereço}`);
console.log(`Preço do Pão: ${preçoDoPão.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
console.log(`Preço do Queijo: ${preçoDoQueijo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
console.log(`Preço do Leite: ${preçoDoLeite.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);
