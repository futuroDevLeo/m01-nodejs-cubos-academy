let açao1 = "Taesa";
let açao2 = "Enel";
let açao3 = "Sanepar";
let preçoDaAçao1 = 17.99;
let preçoDaAçao2 = 5.89;
let preçoDaAçao3 = 0.89;

if (preçoDaAçao1 <= 18) {
  console.log ("O valor da", açao1, "está Ok!")
}

if (preçoDaAçao2 < 4) {
  if (preçoDaAçao2 >= 2.5) {
    console.log ("O valor da", açao2, "está Ok!")
  } else {
    console.log ("O valor da", açao2, "está abaixo do valor alvo!")
  } 
} else {
    console.log ("O valor da", açao2, "está acima do valor alvo!")
}

if (preçoDaAçao3 <= 2) {
  console.log ("O valor da", açao3, "está Ok!")
}
