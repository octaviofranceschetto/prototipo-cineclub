document.addEventListener('DOMContentLoaded', function() {
    // Função para enviar o nome de usuário para o localStorage e redirecionar para a página inicial
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var nomeUsuario = document.getElementById('username').value;
        localStorage.setItem('nomeUsuario', nomeUsuario);
        window.location.href = "pages/home.html";
    });

    // Função para exibir o nome de usuário na página inicial
    window.onload = function() {
        var nomeUsuario = localStorage.getItem('nomeUsuario');
        if (nomeUsuario) {
            document.getElementById('welcome-message').textContent = 'Bem-vindo, ' + nomeUsuario + '!';
        } else {
            document.getElementById('welcome-message').textContent = 'Por favor, faça login.';
        }
    };
});