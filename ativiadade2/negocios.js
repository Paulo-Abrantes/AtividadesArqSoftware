function validarIdade(idade) {
    return idade >= 18;
}

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

    salvarUsuario(nome, idade);
    mensagem.textContent = "Usuário cadastrado com sucesso!";
    mensagem.classList.add('success');
    limparCampos();
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
}

function atualizarListaUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.innerHTML = '';

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nome}, ${usuario.idade} anos`;
        listaUsuarios.appendChild(li);
    });
}
