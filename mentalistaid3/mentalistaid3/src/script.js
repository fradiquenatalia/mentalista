function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultaDoChute = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    resultaDoChute.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    resultaDoChute.innerHTML = "Você deve inserir um número entre 0 e 10";
  } else {
    resultaDoChute.innerHTML = "Você errou";
  }
}
var numeroSecreto = parseInt(Math.random() * 11);
