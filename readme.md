# ⚽ FUT Champions Web App - Ultimate Team 🏆

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

> **Une application interactive pour construire votre équipe FUT Ultimate Team avec une expérience utilisateur intuitive.**

---

## 📜 Contexte du projet

Cette application permet aux utilisateurs de construire leur équipe FUT (Ultimate Team) en ajoutant, positionnant et modifiant les joueurs tout en respectant les formations tactiques comme 4-4-2 ou 4-3-3. L'accent est mis sur une expérience interactive avec des formulaires dynamiques, la gestion des données via `localStorage`, et une interface interactive.

---

## 🏆 Fonctionnalités Clés

### 1. **Intégration UI et Ajout Dynamique des joueurs**  
- Formulaire permettant l'ajout de joueurs avec des champs pour le nom, la position, la note, les statistiques et d'autres détails pertinents.
- Application des positions adaptées à chaque joueur selon la formation choisie (ex. 4-3-3 ou 4-4-2).

### 2. **Positionnement des Joueurs Selon la Formation Tactique**  
- Formation 4-3-3 :  
  - 1 GK, 2 CB (Défenseurs centraux), 1 LB (Latéral gauche), 1 RB (Latéral droit),  
  - 3 CM (Milieux centraux), 1 LW (Ailier gauche), 1 RW (Ailier droit), 1 ST (Attaquant central).
  
- Formation 4-4-2 :  
  - 1 GK, 2 CB, 1 LB, 1 RB, 2 CM (Milieux centraux), 1 RM (Milieu droit),  
  - 1 LM (Milieu gauche), 2 ST (Attaquants).

- Adaptation automatique de la position des joueurs en fonction de la formation choisie.

### 3. **Gestion des Cartes de Joueurs**  
- Ajout, modification et suppression des cartes de joueurs via une interface UI.
- Limitation stricte à 11 joueurs dans la formation principale ; les joueurs restants sont réservés pour les changements.

### 4. **Formulaires Dynamiques pour la Gestion des Joueurs**  
- Permettre l'ajout ou la suppression de joueurs tout en respectant les règles des formations tactiques (maximum 11 joueurs pour la formation principale, les autres étant réservistes).

### 5. **Validation des Champs des Formulaires**  
- Validation de tous les champs de saisie pour les joueurs, tels que le nom, la position et la note, pour garantir la cohérence des données.
- Application de validations natives pour garantir l'exactitude des informations saisies.

### 6. **Responsive Design**  
- L'interface de l'application s'adapte aux différentes tailles d'écran (laptop, tablette, mobile).
- Ajustement dynamique du positionnement et de l'affichage des joueurs pour garantir une expérience utilisateur optimale quel que soit l'appareil utilisé.

---

## ⚙️ Technologies Requises

- **HTML**  
- **CSS** (natif ou framework: Tailwind CSS, Bootstrap)  
- **JavaScript Vanilla** (DOM natif)

---

## 👥 **User Stories**

### 1. Création d'une équipe de 11 joueurs  
- En tant qu'utilisateur, je souhaite pouvoir ajouter des joueurs à ma formation via un formulaire dynamique, avec un maximum de 11 joueurs sélectionnés pour garantir une structure d'équipe conforme.
- **Critères d'acceptation** :  
  - Je peux ajouter un joueur à partir d'un formulaire dynamique comprenant les champs nécessaires (nom, position, statistiques).  
  - Je peux modifier ou supprimer les joueurs ajoutés.  
  - Le formulaire vérifie la validité des données saisies.

### 2. Adaptation de la formation choisie (ex : 4-3-3 ou 4-4-2)  
- En tant qu'utilisateur, je souhaite pouvoir changer la formation de mon équipe et voir les positions des joueurs ajustées en conséquence.
- **Critères d'acceptation** :  
  - Je peux choisir entre les formations prédéfinies (e.g., 4-4-2, 4-3-3).  
  - Le positionnement des joueurs est automatiquement mis à jour pour s'adapter à la formation choisie.  
  - Seuls les postes valides pour la formation sont disponibles pour chaque joueur.

### 3. Calcul du score de Chimie  
- En tant qu'utilisateur, je souhaite voir le score de "chimie" de mon équipe calculé et affiché en fonction des relations entre les joueurs pour optimiser la composition de mon équipe.
- **Critères d'acceptation** :  
  - Le score de chimie est mis à jour dynamiquement selon les joueurs sélectionnés et leur compatibilité.  
  - Des liaisons fortes/faibles sont mises en évidence visuellement.

### 4. Sauvegarde et Récupération des Données  
- En tant qu'utilisateur, je souhaite que mes données de formation et d'équipe soient sauvegardées automatiquement pour pouvoir les récupérer plus tard.
- **Critères d'acceptation** :  
  - Les données sont stockées localement.  
  - La récupération des données se fait lors du chargement de l'application.

### 5. Formulaire Dynamique pour les Joueurs  
- En tant qu'utilisateur, je souhaite pouvoir ajouter dynamiquement de nouveaux joueurs au sein de l'interface.
- **Critères d'acceptation** :  
  - Un formulaire dynamique permet de créer de nouveaux joueurs.  
  - L'interface ajuste les positions et le nombre de joueurs.

---

## 🚀 **Installation et Utilisation**

### 1️⃣ **Cloner le repository**

```bash
git clone https://github.com/MouadHallaffou/FUT-Champions-Web-App-Ultimate-Team.git
cd FUT-Champions-Web-App-Ultimate-Team
