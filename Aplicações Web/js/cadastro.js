document.addEventListener('DOMContentLoaded', function () {
  var formCadastro = document.querySelector('.formLogin');

  if (formCadastro) {
    formCadastro.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = document.querySelector('.formLogin input[type="text"]').value;
      var birthday = document.querySelector('.formLogin input[type="date"]').value;
      var email = document.querySelector('.formLogin input[type="email"]').value;
      var address = document.querySelector('.formLogin input[type="text"]').value;
      var password = document.querySelector('.formLogin input[type="password"]').value;

      var newUser = {
        name: name,
        birthday: birthday,
        email: email,
        address: address,
        password: password
      };

      // Obter usuários existentes do localStorage
      var users = JSON.parse(localStorage.getItem('users')) || [];

      // Verificar se o email já está cadastrado
      var existingUser = users.find(function (user) {
        return user.email === email;
      });

      if (existingUser) {
        alert('O email fornecido já está cadastrado. Por favor, utilize outro email.');
        return;
      }

      // Adicionar o novo usuário ao array
      users.push(newUser);

      // Atualizar os usuários no localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Exibir alerta de conta criada com sucesso
      alert('Conta criada com sucesso! Faça o login para acessar.');

      window.location.href = './index.html';
    });
  }
});
