// 1. DATA: The master list of your 14 friends matching your PNG filenames
const friendsData = [
    { id: "card-andre", name: "Andre", img: "images/card-andre.png", bio: "Insert story here about André..." },
    { id: "card-andy", name: "Andy", img: "images/card-andy.png", bio: "Insert story here about Andy..." },
    { id: "card-bernardo", name: "Bernardo", img: "images/card-bernardo.png", bio: "Insert story here about Bernardo..." },
    { id: "card-bianca", name: "Bianca", img: "images/card-bianca.png", bio: "Insert story here about Bianca..." },
    { id: "card-bruna", name: "Bruna", img: "images/card-bruna.png", bio: "Insert story here about Bruna..." },
    { id: "card-camilo", name: "Camilo", img: "images/card-camilo.png", bio: "Insert story here about Camilo..." },
    { id: "card-claudio", name: "Claudio", img: "images/card-claudio.png", bio: "Insert story here about Claudio..." },
    { id: "card-dom", name: "Dom", img: "images/card-dom.png", bio: "Insert story here about Dom..." },
    { id: "card-edgar", name: "Edgar", img: "images/card-edgar.png", bio: "Insert story here about Edgar..." },
    { id: "card-emma", name: "Emma", img: "images/card-emma.png", bio: "Insert story here about Emma..." },
    { id: "card-estevao", name: "Aquele-que-não-deve-ser-nomeado", img: "images/card-estevao.png", bio: "Insert story here about Estevão..." },
    { id: "card-mateus", name: "Mateus", img: "images/card-mateus.png", bio: "Insert story here about Mateus..." },
    { id: "card-matthew", name: "Matthew", img: "images/card-matthew.png", bio: "Insert story here about Matthew..." },
    { id: "card-sam", name: "Sam", img: "images/card-sam.png", bio: "Insert story here about Sam..." }
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
