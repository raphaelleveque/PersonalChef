document.addEventListener('DOMContentLoaded', function () {
    const hamburguer = document.querySelector('.hamburguer');
    const menuNavegacao = document.querySelector('.menu-navegacao');
    const body = document.body;

    hamburguer.addEventListener('click', function () {
        menuNavegacao.classList.toggle('hidden'); // Alternar a classe "hidden" para ocultar ou exibir o menu de navegação
        body.classList.toggle('menu-aberto'); // Alternar a classe "menu-aberto" para habilitar ou desabilitar a rolagem da página
    });
});
