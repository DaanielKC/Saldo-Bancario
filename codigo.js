let saldo_bancario = document.getElementById("saldo_bancario").value;
let saldo_inicial = document.getElementById('saldo_inicial');
saldo_inicial.textContent = 'saldo_bancario';

saldo_bancario = parseFloat(saldo_bancario.replace(".", "").replace(",", "."));


