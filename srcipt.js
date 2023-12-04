//organaizar elementos em container.
  function adicionarNotas() {
    document.getElementById("notasContainer").style.display = "block";
  }
//calcula a média.
//parseFloat chama a função.
  function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);

//determina se o valor é NaN ou não.
//NaN Not a number.
// || Este operador verifica se nota1 e nota2 não é número.
    if (isNaN(nota1) || isNaN(nota2)) {
      alert("Insira os valores numéricos para as notas.");
      return;
    }

    var media = (nota1 + nota2) / 2;
//toFixed formata um número com uma quantidade específica.
//innerText é uma propriedade que retorna texto.
    document.getElementById("mediaResultado").innerText = "A média de " + nome + " é: " + media.toFixed(2);
  }