document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        var email = document.querySelector('.formLogin input[type="email"]').value;
        var password = document.querySelector('.formLogin input[type="password"]').value;
  
        // Obter usuários do localStorage
        var users = JSON.parse(localStorage.getItem('users')) || [];
  
        // Verificar se o usuário existe
        var user = users.find(function (user) {
          return user.email === email;
        });
  
        if (user) {
          // Verificar a senha do usuário
          if (user.password === password) {
            // Exibir os dados do usuário na página do painel
            var nameElement = document.getElementById('name');
            var birthdayElement = document.getElementById('birthday');
            var emailElement = document.getElementById('email');
  
            nameElement.textContent = user.name;
            birthdayElement.textContent = user.birthday;
            emailElement.textContent = user.email;
  
            // Redirecionar para a página do painel de usuário
            window.location.href = '../painel/painel-usuario.html';
          } else {
            alert('Senha incorreta. Por favor, tente novamente.');
          }
        }
      });
    }
  });
  