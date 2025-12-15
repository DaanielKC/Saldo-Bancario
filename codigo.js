let saldo_bancario = 0;
let valor_despesa = 0;

document.getElementById('saldo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        saldo_bancario = parseFloat(this.value.replace(".", "").replace(",", "."));
        this.value = '';
        document.getElementById('tabela').innerHTML = `<tr><th>Valor Total Despesa</th><th>Saldo Bancário</th></tr>`;
        document.getElementById('tabela').innerHTML += `<tr><td></td><td>R$ ${saldo_bancario.toFixed(2).replace(".", ",")}</td></tr>`;
            
}});

document.getElementById('despesa').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        valor_despesa = parseFloat(this.value.replace(".", "").replace(",", "."));
        saldo_bancario -= valor_despesa;
        document.getElementById('tabela').innerHTML += `<tr><td>R$ ${valor_despesa.toFixed(2).replace(".", ",")}</td><td>R$ ${saldo_bancario.toFixed(2).replace(".", ',')}</td></tr>`;
        document.getElementById('despesa').value = '';     
    }});




