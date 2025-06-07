// Seleção de elementos do DOM
const multiplicationForm = document.querySelector("#multiplication-form"); // Obtém o formulário de multiplicação
const numberInput = document.querySelector("#number"); // Obtém o campo de entrada do número
const multiplicationInput = document.querySelector("#multiplicator"); // Obtém o campo de entrada do multiplicador

// Funções

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página

    const multiplicationNumber = +numberInput.value; // Converte o valor do campo número para um número

    const multiplicatorNumber = +multiplicationInput.value; // Converte o valor do campo multiplicador para um número

    if (!multiplicationNumber || !multiplicatorNumber) return; // Impede a execução caso os valores sejam inválidos (0 ou NaN)

    console.log(multiplicationNumber, multiplicatorNumber); // Exibe os valores no console
});