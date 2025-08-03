function calculateEnergyCost() {
    // Captura os valores inseridos nos campos do formulário
    const applianceName = document.getElementById('applianceName').value; // Nome do eletrodoméstico
    const consumption = parseFloat(document.getElementById('consumption').value); // Consumo mensal em kWh
    const kwhPrice = parseFloat(document.getElementById('kwhPrice').value); // Preço do kWh

    // Verifica se todos os valores são válidos
    if (isNaN(consumption) || isNaN(kwhPrice) || applianceName.trim() === "") {
        alert("Por favor, preencha todos os campos corretamente!"); // Alerta se algo estiver errado
        return; // Interrompe a função
    }

    // Realiza o cálculo do custo mensal
    const cost = consumption * kwhPrice;

    // Seleciona a div onde o resultado será exibido
    const resultDiv = document.getElementById('result');

    // Insere o resultado no HTML com o valor formatado em reais (2 casas decimais)
    resultDiv.innerHTML = `
        <h3>Resultado</h3>
        <p>O custo mensal do(a) ${applianceName} é: <strong>R$ ${cost.toFixed(2)}</strong></p>
    `;
}
