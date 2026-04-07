// Seleciona a barra lateral e o botão de expansão
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('toggleButton');

// Adiciona o evento de clique ao botão
toggleButton.addEventListener('click', () => {
    // Alterna a classe 'collapsed' na sidebar
    sidebar.classList.toggle('collapsed');
    
    // Opcional: Gira o ícone da seta (toggle-icon)
    const toggleIcon = toggleButton.querySelector('.toggle-icon');
    if (sidebar.classList.contains('collapsed')) {
        toggleIcon.style.transform = 'rotate(0deg)';
    } else {
        toggleIcon.style.transform = 'rotate(90deg)';
    }
});

// Opcional: Fecha a sidebar automaticamente se o usuário redimensionar a janela
// para uma tela muito pequena (comportamento responsivo básico)
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sidebar.classList.add('collapsed');
    }
});