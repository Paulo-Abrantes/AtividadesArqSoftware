function converterMaiusculas(texto) {
    return texto.toUpperCase();
}

function removerEspacosExtras(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

function contarPalavras(texto) {
    if (texto.trim() === '') {
        return 0;
    }
    return texto.split(/\s+/).length;
}

function processarTexto() {
    const textoInput = document.getElementById('textoInput').value;
    
    let textoProcessado = converterMaiusculas(textoInput);
    textoProcessado = removerEspacosExtras(textoProcessado);
    const numeroPalavras = contarPalavras(textoProcessado);

    document.getElementById('textoProcessado').textContent = textoProcessado;
    document.getElementById('contagemPalavras').textContent = `Número de palavras: ${numeroPalavras}`;
}
