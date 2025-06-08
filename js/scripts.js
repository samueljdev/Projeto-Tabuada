// Seleção de elementos do DOM
const multiplicationForm = document.querySelector("#multiplication-form"); // Obtém o formulário de multiplicação
const numberInput = document.querySelector("#number"); // Obtém o campo de entrada do número
const multiplicationInput = document.querySelector("#multiplicator"); // Obtém o campo de entrada do multiplicador

const multiplicationTable = document.querySelector("#multiplication-operations");

const multiplicationTitle = document.querySelector("#multiplication-title span");

// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; // é p/ obter ou alterar o conteúdo HTML dentro de um elemento, nesse caso inserindo string vazio. 

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html"); // DOMParser para converter essa string em um elemento HTML real, qe é armazenado na variável htmlTemplate
        const row = htmlTemplate.querySelector(".row"); // acessando o HTML da memória(variável) htmlTemplate

        multiplicationTable.appendChild(row); // O elemento criado (row) é extraído e anexado ao multiplicationTable com appendChild(row)
    }

    multiplicationTitle.innerText = number; //innerText É usada para obter ou modificar o texto que o usuário vê na tela
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página

    const multiplicationNumber = numberInput.value; // Converte o valor do campo número para um número

    const multiplicatorNumber = multiplicationInput.value; // Converte o valor do campo multiplicador para um número

    if (!multiplicationNumber || !multiplicatorNumber) return; // Impede a execução caso os valores sejam inválidos (0 ou NaN)
    createTable(multiplicationNumber, multiplicatorNumber); // criando o a tabela via função
});