// Camada de lógica de negócios: validação de idade
function validarIdade(idade) {
    return idade >= 18;
}

// Camada de apresentação: interage com o usuário
function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const mensagem = document.getElementById('mensagem');

    if (!nome || isNaN(idade)) {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.classList.remove('success');
        return;
    }

    if (!validarIdade(idade)) {
        mensagem.textContent = "Você precisa ter mais de 18 anos para se cadastrar.";
        mensagem.classList.remove('success');
        return;
    }

    salvarUsuario(nome, idade); // Chama a camada de persistência
    mensagem.textContent = "Usuário cadastrado com sucesso!";
    mensagem.classList.add('success');
    limparCampos();
}

// Limpa os campos de entrada após o cadastro
function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
}

// Atualiza a lista de usuários cadastrados na interface
function atualizarListaUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.innerHTML = '';

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nome}, ${usuario.idade} anos`;
        listaUsuarios.appendChild(li);
    });
}
