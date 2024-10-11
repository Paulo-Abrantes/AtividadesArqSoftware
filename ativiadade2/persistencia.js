// Array simulando a persistência de dados
let usuarios = [];

// Camada de persistência: armazenamento dos dados
function salvarUsuario(nome, idade) {
    usuarios.push({ nome: nome, idade: idade });
    atualizarListaUsuarios(); // Atualiza a interface chamando a função do frontend
}
