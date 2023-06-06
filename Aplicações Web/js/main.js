// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Adiciona um ouvinte de eventos para cada link do menu
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Impede o comportamento padrão do link
    e.preventDefault();

    // Remove a classe 'active' de todos os links do menu
    menuLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Adiciona a classe 'active' ao link clicado
    link.classList.add('active');

    // Seleciona a seção correspondente ao link clicado
    const target = link.getAttribute('href');
    const section = document.querySelector(target);

    // Remove a classe 'active' de todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Adiciona a classe 'active' à seção correspondente ao link clicado
    section.classList.add('active');
  });
});
