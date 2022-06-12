document.addEventListener('DOMContentLoaded', function() {
    getAllUsers(); 
})

function getAllUsers() {
    fetch('users.json').then(response => response.json()).then( json => {
        cards(json)     
    })
};
 
 function cards(users) {
     let contenitore = document.querySelector('#contenitore');
     users.forEach(element => {
        let wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        contenitore.appendChild(wrapper);

        let clashCard = document.createElement('div');
        clashCard.className = 'clash-card';
        wrapper.appendChild(clashCard);

        let clashCardImg = document.createElement('div');
        clashCardImg.className = 'clash-card__image';
        clashCard.appendChild(clashCardImg);

        let imgPersonaggi = document.createElement('div');
        imgPersonaggi.innerHTML = `<img src = ${element.immagine} alt="Foto personaggi"/>`;
        clashCardImg.appendChild(imgPersonaggi);

        let clashCardLevel = document.createElement('div');
        clashCardLevel.className = 'clash-card__level';
        clashCardLevel.innerHTML = `${element.livello}`;
        clashCard.appendChild(clashCardLevel);

        let clashCardunitName = document.createElement('div');
        clashCardunitName.className = 'clash-card__unit-name';
        clashCardunitName.innerHTML = `${element.nome}`;
        clashCard.appendChild(clashCardunitName);

        let clashCardunitDesc = document.createElement('div');
        clashCardunitDesc.className = 'clash-card__unit-description';
        clashCardunitDesc.innerHTML = `${element.descrizione}`;
        clashCard.appendChild(clashCardunitDesc);

        let clashCardunitStats = document.createElement('div');
        clashCardunitStats.className = 'clash-card__unit-stats';
        clashCard.appendChild(clashCardunitStats);

        let oneThird = document.createElement('div');
        oneThird.className = 'one-third left-third';
        clashCardunitStats.appendChild(oneThird);

        let statAttacco = document.createElement('div');
        statAttacco.className = 'stat';
        statAttacco.innerHTML = `${element.attacco}`;
        oneThird.appendChild(statAttacco);

        let statValue = document.createElement('div');
        statValue.className = 'stat-value uno';
        statValue.innerHTML = `attacco`;
        oneThird.appendChild(statValue);

        let oneThird2 = document.createElement('div');
        oneThird2.className = 'one-third';
        clashCardunitStats.appendChild(oneThird2);

        let statDifesa = document.createElement('div');
        statDifesa.className = 'stat';
        statDifesa.innerHTML = `${element.difesa}`;
        oneThird2.appendChild(statDifesa);

        let statValueDue = document.createElement('div');
        statValueDue.className = 'stat-value due';
        statValueDue.innerHTML = `Difesa`;
        oneThird2.appendChild(statValueDue);

        let oneThird3 = document.createElement('div');
        oneThird3.className = 'one-third no-border';
        clashCardunitStats.appendChild(oneThird3);

        let statVelocita = document.createElement('div');
        statVelocita.className = 'stat';
        statVelocita.innerHTML = `${element.velocita}`;
        oneThird3.appendChild(statVelocita);

        let statValueTre = document.createElement('div');
        statValueTre.className = 'stat-value tre';
        statValueTre.innerHTML = `Velocità`;
        oneThird3.appendChild(statValueTre);  
       } 
    )
};