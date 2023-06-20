document.addEventListener('DOMContentLoaded', function () {
    var user = JSON.parse(localStorage.getItem('user'));
  
    if (user) {
      document.getElementById('name').innerText = user.name;
      document.getElementById('birthday').innerText = user.birthday;
      document.getElementById('email').innerText = user.email;
    } else {
      window.location.href = '../painel/painel-login.html';
    }
  });
  