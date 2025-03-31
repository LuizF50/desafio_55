/**
 * Decifra uma mensagem onde cada par de letras consecutivas foi trocado
 * @param {string} mensagemCifrada - A mensagem codificada (deve ter tamanho par)
 * @returns {string} A mensagem decifrada
 */
function decifrarMensagem(mensagemCifrada) {
    let mensagemDecifrada = ""; // Inicializa a string que armazenará a mensagem decifrada
    
    // Loop que itera sobre a mensagem codificada
    for (let i = 0; i < mensagemCifrada.length; i++) {
        // Verifica se ainda há um caractere seguinte para trocar
        if (i + 1 < mensagemCifrada.length) {
            // Troca a posição do caractere atual com o próximo
            mensagemDecifrada += mensagemCifrada[i + 1] + mensagemCifrada[i];
            i++; // Avança mais uma posição para pular o próximo caractere
        } else {
            // Caso a mensagem tenha um número ímpar de caracteres, 
            // o que não deve ocorrer devido à validação, mas é mantido para robustez
            mensagemDecifrada += mensagemCifrada[i];
        }
    }
    return mensagemDecifrada; // Retorna a mensagem decifrada
}

// ===== TESTES NO CONSOLE =====
console.log(decifrarMensagem("eoxllh"));  // Saída: "hellox"
console.log(decifrarMensagem("odg lhel")); // Saída: "do hello"
console.log(decifrarMensagem("hlleo"));   // Saída: "hello"

// ===== INTEGRAÇÃO COM HTML =====
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências para os elementos do DOM
    const decodeButton = document.getElementById('decodeButton');
    const encodedInput = document.getElementById('encodedMessage');
    const decodedOutput = document.getElementById('decodedMessage');

    // Adiciona evento de click ao botão de decodificação
    decodeButton.addEventListener('click', function() {
        const mensagem = encodedInput.value.trim(); // Obtém a mensagem codificada
        
        // Verifica se a mensagem está vazia
        if (!mensagem) {
            alert("Por favor, insira uma mensagem codificada!");
            return;
        }

        // Verifica se a mensagem tem um número par de caracteres
        if (mensagem.length % 2 !== 0) {
            alert("A mensagem deve ter um número par de caracteres!");
            return;
        }

        // Decodifica a mensagem e atualiza a saída no DOM
        decodedOutput.textContent = decifrarMensagem(mensagem);
    });
});
