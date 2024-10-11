let usuarios = [];

function salvarUsuario(nome, idade) {
    usuarios.push({ nome: nome, idade: idade });
    atualizarListaUsuarios(); 
}
