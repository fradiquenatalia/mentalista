function Converter() {
  var valorEmDolarNumerico = parseFloat(document.getElementById("valor").value);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  var valorDaConversao = document.getElementById("valorConvertido");
  var valorConvertidoReal = "O resultado em real é R$ " + valorEmReal;
  valorDaConversao.innerHTML = valorConvertidoReal;
}
