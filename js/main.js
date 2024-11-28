const positionSelect = document.getElementById('positionPlayer');
const elementsPlayer = document.querySelectorAll('.form-group-player');
const elementsGK = document.querySelectorAll('.form-group-gk');

const btnAjoutPlayer = document.getElementById("btnAjoutPlayer");

const namePlayer = document.getElementById("namePlayer");
const photoPlayer = document.getElementById("photoPlayer");
const nationalityPlayer = document.getElementById("nationalityPlayer");
const drapeauPlayer = document.getElementById("drapeauPlayer");
const clubPlayer = document.getElementById("clubPlayer");
const logoPlayer = document.getElementById("logoPlayer");
const ratingPlayer = document.getElementById("ratingPlayers");
const pacePlayer = document.getElementById("pacePlayer");
const shootingPlayer = document.getElementById("shootingPlayer");
const passingPlayer = document.getElementById("passingPlayer");
const dribblingPlayer = document.getElementById("dribblingPlayer");
const defendingPlayer = document.getElementById("defendingPlayer");
const physicalPlayer = document.getElementById("physicalPlayer");
const divingGK = document.getElementById("divingGK");
const handlingGK = document.getElementById("handlingGK");
const kickingGK = document.getElementById("kickingGK");
const reflexesGK = document.getElementById("reflexesGK");
const speedGK = document.getElementById("speedGK");
const positioningGK = document.getElementById("positioningGK");
const playerForm = document.getElementById("playerForm");

let donner = JSON.parse(localStorage.getItem('players')) || [];

function handlePositionChange() {
    if (positionSelect.value === 'GK') {
        elementsGK.forEach(element => {
            element.style.display = 'flex';
        });
        elementsPlayer.forEach(element => {
            element.style.display = 'none';
        });
    } else {
        elementsGK.forEach(element => {
            element.style.display = 'none';
        });
        elementsPlayer.forEach(element => {
            element.style.display = 'flex';
        });
    }
}

positionSelect.addEventListener('change', handlePositionChange);

handlePositionChange();

function displayPlayers() {
    const valueSelected = {
        GK: document.getElementById("gardient-position"),
        CBR: document.getElementById("milieu-defensseur-right"),
        CBL: document.getElementById("milieu-defensseur-left"),
        LB: document.getElementById("left-defensseur"),
        RB: document.getElementById("right-defensseur"),
        CML: document.getElementById("milieu-position-left"),
        CM: document.getElementById("milieu-position"),
        CMR: document.getElementById("milieu-position-right"),
        LW: document.getElementById("attaquant-left"),
        RW: document.getElementById("attaquant-right"),
        ST: document.getElementById("attaquant-milieu"),
    };

    Object.values(valueSelected).forEach(joueurSelectionne => {
        if (joueurSelectionne) joueurSelectionne.innerHTML = '';
    });

    donner.forEach((player, index) => {
        const joueurSelectionne = valueSelected[player.position];
        if (joueurSelectionne) {
            if (player.position === "GK") {
                joueurSelectionne.innerHTML += `
                    <div class="gardient-changement">
                        <div class="top-info-player">
                            <div class="position-player">
                                <span>${player.position}</span>
                            </div>
                            <div class="note-player">
                                <span>${player.rating}</span>
                            </div>
                        </div>
                        <div class="profile-gardient-player">
                            <img src="${player.photo}" alt="${player.name}" style="width: 4rem; height: 4rem;">
                        </div>
                        <div class="information-player">
                            <div class="player-name">
                                <h3>${player.name}</h3>
                            </div>
                            <div class="statistiques-player">
                                <div class="diving-player">
                                    <p>DIV</p>
                                    <span>${player.pace}</span>
                                </div>
                                <div class="handling-player">
                                    <p>HAN</p>
                                    <span>${player.shooting}</span>
                                </div>
                                <div class="kicking-player">
                                    <p>KIC</p>
                                    <span>${player.passing}</span>
                                </div>
                                <div class="reflexes-player">
                                    <p>REF</p>
                                    <span>${player.dribbling}</span>
                                </div>
                                <div class="speed-player">
                                    <p>SPE</p>
                                    <span>${player.defending}</span>
                                </div>
                                <div class="positioning-player">
                                    <p>POS</p>
                                    <span>${player.physical}</span>
                                </div>
                            </div>
                            <div class="les-logos-player">
                                <div class="nationalite-log">
                                    <img src="${player.flag}" alt="drapeau" style="width: 1rem; height: 1rem;">
                                </div>
                                <div class="club-log">
                                    <img src="${player.logo}" alt="logo club" style="width: 1rem; height: 1rem;">
                                </div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deletePlayer(${index})"><em class="fas fa-trash"></em></button>
                    </div>
                `;
            } else {
                joueurSelectionne.innerHTML += `
                    <div class="attaquant-changement">
                        <div class="top-info-player">
                            <div class="position-player">
                                <span>${player.position}</span>
                            </div>
                            <div class="note-player">
                                <span>${player.rating}</span>
                            </div>
                        </div>
                        <div class="profile-attaquant-player">
                            <img src="${player.photo}" alt="badge_gold" style="width: 4rem; height: 4rem;">
                        </div>
                        <div class="information-player">
                            <div class="player-name">
                                <h3>${player.name}</h3>
                            </div>
                            <div class="statistiques-player">
                                <div class="pac-player">
                                    <p>PAC</p><span>${player.pace}</span>
                                </div>
                                <div class="sho-player">
                                    <p>SHO</p><span>${player.shooting}</span>
                                </div>
                                <div class="pas-player">
                                    <p>PAS</p><span>${player.passing}</span>
                                </div>
                                <div class="dri-player">
                                    <p>DRI</p><span>${player.dribbling}</span>
                                </div>
                                <div class="def-player">
                                    <p>DEF</p><span>${player.defending}</span>
                                </div>
                                <div class="phy-player">
                                    <p>PHY</p><span>${player.physical}</span>
                                </div>
                            </div>
                            <div class="les-logos-player">
                                <div class="nationalite-log">
                                    <img src="${player.flag}" alt="drapeau" style="width: 1rem; height: 1rem;">
                                </div>
                                <div class="club-log">
                                    <img src="${player.logo}" alt="logo club" style="width: 1rem; height: 1rem;">
                                </div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deletePlayer(${index})"><em class="fas fa-trash"></em></button>
                    </div>
                `;
            }
        }
    });
}


function deletePlayer(index) {
    donner.splice(index, 1);
    savePlayersToLocalStorage();
    displayPlayers();
}

function savePlayersToLocalStorage() {
    localStorage.setItem('players', JSON.stringify(donner));
}

btnAjoutPlayer.addEventListener("click", (e) => {
    e.preventDefault();

     const playerValue = {
        name: namePlayer.value.trim(),
        photo: photoPlayer.value.trim(),
        nationality: nationalityPlayer.value.trim(),
        flag: drapeauPlayer.value.trim(),
        club: clubPlayer.value.trim(),
        logo: logoPlayer.value.trim(),
        position: positionSelect.value.trim(),
        rating: ratingPlayer.value.trim(),
        pace: pacePlayer.value.trim(),
        shooting: shootingPlayer.value.trim(),
        passing: passingPlayer.value.trim(),
        dribbling: dribblingPlayer.value.trim(),
        defending: defendingPlayer.value.trim(),
        physical: physicalPlayer.value.trim(),
    };

    if (playerValue.position === "GK") {
        playerValue.pace = divingGK.value.trim();
        playerValue.shooting = handlingGK.value.trim();
        playerValue.passing = kickingGK.value.trim();
        playerValue.dribbling = reflexesGK.value.trim();
        playerValue.defending = speedGK.value.trim();
        playerValue.physical = positioningGK.value.trim();
    }

    // if (!Object.values(playerValue).every(value => value !== "")) {
    //     alert('Veuillez remplir tous les champs obligatoires.');
    //     return;
    // }

    donner.push(playerValue);
    savePlayersToLocalStorage();
    displayPlayers();

    // console.log(playerValue);
    
});

displayPlayers();

