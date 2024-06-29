document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Aqui você pode adicionar a lógica para validar o usuário e senha
    if(username && password === 'admin') {
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha inválidos');
    }
    console.log('Usuário:', username, 'Senha:', password);    
    
});