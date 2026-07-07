// 1. DATA: The master list of your 14 friends matching your PNG filenames
const friendsData = [
    { id: "card-andre", name: "Andre", img: "images/card-andre.png", bio: "Andre é brasileiro, foi quem criou o infame grupo do WhatsApp. Ele normalmente me convida pra fazer as coisas e parece ser quem se esforça mais pra encontrar e manter contato. Ele mora com o namorado Andy. Conheceu a Taylor Swift no trabalho." },
    { id: "card-andy", name: "Andy", img: "images/card-andy.png", bio: "Namorado do Andre, eles moram juntos. É inglês, gente boa, fala muito, normalmente fora de qualquer confusão, muito apaixonado pelo Andre."},
    { id: "card-bernardo", name: "Bernardo", img: "images/card-bernardo.png", bio: "Não faz parte do drama principal, mas é o brasileiro que fez PUC e era estagiário no PC. Eu consegui um freela pra ele comigo, depois ele foi contratado mas me passou a perna de leve no trabalho insistindo pra ser chefe de alguém antes de mim, recebendo mais, etc." },
    { id: "card-bianca", name: "Bianca", img: "images/card-bianca.png", bio: "Minha amiga brasileira maluca que é tipo uma irmã mais nova. Ela morou em Londres há uns 15 anos e voltou agora. Conheço do Brasil porque ela é prima da minha amiga Mari, de Petrópolis." },
    { id: "card-bruna", name: "Bruna", img: "images/card-bruna.png", bio: "A brasileira lésbica poliamor que trabalha comigo. A gente se dá muito bem, trabalha muito bem juntos e ela me deu uns bons conselhos em Madri." },
    { id: "card-camilo", name: "Camilo", img: "images/card-camilo.png", bio: "O uruguaio que trabalha  comigo e que conseguiu trabalho pro irmão e pro amigo do Uruguai." },
    { id: "card-claudio", name: "Claudio", img: "images/card-claudio.png", bio: "Um dos argentinos, o mais parecido comigo de personalidade. Um pouco tímido e inseguro, mas muito carinhoso, dedicado e querido." },
    { id: "card-dom", name: "Dom", img: "images/card-dom.png", bio: "Um dos australianos, o Papa do Ronnie, que basicamente tem a mesma personalidade do Adrien. É cantor de ópera, artista, vive em outro planeta." },
    { id: "card-edgar", name: "Edgar", img: "images/card-edgar.png", bio: "O outro australiano, Daddy do Ronnie. A personalidade dele é muito parecida com a minha, é organizado, inteligente. Trabalha como psicólogo no sistema de saúde daqui." },
    { id: "card-emma", name: "Emma", img: "images/card-emma.png", bio: "O outro argentino, mais parecido com o Adrien. Muito gente boa também, mais calado, trabalha com software." },
    { id: "card-estevao", name: "Taylor", img: "images/card-estevao.png", bio: "Agente do caos, causador de drama, primeiro de seu nome, falso fofo, exclui as pessoas em benefício próprio e se faz de desentendido." },
    { id: "card-mateus", name: "Mateus", img: "images/card-mateus.png", bio: "O outro brasileiro mais próximo, conheci através do Andre. É querido mas bem mais reservado, apesar de ser bem engraçado. Mora com o namorado espanhol e morou na Espanha por uns anos mas voltou pra Londres." },
    { id: "card-matthew", name: "Matthew", img: "images/card-matthew.png", bio: "Aquele que trabalhava comigo e era muito próximo, com uma relação meio platônica de crush. Atualmente morando na Irlanda mas quer voltar pra Londres quando achar um emprego. Ainda conversamos bem. Ele é hétero." },
    { id: "card-sam", name: "Sam", img: "images/card-sam.png", bio: "22 anos de amizade quase acabamos por um agente do caos. Cada vez mais difícil de defender de acordo com você." }
];

// 2. DOM ELEMENT: Find the grid container
const gridContainer = document.getElementById('album-grid');
gridContainer.innerHTML = ''; // Clear loading text

// 3. GENERATION: Loop through the list and dynamically build the Panini stickers
friendsData.forEach(friend => {
    const cardHTML = `
        <div class="card-container" id="${friend.id}">
            <div class="card-flip-inner">
                
                <div class="card-front">
                    <img src="${friend.img}" alt="${friend.name}">
                    <h3>${friend.name}</h3>
                </div>

                <div class="card-back">
                    <button class="close-btn">&times;</button>
                    <h2>${friend.name}</h2>
                    <div class="text-explanation-box">
                        <p>${friend.bio}</p>
                    </div>
                </div>

            </div>
        </div>
    `;
    gridContainer.insertAdjacentHTML('beforeend', cardHTML);
});

// 4. INTERACTIVITY: Handle the card flips and close buttons
setTimeout(() => {
    document.querySelectorAll('.card-container').forEach(card => {
        // Flip card on click
        card.addEventListener('click', function() {
            this.classList.toggle('is-flipped');
        });

        // Close/Unflip card when clicking the 'X'
        const closeBtn = card.querySelector('.close-btn');
        closeBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the click from immediately re-flipping the card
            card.classList.remove('is-flipped');
        });
    });
}, 100);
