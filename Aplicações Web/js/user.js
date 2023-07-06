document.addEventListener('DOMContentLoaded', function () {
  var nameElement = document.getElementById('name');
  var birthdayElement = document.getElementById('birthday');
  var emailElement = document.getElementById('email');

  var storedUsers = JSON.parse(localStorage.getItem('users'));

  if (storedUsers && storedUsers.length > 0) {
    var currentUser = storedUsers[0]; // Assuming only one user for demonstration purposes

    nameElement.textContent = currentUser.name;
    birthdayElement.textContent = currentUser.birthday;
    emailElement.textContent = currentUser.email;
  }
});

function logout() {
  window.location.href = './painel-login.html';
}
