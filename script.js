document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var nomeUsuario = username;
    
    // Aqui você pode adicionar a lógica para validar o usuário e senha
    if(username && password === 'admin') {
        localStorage.setItem('nomeUsuario', nomeUsuario);
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha inválidos');
    }
    console.log('Usuário:', username, 'Senha:', password);    
    
});