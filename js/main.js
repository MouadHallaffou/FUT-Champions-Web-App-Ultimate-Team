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
  /* tableux pour stoker les doner des jours */
  let donner = JSON.parse(localStorage.getItem("players")) || [];
  let donnerChangement =
    JSON.parse(localStorage.getItem("playersChangement")) || [];
  /* function pour changer les statistiques du formulaire selon le joueur */
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

  // function validation de formulaire avec regulaires expressions
  function validationFormulaire() {
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
    // Paramètres spécifiques pour les gardiens de but
    if (playerValue.position === "GK") {
      playerValue.pace = divingGK.value.trim();
      playerValue.shooting = handlingGK.value.trim();
      playerValue.passing = kickingGK.value.trim();
      playerValue.dribbling = reflexesGK.value.trim();
      playerValue.defending = speedGK.value.trim();
      playerValue.physical = positioningGK.value.trim();
    }

    const regExpress = {
      nameRegex: /(^[a-zA-Z\s]{0,30}$)/,
      urlregex:
        /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      statistiquesRegex: /^[1-9][0-9]$/,
    };
    ///////////////////////////////////////////////////////////////////////////
    const erreurMessages = document.querySelectorAll(".erreur-message");
    erreurMessages.forEach((msg) => (msg.style.display = "none"));
    if (
      !regExpress.nameRegex.test(playerValue.name) ||
      playerValue.name === ""
    ) {
      valid = false;
      namePlayer.style.border = "2px solid red";
      document.querySelector(".erreur-message").style.display = "block";
    } else {
      namePlayer.style.border = "2px solid #20a904";
    }
    if (
      !regExpress.nameRegex.test(playerValue.club) ||
      playerValue.club === ""
    ) {
      valid = false;
      clubPlayer.style.border = "2px solid red";
      clubPlayer.nextElementSibling.style.display = "block";
    } else {
      clubPlayer.style.border = "2px solid #20a904";
      clubPlayer.nextElementSibling.style.display = "none";
    }
    if (
      !regExpress.nameRegex.test(playerValue.nationality) ||
      playerValue.nationality === ""
    ) {
      valid = false;
      nationalityPlayer.style.border = "2px solid red";
      nationalityPlayer.nextElementSibling.style.display = "block";
    } else {
      nationalityPlayer.style.border = "2px solid #20a904";
      nationalityPlayer.nextElementSibling.style.display = "none";
    }
    ///////////////////////////////////////////////////////////////////////////////////////////
    if (
      !regExpress.urlregex.test(playerValue.photo) ||
      playerValue.photo === ""
    ) {
      valid = false;
      photoPlayer.style.border = "2px solid red";
      photoPlayer.nextElementSibling.style.display = "block";
    } else {
      photoPlayer.nextElementSibling.style.display = "none";
      photoPlayer.style.border = "2px solid #20a904";
    }
    if (
      !regExpress.urlregex.test(playerValue.flag) ||
      playerValue.flag === ""
    ) {
      valid = false;
      drapeauPlayer.style.border = "2px solid red";
      drapeauPlayer.nextElementSibling.style.display = "block";
    } else {
      drapeauPlayer.nextElementSibling.style.display = "none";
      drapeauPlayer.style.border = "2px solid #20a904";
    }
    if (
      !regExpress.urlregex.test(playerValue.logo) ||
      playerValue.logo === ""
    ) {
      valid = false;
      logoPlayer.style.border = "2px solid red";
      logoPlayer.nextElementSibling.style.display = "block";
    } else {
      logoPlayer.nextElementSibling.style.display = "none";
      logoPlayer.style.border = "2px solid #20a904";
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    if (
      !regExpress.statistiquesRegex.test(playerValue.rating) ||
      playerValue.rating === ""
    ) {
      valid = false;
      ratingPlayer.style.border = "2px solid red";
      ratingPlayer.nextElementSibling.style.display = "block";
    } else {
      ratingPlayer.style.border = "2px solid #20a904";
      ratingPlayer.nextElementSibling.style.display = "none";
    }
    if (
      !regExpress.statistiquesRegex.test(playerValue.pace) ||
      playerValue.pace === ""
    ) {
      valid = false;
      pacePlayer.style.border = "2px solid red";
      divingGK.style.border = "2px solid red";
      pacePlayer.nextElementSibling.style.display = "block";
      divingGK.nextElementSibling.style.display = "block";
    } else {
      pacePlayer.style.border = "2px solid #20a904";
      divingGK.style.border = "2px solid #20a904";
      pacePlayer.nextElementSibling.style.display = "none";
      divingGK.nextElementSibling.style.display = "none";
    }
    if (
      !regExpress.statistiquesRegex.test(playerValue.shooting) ||
      playerValue.shooting === ""
    ) {
      valid = false;
      shootingPlayer.style.border = "2px solid red";
      handlingGK.style.border = "2px solid red";
      shootingPlayer.nextElementSibling.style.display = "block";
      handlingGK.nextElementSibling.style.display = "block";
    } else {
      shootingPlayer.style.border = "2px solid #20a904";
      handlingGK.style.border = "2px solid #20a904";
      shootingPlayer.nextElementSibling.style.display = "none";
      handlingGK.nextElementSibling.style.display = "none";
    }
    if (
      !regExpress.statistiquesRegex.test(playerValue.passing) ||
      playerValue.passing === ""
    ) {
      valid = false;
      passingPlayer.style.border = "2px solid red";
      kickingGK.style.border = "2px solid red";
      passingPlayer.nextElementSibling.style.display = "block";
      kickingGK.nextElementSibling.style.display = "block";
    } else {
      passingPlayer.style.border = "2px solid #20a904";
      kickingGK.style.border = "2px solid #20a904";
      passingPlayer.nextElementSibling.style.display = "none";
      kickingGK.nextElementSibling.style.display = "none";
    }
    if (
      !regExpress.statistiquesRegex.test(playerValue.dribbling) ||
      playerValue.dribbling === ""
    ) {
      valid = false;
      dribblingPlayer.style.border = "2px solid red";
      reflexesGK.style.border = "2px solid red";
      dribblingPlayer.nextElementSibling.style.display = "block";
      reflexesGK.nextElementSibling.style.display = "block";
    } else {
      dribblingPlayer.style.border = "2px solid #20a904";
      reflexesGK.style.border = "2px solid #20a904";
      dribblingPlayer.nextElementSibling.style.display = "none";
      reflexesGK.nextElementSibling.style.display = "none";
    }
    if (
      !regExpress.statistiquesRegex.test(playerValue.defending) ||
      playerValue.defending === ""
    ) {
      valid = false;
      defendingPlayer.style.border = "2px solid red";
      speedGK.style.border = "2px solid red";
      defendingPlayer.nextElementSibling.style.display = "block";
      speedGK.nextElementSibling.style.display = "block";
    } else {
      defendingPlayer.style.border = "2px solid #20a904";
      speedGK.style.border = "2px solid #20a904";
      defendingPlayer.nextElementSibling.style.display = "none";
      speedGK.nextElementSibling.style.display = "none";
    }
    if (
      !regExpress.statistiquesRegex.test(playerValue.physical) ||
      playerValue.physical === ""
    ) {
      valid = false;
      physicalPlayer.style.border = "2px solid red";
      positioningGK.style.border = "2px solid red";
      physicalPlayer.nextElementSibling.style.display = "block";
      positioningGK.nextElementSibling.style.display = "block";
    } else {
      physicalPlayer.style.border = "2px solid #20a904";
      positioningGK.style.border = "2px solid #20a904";
      physicalPlayer.nextElementSibling.style.display = "none";
      positioningGK.nextElementSibling.style.display = "none";
    }
    return valid;
  }
  /* afficher les les cards des joueurs dans le terrains */
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
                            <img src="${player.photo}" alt="${player.name}" style="width: 4.5rem; height: 5rem;">
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
                                <div class="nationalite-log"><img src="${player.flag}" alt="drapeau" style="width: 1.2rem; height: 1rem;"></div>
                                <div class="club-log"><img src="${player.logo}" alt="logo club" style="width: 1.2rem; height: 1rem;"></div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deletePlayer(${index})"><em class="fas fa-trash"></em></button>
                        <button class="edit-btn" onclick="modifierCard(${index})"><em class="fas fa-edit"></em></button>
                    </div>`;
        } else {
          joueurSelectionne.innerHTML += `
                    <div class="player-card">
                        <div class="top-info-player">
                            <div class="position-player"><span>${player.position}</span></div>
                            <div class="note-player"><span>${player.rating}</span></div>
                        </div>
                        <div class="profile-attaquant-player">
                            <img src="${player.photo}" alt="badge_gold" style="width: 4.5rem; height: 5rem;">
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
                                <div class="nationalite-log"><img src="${player.flag}" alt="drapeau" style="width: 1.2rem; height: 1rem;"></div>
                                <div class="club-log"><img src="${player.logo}" alt="logo club" style="width: 1.2rem; height: 1rem;"></div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deletePlayer(${index})"><em class="fas fa-trash"></em></button>
                        <button class="edit-btn" onclick="modifierCard(${index})"><em class="fas fa-edit"></em></button>
                    </div>`;
        }
      }
    });
  }

  /* suprimer la card d'un jour depuis le terrain et leur infos dans le storage*/
  deletePlayer = function (index) {
    donner.splice(index, 1);
    enregistrementLocalStorage();
    displayPlayers();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Supprition avec succes",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Fonction pour modifier les informations joueur sur le terrain
  modifierCard = function (index) {
    const player = donner[index];
    document.getElementById("namePlayer").value = player.name;
    document.getElementById("photoPlayer").value = player.photo;
    document.getElementById("nationalityPlayer").value = player.nationality;
    document.getElementById("drapeauPlayer").value = player.flag;
    document.getElementById("clubPlayer").value = player.club;
    document.getElementById("logoPlayer").value = player.logo;
    document.getElementById("ratingPlayers").value = player.rating;
    document.getElementById("pacePlayer").value = player.pace;
    document.getElementById("shootingPlayer").value = player.shooting;
    document.getElementById("passingPlayer").value = player.passing;
    document.getElementById("dribblingPlayer").value = player.dribbling;
    document.getElementById("defendingPlayer").value = player.defending;
    document.getElementById("physicalPlayer").value = player.physical;
    document.getElementById("positionPlayer").value = player.position;

    const btnEnregistre = document.getElementById("btnEnregistre");
    btnEnregistre.style.display = "block";

    // Ajouter un comportement au bouton d'enregistrement
    btnEnregistre.onclick = (e) => {
      e.preventDefault();
      // Mettre à jour les informations du joueur
      donner[index] = {
        name: document.getElementById("namePlayer").value.trim(),
        photo: document.getElementById("photoPlayer").value.trim(),
        nationality: document.getElementById("nationalityPlayer").value.trim(),
        flag: document.getElementById("drapeauPlayer").value.trim(),
        club: document.getElementById("clubPlayer").value.trim(),
        logo: document.getElementById("logoPlayer").value.trim(),
        position: document.getElementById("positionPlayer").value.trim(),
        rating: document.getElementById("ratingPlayers").value.trim(),
        pace: document.getElementById("pacePlayer").value.trim(),
        shooting: document.getElementById("shootingPlayer").value.trim(),
        passing: document.getElementById("passingPlayer").value.trim(),
        dribbling: document.getElementById("dribblingPlayer").value.trim(),
        defending: document.getElementById("defendingPlayer").value.trim(),
        physical: document.getElementById("physicalPlayer").value.trim(),
      };

      // Afficher un message de succès
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Modifications enregistre",
        showConfirmButton: false,
        timer: 1500,
      });

      enregistrementLocalStorage();
      displayPlayers();
      resetForlaireJoueur();
    };
  };

  // Fonction pour réinitialiser le formulaire et le bouton pour le terrain
  function resetForlaireJoueur() {
    document.getElementById("formulairePlayer").reset();
    const btnEnregistre = document.getElementById("btnEnregistre");
    btnEnregistre.style.display = "none";
  }

  // Fonction pour modifier les informations d'un joueur dans le changement
  modifierCardChangement = function (index) {
    const player = donnerChangement[index];

    // Remplir les champs du formulaire
    document.getElementById("namePlayer").value = player.name;
    document.getElementById("photoPlayer").value = player.photo;
    document.getElementById("nationalityPlayer").value = player.nationality;
    document.getElementById("drapeauPlayer").value = player.flag;
    document.getElementById("clubPlayer").value = player.club;
    document.getElementById("logoPlayer").value = player.logo;
    document.getElementById("ratingPlayers").value = player.rating;
    document.getElementById("pacePlayer").value = player.pace;
    document.getElementById("shootingPlayer").value = player.shooting;
    document.getElementById("passingPlayer").value = player.passing;
    document.getElementById("dribblingPlayer").value = player.dribbling;
    document.getElementById("defendingPlayer").value = player.defending;
    document.getElementById("physicalPlayer").value = player.physical;
    document.getElementById("positionPlayer").value = player.position;

    // Afficher le bouton d'enregistrement pour le changement
    const btnEnregistreChangement = document.getElementById(
      "btnEnregistreChangement"
    );
    btnEnregistreChangement.style.display = "block";

    btnEnregistreChangement.onclick = (e) => {
      e.preventDefault();
      // Mettre à jour les informations du joueur
      donnerChangement[index] = {
        name: document.getElementById("namePlayer").value.trim(),
        photo: document.getElementById("photoPlayer").value.trim(),
        nationality: document.getElementById("nationalityPlayer").value.trim(),
        flag: document.getElementById("drapeauPlayer").value.trim(),
        club: document.getElementById("clubPlayer").value.trim(),
        logo: document.getElementById("logoPlayer").value.trim(),
        position: document.getElementById("positionPlayer").value.trim(),
        rating: document.getElementById("ratingPlayers").value.trim(),
        pace: document.getElementById("pacePlayer").value.trim(),
        shooting: document.getElementById("shootingPlayer").value.trim(),
        passing: document.getElementById("passingPlayer").value.trim(),
        dribbling: document.getElementById("dribblingPlayer").value.trim(),
        defending: document.getElementById("defendingPlayer").value.trim(),
        physical: document.getElementById("physicalPlayer").value.trim(),
      };

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Modifications enregistre",
        showConfirmButton: false,
        timer: 1500,
      });

      enregistrementLocalStorage();
      ChangementDisplay();
      resetFormulaireJoueurChangement();
    };
  };

  // Fonction pour réinitialiser le formulaire changements
  function resetFormulaireJoueurChangement() {
    document.getElementById("formulairePlayer").reset();
    const btnEnregistreChangement = document.getElementById(
      "btnEnregistreChangement"
    );
    btnEnregistreChangement.style.display = "none";
  }

  // function pour enregistrer les joueurs dans local storage
  function enregistrementLocalStorage() {
    localStorage.setItem("players", JSON.stringify(donner));
    localStorage.setItem("playersChangement", JSON.stringify(donnerChangement));
  }

  btnAjoutPlayer.addEventListener("click", (e) => {
    e.preventDefault();

    if (!validationFormulaire()) return;

    if (donner.length >= 11) {
      Swal.fire({
        title: "Erreur!",
        text: "Le terrain est plein.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    const playerValue = AvoirPlayerValues();

    const verifierExistePosition = donner.some(
      (poss) => poss.position === playerValue.position
    );
    if (verifierExistePosition) {
      Swal.fire({
        title: "Erreur!",
        text: `le poste (${playerValue.position}) deja existe.`,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    donner.push(playerValue);
    enregistrementLocalStorage();
    displayPlayers();
    resetForlaireJoueur();
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

    if (donnerChangement.length >= 13) {
      alert("changement pleine");
      return;
    }

    if (!validationFormulaire()) return;

    const playerValue = AvoirPlayerValues();
    if (!playerValue) return;

    donnerChangement.push(playerValue);
    enregistrementLocalStorage();
    ChangementDisplay();
    resetFormulaireJoueurChangement();
  });

  /* function pour afficher les joueurs  dans le chagements*/
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
                            <img src="${player.photo}" alt="${player.name}" style="width: 4.5rem; height: 5rem;">
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
                                <div class="nationalite-log"><img src="${player.flag}" alt="drapeau" style="width: 1.2rem; height: 1rem;"></div>
                                <div class="club-log"><img src="${player.logo}" alt="logo club" style="width: 1.2rem; height: 1rem;"></div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deleteChangement(${index})"><em class="fas fa-trash"></em></button>
                        <button class="edit-btn" onclick="modifierCardChangement(${index})"><em class="fas fa-edit"></em></button>
                    </div>`;
      } else {
        affichageChangementplayer.innerHTML += `
                        <div class="attaquant-changement">
                        <div class="top-info-player">
                            <div class="position-player"><span>${player.position}</span></div>
                            <div class="note-player"><span>${player.rating}</span></div>
                        </div>
                        <div class="profile-attaquant-player">
                            <img src="${player.photo}" alt="badge_gold" style="width: 4.5rem; height: 5rem;">
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
                                <div class="nationalite-log"><img src="${player.flag}" alt="drapeau" style="width: 1.2rem; height: 1rem;"></div>
                                <div class="club-log"><img src="${player.logo}" alt="logo club" style="width: 1.2rem; height: 1rem;"></div>
                            </div>
                        </div>
                        <button class="delete-btn" onclick="deleteChangement(${index})"><em class="fas fa-trash"></em></button>
                        <button class="edit-btn" onclick="modifierCardChangement(${index})"><em class="fas fa-edit"></em></button>
                    </div>`;
      }
      changementContent.appendChild(affichageChangementplayer);
    });
  }

  /* function suprimer un joueur depuis changement et local storage */
  deleteChangement = function (index) {
    donnerChangement.splice(index, 1);
    enregistrementLocalStorage();
    ChangementDisplay();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Supprition avec succes",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  displayPlayers();
  ChangementDisplay();
});

/////////////////////////////////////////////////////
/////////////////// Drag end droooppp////////////////
/////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const sortableGroups = [
    ".attaquant-group",
    ".milieu-group",
    ".defenseur-group",
    ".gardient-group",
    ".changement-content",
  ];
  sortableGroups.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      new Sortable(element, {
        animation: 350,
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        group: "shared",
        swap: true,
      });
    }
  });
});
