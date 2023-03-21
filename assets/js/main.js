function economia(principal, months, interestRate) {
    var retirada = (principal / months).toFixed(2);
    var montantefinal = 0;
    for (var i = 1; i <= months; i++) {
        montantefinal = principal * (1 + interestRate / 100) - retirada;
        principal = montantefinal;
    }
    console.log(montantefinal)
    console.log(retirada)
    return (montantefinal).toFixed(2);
}
/*
var principal = 360;
var months = 10;
var interestRate = 1;

var economy = economia(principal, months, interestRate);

console.log(Math.round(economy * 100) / 100); // Deve imprimir 13.98
*/
function calcular(){
    const valor = Number(document.getElementById('value').value);
    const parcelas = Number(document.getElementById('months').value);
    const juros = Number(document.getElementById('fee').value);
    const vparcelas = valor / parcelas
    document.getElementById('total').innerText = "Economia de R$ " + economia(valor, parcelas, juros) + " |";
    document.getElementById('total2').innerText = "Valor das parcelas é R$ " + vparcelas.toFixed(2);
}