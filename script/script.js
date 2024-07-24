const cardsSection = document.querySelector('.cards');
const cardsData = [
    { iconClass: 'fa-regular fa-handshake', title: 'Empréstimo', description: 'Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.' },
    { iconClass: 'fa-solid fa-money-bill-trend-up', title: 'AInvestimentos', description: 'Investimentos a partir de R$ 1 e opções para todos os perfis. Uma experiência fácil, segura e transparente.' },
    { iconClass: 'fa-brands fa-pix', title: 'Caixinhas', description: 'Organize e guarde dinheiro para seus planos. Crie Caixinhas personalizadas para cada um de seus objetivos.' },
    { iconClass: 'fa-solid fa-piggy-bank', title: 'Pix no crédito', description: 'Faça um Pix e pague com o cartão de crédito: não use o saldo da sua conta e concentre os gastos no cartão.' },
];

cardsData.forEach(data => {
    // Criando um nome card dentro da div
    const card = document.createElement('div');
    card.classList.add('card');

    // Coloca o título com o ícone e o texto
    const titleContent = `<i class="${data.iconClass}"></i><p>${data.title}</p>`;
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = titleContent;

    // Descrição
    const description = document.createElement('p');
    description.textContent = data.description;

    // Botão
    const button = document.createElement('button');
    button.textContent = 'Saber mais';
    const arrowIcon = document.createElement('i');
    arrowIcon.classList.add('fa-solid', 'fa-arrow-right');
    button.appendChild(arrowIcon);

    // Coloca os Elementos
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    // Coloca o Card dentro dos Cards
    cardsSection.appendChild(card);
});