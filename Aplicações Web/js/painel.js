document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var emailInput = document.querySelector('.formLogin input[type="email"]');
      var passwordInput = document.querySelector('.formLogin input[type="password"]');

      var storedUsers = JSON.parse(localStorage.getItem('users'));

      if (storedUsers) {
        var foundUser = storedUsers.find(function (user) {
          return user.email === emailInput.value;
        });

        if (foundUser && foundUser.password === passwordInput.value) {
          window.location.href = './principal.html';
        } else {
          alert('E-mail ou senha incorretos!');
        }
      } else {
        alert('Nenhuma informação encontrada. Faça seu cadastro!');
      }
    });
  }
});
