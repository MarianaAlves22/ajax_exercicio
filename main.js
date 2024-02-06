document.addEventListener('DOMContentLoaded', function() {
    const meuNome = document.querySelector('#nome');
    const nomeUsuario = document.querySelector('#nomeusuario');
    const avatar = document.querySelector('#avatar');
    const repo = document.querySelector('#repositorio');
    const seguidor = document.querySelector('#seguidores');
    const seguir = document.querySelector('#seguindo');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/MarianaAlves22')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            meuNome.innerText = json.name;
            nomeUsuario.innerText = json.login;
            avatar.src = json.avatar_url;
            seguidor.innerText = json.followers;
            seguir.innerText = json.following;
            repo.innerText = json.public_repos;
            link.href = json.html_url;
        })
})