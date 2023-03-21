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

function calcular(){
    const valor = Number(document.getElementById('value').value);
    const parcelas = Number(document.getElementById('months').value);
    const juros = Number(document.getElementById('fee').value);
    const vparcelas = valor / parcelas
    document.getElementById('total').innerText = "Economia de R$ " + economia(valor, parcelas, juros) + " |";
    document.getElementById('total2').innerText = "Valor das parcelas é R$ " + vparcelas.toFixed(2);
}