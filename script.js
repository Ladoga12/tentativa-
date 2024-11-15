// Função de Cálculo de Eficiência da Fonte
document.getElementById('calculadora-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const processador = parseInt(document.getElementById('processador').value);
    const placaVideo = parseInt(document.getElementById('placa-video').value);

    if (!processador || !placaVideo) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Calculando a potência necessária da fonte
    const potenciaNecessaria = processador + placaVideo + 100; // Adicionando margem de segurança de 100W
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Você precisará de uma fonte de pelo menos ${potenciaNecessaria}W.`;
});
