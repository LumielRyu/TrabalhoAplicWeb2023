function logout() {
    localStorage.removeItem('user');
    window.location.href = '../painel/painel-login.html';
  }
  