let itensColetados = ["escudo", "chave", "armadura", "fruta", "espada"];

let itemNecessario1 = "espada";
let itemNecessario2 = "escudo";
let itemNecessario3 = "chave";
let quantidadeDeItens = 0;

for (let itens of itensColetados) {
  if (itens === itemNecessario1) {
  quantidadeDeItens += 1;
  }
  if (itens === itemNecessario2) {
  quantidadeDeItens += 1;
  }
  if (itens === itemNecessario3) {
  quantidadeDeItens += 1;
  }
}

if (quantidadeDeItens === 3) {
  console.log("PODE ENFRENTAR");
} else {
  console.log("NAO PODE ENFRENTAR");
}
