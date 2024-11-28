const positionSelect = document.getElementById('positionPlayer'); 
const elementsPlayer = document.querySelectorAll('.form-group-player');
const elementsGK = document.querySelectorAll('.form-group-gk');

function PositioneElementsChange() {
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
positionSelect.addEventListener('change', PositioneElementsChange);
PositioneElementsChange();

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

function deletePlayer(index) {
    donner.splice(index, 1);
    SouvegardeJoueurInLocalStorage();
    displayPlayers();
}




const positions = document.getElementById('positionPlayer');
let valuePositions ='';
if(positions.value.trim() ==="GK"){
    valuePositions = "gardient-position"
}
if(positions.value.trim() ==="CB"){
    valuePositions = "milieu-defensseur"
}
if(positions.value.trim() ==="LB"){
    valuePositions = "left-defensseur"
}
if(positions.value.trim() ==="RB"){
    valuePositions = "right-defensseur"
}
if(positions.value.trim() ==="CM"){
    valuePositions = "milieu-position"
}
if(positions.value.trim() ==="LW"){
     valuePositions = "attaquant-left"
}
if(positions.value.trim() ==="RW"){
     valuePositions = "attaquant-right"
}
if(positions.value.trim() ==="ST"){
     valuePositions = "attaquant-milieu"
}




function displayPlayers() {
    const afficheCard = document.getElementById('changement-content');
    afficheCard.innerHTML = ''; 
    donner.forEach((DonnerPlayer, index) => {
        afficheCard.innerHTML += `
            <div class="attaquant-changement">
                <div class="top-info-player">
                    <div class="position-player">
                        <span>${positionSelect.value}</span>
                    </div>
                    <div class="note-player">
                        <span>${DonnerPlayer.rating}</span>
                    </div>
                </div>
                <div class="profile-attaquant-player">
                    <img src="${DonnerPlayer.photo}" alt="badge_gold" style="width: 4rem; height: 4rem;">
                </div>
                <div class="information-player">
                    <div class="player-name">
                        <h3>${DonnerPlayer.name}</h3>
                    </div>
                    <div class="statistiques-player">
                        <div class="pac-player">
                            <p>PAC</p>
                            <span>${DonnerPlayer.pace}</span>
                        </div>
                        <div class="sho-player">
                            <p>SHO</p>
                            <span>${DonnerPlayer.shooting}</span>
                        </div>
                        <div class="pas-player">
                            <p>PAS</p>
                            <span>${DonnerPlayer.passing}</span>
                        </div>
                        <div class="dri-player">
                            <p>DRI</p>
                            <span>${DonnerPlayer.dribbling}</span>
                        </div>
                        <div class="def-player">
                            <p>DEF</p>
                            <span>${DonnerPlayer.defending}</span>
                        </div>
                        <div class="phy-player">
                            <p>PHY</p>
                            <span>${DonnerPlayer.physical}</span>
                        </div>
                    </div>
                    <div class="les-logos-player">
                        <div class="nationalite-log">
                            <img src="${DonnerPlayer.flag}" alt="logo_fr" style="width: 1rem; height: 1rem;">
                        </div>
                        <div class="club-log">
                            <img src="${DonnerPlayer.logo}" alt="logo_club" style="width: 1rem; height: 1rem;">
                        </div>
                    </div>
                </div>
                <button class="delete-btn" onclick="deletePlayer(${index})"><em class="fas fa-trash"></em></button>
            </div>
        `;
    });
}
function SouvegardeJoueurInLocalStorage() {
    localStorage.setItem('players', JSON.stringify(donner));
}
btnAjoutPlayer.addEventListener("click", (e) => {
    e.preventDefault();
    const DonnerPlayer = {
        name: namePlayer.value.trim(),
        photo: photoPlayer.value.trim(),
        nationality: nationalityPlayer.value.trim(),
        flag: drapeauPlayer.value.trim(),
        club: clubPlayer.value.trim(),
        logo: logoPlayer.value.trim(),
        rating: ratingPlayer.value.trim(),
        pace: pacePlayer.value.trim(),
        shooting: shootingPlayer.value.trim(),
        passing: passingPlayer.value.trim(),
        dribbling: dribblingPlayer.value.trim(),
        defending: defendingPlayer.value.trim(),
        physical: physicalPlayer.value.trim(),
    };

    // if(namePlayer.value.trim() || photoPlayer.value.trim()|| nationalityPlayer.value.trim()|| drapeauPlayer.value.trim()|| logoPlayer.value.trim()|| ratingPlayer.value.trim()|| pacePlayer.value.trim()|| shootingPlayer.value.trim()|| passingPlayer.value.trim()||dribblingPlayer.value.trim() ||defendingPlayer.value.trim() || physicalPlayer.value.trim() == 0){
    //     alert('Please remplire les champs obligatoires');
    // }
    // else {
       
    // } 

    donner.push(DonnerPlayer);

    SouvegardeJoueurInLocalStorage();
    displayPlayers();

});

displayPlayers();
