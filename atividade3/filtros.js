// Filtro 1: Converter o texto para letras maiúsculas
function converterMaiusculas(texto) {
    return texto.toUpperCase();
}

// Filtro 2: Remover espaços extras
function removerEspacosExtras(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

// Filtro 3: Contar o número de palavras
function contarPalavras(texto) {
    if (texto.trim() === '') {
        return 0;
    }
    return texto.split(/\s+/).length;
}

// Função para processar o texto através dos filtros
function processarTexto() {
    // Obter o texto do usuário
    const textoInput = document.getElementById('textoInput').value;
    
    // Aplicar os filtros em sequência
    let textoProcessado = converterMaiusculas(textoInput);
    textoProcessado = removerEspacosExtras(textoProcessado);
    const numeroPalavras = contarPalavras(textoProcessado);

    // Exibir o texto processado e a contagem de palavras
    document.getElementById('textoProcessado').textContent = textoProcessado;
    document.getElementById('contagemPalavras').textContent = `Número de palavras: ${numeroPalavras}`;
}
