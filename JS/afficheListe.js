/**
 *
 * @param {*} functrie
 * on passe la fonction qui extrait la liste du localstorage
 * et renvoi le tableau
 */
function afficheListe() {
  localStorage.length;
  let patients = trieParChambre();
  console.log(patients);
  let tableau = document.querySelector("#tableau");

  tableau.classList.add(".tableau");
  // vide le tableau du DOM
  let tr = document.querySelectorAll("tr");

  tr.forEach((element) => {
    element.parentNode.removeChild(element);
  });
  tableau.insertAdjacentHTML(
    "beforeend",
    `<tr>
        <td onclick="afficheListe(trieParChambre)"class="itemTab"><div align="center">Chambre</div></td>
        <td onclick="afficheListe(trieParNom)" class="itemTab"><div align="center">Nom</div></td>
        <td onclick="afficheListe(trieParPrenom)" class="itemTab"><div align="center">Prénom</div></td>
        <td onclick="afficheListe(trieParNbJours)" class="itemTab"><div align="center">nbJours</div></td>
        <td onclick="afficheListe(trieParEntree)" class="itemTab"><div align="center">Début</div></td>
        <td class="itemTab"><div align="center">Pid</div></td>
        
      </tr>`
  );

  let classe = "";
  if (patients[0] !== null) {
    patients.forEach((elem) => {
      let dateEntree = elem.dateEntre;
      let strNowDate = dateDuJour();
      let days = datediff(parseDate(dateEntree), parseDate(strNowDate));
      elem.jourspresents = days;

      /**
       * on affiche la liste dans le tableau 33CC33 CCFF99
       */
      classe === "fonce" ? (classe = "claire") : (classe = "fonce");

      tableau.insertAdjacentHTML(
        "beforeend",
        `
   <tr class=${classe}>
   <td><div align="center"> ${elem.chambre}<div></td>
   <td><div align="center">${elem.name}<div></td>
   <td><div align="center">${elem.prenom}<div></td>
   <td><div align="center">${days}<div></td>
   <td><div align="center">${elem.dateEntre}<div></td>
   <td><div align="center">${elem.id}<div></td>
   <td> <div class="supprimer" id=${elem.id} align="center"><i class="fa fa-trash" aria-hidden="true"></i>
   </div> </td>
   <td class="itemTab"><i class="fa fa-save"></i></td>
   </tr>
   `
      );
    });
  }
  supression();
  // gere les evenements de suppressions
  scroll(50, 0);
}

tableau.style.display = "none";
afficheListe(trieParChambre);
