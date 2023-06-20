document.querySelector('.formCadastro').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var birthday = document.getElementById('birthday').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var user = {
      name: name,
      birthday: birthday,
      email: email,
      password: password
    };
  
    localStorage.setItem('user', JSON.stringify(user));
  
    window.location.href = '../painel/painel-usuario.html';
  });
  