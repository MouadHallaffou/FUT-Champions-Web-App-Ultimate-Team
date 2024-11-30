document.addEventListener("DOMContentLoaded", function () {
  const positionSelect = document.getElementById("positionPlayer");
  const elementsPlayer = document.querySelectorAll(".form-group-player");
  const elementsGK = document.querySelectorAll(".form-group-gk");

  const btnAjoutPlayer = document.getElementById("btnAjoutPlayer");
  const btnAjoutPlayerChangement = document.getElementById(
    "btnAjoutPlayerChangement"
  );

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

  const changementContent = document.getElementById("changement-content");

  let donner = JSON.parse(localStorage.getItem("players")) || [];
  let donnerChangement =JSON.parse(localStorage.getItem("players")) || [];

  function playersPositionChange() {
    if (positionSelect.value === "GK") {
      elementsGK.forEach((element) => (element.style.display = "flex"));
      elementsPlayer.forEach((element) => (element.style.display = "none"));
    } else {
      elementsGK.forEach((element) => (element.style.display = "none"));
      elementsPlayer.forEach((element) => (element.style.display = "flex"));
    }
  }
  positionSelect.addEventListener("change", playersPositionChange);
  playersPositionChange();

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

    Object.values(valueSelected).forEach((joueurSelectionne) => {
      if (joueurSelectionne) joueurSelectionne.innerHTML = "";
    });

    donner.forEach((player, index) => {
      const joueurSelectionne = valueSelected[player.position];
      if (joueurSelectionne) {
        if (player.position === "GK") {
          joueurSelectionne.innerHTML += `
                    <div class="gardient-card">
                        <div class="top-info-player">
                            <div class="position-player"><span>${player.position}</span></div>
                            <div class="note-player"><span>${player.rating}</span></div>
                        </div>
                        <div class="profile-gardient-player">
                            <img src="${player.photo}" alt="${player.name}" style="width: 4rem; height: 4.5rem;">
                        </div>
                        <div class="information-player">
                            <div class="player-name"><h3>${player.name}</h3></div>
                            <div class="statistiques-player">
                                <div class="diving-player"><p>DIV</p><span>${player.pace}</span></div>
                                <div class="handling-player"><p>HAN</p><span>${player.shooting}</span></div>
                                <div class="kicking-player"><p>KIC</p><span>${player.passing}</span></div>
                                <div class="reflexes-player"><p>REF</p><span>${player.dribbling}</span></div>
                                <div class="speed-player"><p>SPE</p><span>${player.defending}</span></div>
                                <div class="positioning-player"><p>POS</p><span>${player.physical}</span></div>
                            </div>
                            <div class="les-logos-player">
                                <div class="nationalite-log"><img src="${player.flag}" alt="drapeau" style="width: 1.2rem; height: 1.3rem;"></div>
                                <div class="club-log"><img src="${player.logo}" alt="logo club" style="width: 1.2rem; height: 1.3rem;"></div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deletePlayer(${index})"><em class="fas fa-trash"></em></button>
                    </div>`;
        } else {
          joueurSelectionne.innerHTML += `
                    <div class="player-card">
                        <div class="top-info-player">
                            <div class="position-player"><span>${player.position}</span></div>
                            <div class="note-player"><span>${player.rating}</span></div>
                        </div>
                        <div class="profile-attaquant-player">
                            <img src="${player.photo}" alt="badge_gold" style="width: 4rem; height: 4.5rem;">
                        </div>
                        <div class="information-player">
                            <div class="player-name"><h3>${player.name}</h3></div>
                            <div class="statistiques-player">
                                <div class="pac-player"><p>PAC</p><span>${player.pace}</span></div>
                                <div class="sho-player"><p>SHO</p><span>${player.shooting}</span></div>
                                <div class="pas-player"><p>PAS</p><span>${player.passing}</span></div>
                                <div class="dri-player"><p>DRI</p><span>${player.dribbling}</span></div>
                                <div class="def-player"><p>DEF</p><span>${player.defending}</span></div>
                                <div class="phy-player"><p>PHY</p><span>${player.physical}</span></div>
                            </div>
                            <div class="les-logos-player">
                                <div class="nationalite-log"><img src="${player.flag}" alt="drapeau" style="width: 1.2rem; height: 1.3rem;"></div>
                                <div class="club-log"><img src="${player.logo}" alt="logo club" style="width: 1.2rem; height: 1.3rem;"></div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deletePlayer(${index})"><em class="fas fa-trash"></em></button>
                    </div>`;
        }
      }
    });
  }

  window.deletePlayer = function (index) {
    donner.splice(index, 1);
    savePlayersToLocalStorage();
    displayPlayers();
  };

  function savePlayersToLocalStorage() {
    localStorage.setItem("players", JSON.stringify(donner));
    localStorage.setItem("players", JSON.stringify(donnerChangement));
  }

  btnAjoutPlayer.addEventListener("click", (e) => {
    e.preventDefault();

    if(!validationFormulaire())
      return;

    if (donner.length >= 11) {
      alert("terrain plein.");
      btnAjoutPlayer.style.display = "none";
      return;
    }




// function validation de formulaire avec regulaires expressions
    function validationFormulaire(){
        let valid = true;
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

        const regExpress ={
            nameRegex : /(^[a-zA-Z\s]{0,30}$)/,
            urlregex:/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
            statistiquesRegex:/^[0-9]{2}/,
        }
      ///////////////////////////////////////////////////////////////////////////
      const erreurMessages = document.querySelectorAll('.erreur-message');
      erreurMessages.forEach(msg => msg.style.display = 'none');
      if (!regExpress.nameRegex.test(playerValue.name) || playerValue.name === "") {
          valid = false;
          namePlayer.style.border = "2px solid red";
          document.querySelector('.erreur-message').style.display = "block"; 
      } else {
          namePlayer.style.border = "2px solid #20a904"; 
      }
      if (!regExpress.nameRegex.test(playerValue.name) || playerValue.name === "") {
          valid = false;
          namePlayer.style.border = "2px solid red";
      } else {
          namePlayer.style.border = "2px solid #20a904";
      }
      
      if (!regExpress.nameRegex.test(playerValue.club) || playerValue.club === "") {
          valid = false;
          clubPlayer.style.border = "2px solid red";
      } else {
          clubPlayer.style.border = "2px solid #20a904";
      }
      
      if (!regExpress.nameRegex.test(playerValue.nationality) || playerValue.nationality === "") {
          valid = false;
          nationalityPlayer.style.border = "2px solid red";
      } else {
          nationalityPlayer.style.border = "2px solid #20a904";
      }
      ///////////////////////////////////////////////////////////////////////////////////////////
      if (!regExpress.urlregex.test(playerValue.photo) || playerValue.photo === "") {
        valid = false;
        photoPlayer.style.border = "2px solid red";
        erreurMessage.style.display="block"
      } else {
        photoPlayer.style.border = "2px solid #20a904";
      }
      if (!regExpress.urlregex.test(playerValue.flag) || playerValue.flag === "") {
        valid = false;
        drapeauPlayer.style.border = "2px solid red";
      } else {
        drapeauPlayer.style.border = "2px solid #20a904";
      }
      if (!regExpress.urlregex.test(playerValue.logo) || playerValue.logo === "") {
        valid = false;
        logoPlayer.style.border = "2px solid red";
      } else {
        logoPlayer.style.border = "2px solid #20a904";
      }
      ////////////////////////////////////////////////////////////////////////////////////////
      if (!regExpress.statistiquesRegex.test(playerValue.rating) || playerValue.rating === "" || playerValue.rating <=10 || playerValue.rating >100) {
        valid = false;
        ratingPlayer.style.border = "2px solid red";
      } else {
        ratingPlayer.style.border = "2px solid #20a904";
      }
      if (!regExpress.statistiquesRegex.test(playerValue.pace) || playerValue.pace === "" || playerValue.pace<=10 || playerValue.pace>100) {
        valid = false;
        pacePlayer.style.border = "2px solid red";
        divingGK.style.border = "2px solid red";
      } else {
        pacePlayer.style.border = "2px solid #20a904";
        divingGK.style.border = "2px solid #20a904";
      }
      if (!regExpress.statistiquesRegex.test(playerValue.shooting) || playerValue.shooting === "" || playerValue.shooting<=10 || playerValue.shooting>100) {
        valid = false;
        shootingPlayer.style.border = "2px solid red";
        handlingGK.style.border = "2px solid red";
      } else {
        shootingPlayer.style.border = "2px solid #20a904";
        handlingGK.style.border = "2px solid #20a904";
      }
      if (!regExpress.statistiquesRegex.test(playerValue.passing) || playerValue.passing === "" || playerValue.passing<=10 || playerValue.passing>100) {
        valid = false;
        passingPlayer.style.border = "2px solid red";
        kickingGK.style.border = "2px solid red";
      } else {
        passingPlayer.style.border = "2px solid #20a904";
        kickingGK.style.border = "2px solid #20a904";
      }
      if (!regExpress.statistiquesRegex.test(playerValue.dribbling) || playerValue.dribbling === "" || playerValue.dribbling<=10 || playerValue.dribbling>100) {
        valid = false;
        dribblingPlayer.style.border = "2px solid red";
        reflexesGK.style.border = "2px solid red";
      } else {
        dribblingPlayer.style.border = "2px solid #20a904";
        reflexesGK.style.border = "2px solid #20a904";
      }
      if (!regExpress.statistiquesRegex.test(playerValue.defending) || playerValue.defending === "" || playerValue.defending<=10 || playerValue.defending>100) {
        valid = false;
        defendingPlayer.style.border = "2px solid red";
        speedGK.style.border = "2px solid red";
      } else {
        defendingPlayer.style.border = "2px solid #20a904";
        speedGK.style.border = "2px solid #20a904";
      }
      if (!regExpress.statistiquesRegex.test(playerValue.physical) || playerValue.physical === "" || playerValue.physical<=10 || playerValue.physical>100) {
        valid = false;
        physicalPlayer.style.border = "2px solid red";
        positioningGK.style.border = "2px solid red";
      } else {
        physicalPlayer.style.border = "2px solid #20a904";
        positioningGK.style.border = "2px solid #20a904";
      }
       return valid;
     }





    const playerValue = AvoirPlayerValues();
    if (!playerValue) return;

    donner.push(playerValue);
    savePlayersToLocalStorage();
    displayPlayers();
  });

  function AvoirPlayerValues() {
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

    return playerValue;
  }

  btnAjoutPlayerChangement.addEventListener("click", (e) => {
    e.preventDefault();

    if (donnerChangement.length >= 12) {
      alert("changement pleine");
      return;
    }
    const playerValue = AvoirPlayerValues();
    if (!playerValue) return;

    donnerChangement.push(playerValue);
    savePlayersToLocalStorage();
    ChangementDisplay();
  });

  function ChangementDisplay() {
    changementContent.innerHTML = "";

    donnerChangement.forEach((player, index) => {
      const affichageChangementplayer = document.createElement("div");
      affichageChangementplayer.classList.add("changement-content");
      if (player.position === "GK") {
        affichageChangementplayer.innerHTML += `
                    <div class="gardient-changement">
                        <div class="top-info-player">
                            <div class="position-player"><span>${player.position}</span></div>
                            <div class="note-player"><span>${player.rating}</span></div>
                        </div>
                        <div class="profile-gardient-player">
                            <img src="${player.photo}" alt="${player.name}" style="width: 4rem; height: 4.5rem;">
                        </div>
                        <div class="information-player">
                            <div class="player-name"><h3>${player.name}</h3></div>
                            <div class="statistiques-player">
                                <div class="diving-player"><p>DIV</p><span>${player.pace}</span></div>
                                <div class="handling-player"><p>HAN</p><span>${player.shooting}</span></div>
                                <div class="kicking-player"><p>KIC</p><span>${player.passing}</span></div>
                                <div class="reflexes-player"><p>REF</p><span>${player.dribbling}</span></div>
                                <div class="speed-player"><p>SPE</p><span>${player.defending}</span></div>
                                <div class="positioning-player"><p>POS</p><span>${player.physical}</span></div>
                            </div>
                            <div class="les-logos-player">
                                <div class="nationalite-log"><img src="${player.flag}" alt="drapeau" style="width: 1.2rem; height: 1.3rem;"></div>
                                <div class="club-log"><img src="${player.logo}" alt="logo club" style="width: 1.2rem; height: 1.3rem;"></div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deleteChangement(${index})"><em class="fas fa-trash"></em></button>
                    </div>`;
      } else {
        affichageChangementplayer.innerHTML += `
                        <div class="attaquant-changement">
                        <div class="top-info-player">
                            <div class="position-player"><span>${player.position}</span></div>
                            <div class="note-player"><span>${player.rating}</span></div>
                        </div>
                        <div class="profile-attaquant-player">
                            <img src="${player.photo}" alt="badge_gold" style="width: 4rem; height: 4.5rem;">
                        </div>
                        <div class="information-player">
                            <div class="player-name"><h3>${player.name}</h3></div>
                            <div class="statistiques-player">
                                <div class="pac-player"><p>PAC</p><span>${player.pace}</span></div>
                                <div class="sho-player"><p>SHO</p><span>${player.shooting}</span></div>
                                <div class="pas-player"><p>PAS</p><span>${player.passing}</span></div>
                                <div class="dri-player"><p>DRI</p><span>${player.dribbling}</span></div>
                                <div class="def-player"><p>DEF</p><span>${player.defending}</span></div>
                                <div class="phy-player"><p>PHY</p><span>${player.physical}</span></div>
                            </div>
                            <div class="les-logos-player">
                                <div class="nationalite-log"><img src="${player.flag}" alt="drapeau" style="width: 1.2rem; height: 1.3rem;"></div>
                                <div class="club-log"><img src="${player.logo}" alt="logo club" style="width: 1.2rem; height: 1.3rem;"></div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deleteChangement(${index})"><em class="fas fa-trash"></em></button>
                    </div>`;
      }
      changementContent.appendChild(affichageChangementplayer);
    });
  }

  window.deleteChangement = function (index) {
    donnerChangement.splice(index, 1);
    savePlayersToLocalStorage();
    ChangementDisplay();
  };

  displayPlayers();
  ChangementDisplay();
});

/////////////////////////////////////////////////////
/////////////////// Drag end droooppp////////////////
/////////////////////////////////////////////////////
const attaquant = document.querySelector(".attaquant-group");
document.addEventListener("DOMContentLoaded", function () {
  if (attaquant) {
    new Sortable(attaquant, {
      animation: 350,
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      group: "shared",
      swap: true,
    });
  }
});
const milieu = document.querySelector(".milieu-group");
document.addEventListener("DOMContentLoaded", function () {
  if (milieu) {
    new Sortable(milieu, {
      animation: 350,
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      group: "shared",
      swap: true,
    });
  }
});
  const defenseur = document.querySelector(".defenseur-group");
  document.addEventListener("DOMContentLoaded", function () {
    if (defenseur) {
        new Sortable(defenseur, {
            animation: 350,
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            group: "shared",
            swap: true,
          });
    }
});
const gardient = document.querySelector(".gardient-group");
  document.addEventListener("DOMContentLoaded", function () {
    if (gardient) {
        new Sortable(gardient, {
            animation: 350,
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            group: "shared",
            swap: true,
          });
    }
});
const changement = document.querySelector(".changement-content");
document.addEventListener("DOMContentLoaded", function () {
  if (changement) {
      new Sortable(changement, {
          animation: 350,
          chosenClass: "sortable-chosen",
          dragClass: "sortable-drag",
          group: "shared",
          swap: true,
        });
  }
});
