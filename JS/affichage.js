function affichage() {
  // storeAndCheck();
  let bil = "";
  const esp = " ";
  const rtl = "\n";
  const egal = "=";

  // <--donnees a tester-->
  let chambre = document.getElementById("chambre");
  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let entree = document.getElementById("entree");
  let remarques = document.getElementById("remarques").value;
  let civilite = document.getElementById("civilite").value;
  /**
   * on met tous les tous de validité
   */
  if (emptyField(chambre)) {
    return;
  }
  if (notANumber(chambre)) {
    return;
  }
  if (chambreExistPas(chambre)) {
    return;
  }
  if (emptyField(nom)) {
    return;
  }
  if (emptyField(prenom)) {
    return;
  }

  let cote = null; // cote
  /* les chaines les plus longues de chaque rubrique expl: fonctionnelle */
  const marche = "Marche (périmètre, aides techniques ...): ";
  const lplfonc = marche.length;
  const assis = "Équilibre assis: ";
  const debout = "Équilibre debout: ";
  const transferts = "Transferts (lit vers fauteuil): ";
  const doubletache = "Double tâche: ";
  const oedeme = "Oedème: ";
  const hematome = "Hématome: ";
  const inflamation = "Inflammation: ";
  const amyotrophie = "Amyotrophie: ";
  const mobilisation = "A la mobilisation: ";
  const repos = "Au repos:";
  const lpldoul = mobilisation.length;

  // bil += spacer.box("Bilan Kinésithérapique",fois);
  bil +=
    civilite +
    esp +
    nom.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    ) +
    esp +
    prenom.value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    ) +
    esp +
    "CH: " +
    chambre.value;

  cote = document.getElementById("cote").value;
  cote = cote.toUpperCase();
  const regex = /^[0-9]+$/;
  if (civilite === "Madame") {
    bil += rtl + "Entrée le " + frenchdate(entree.value);
  } else {
    bil += rtl + "Entré le " + frenchdate(entree.value);
  }
  if (document.getElementById("anamnese").value !== "") {
    bil += rtl + rtl + `======= Anamnèse  =======`;
    bil += rtl + rtl + document.getElementById("anamnese").value;
  }

  if (document.getElementById("histoire").value !== "") {
    bil += rtl + rtl + `======= Histoire de la maladie  =======`;
    bil += rtl + rtl + document.getElementById("histoire").value;
  }
  if (document.getElementById("modeDeVie").value !== "") {
    bil += rtl + rtl + `======= Mode de vie  =======`;
    bil += rtl + rtl + document.getElementById("modeDeVie").value;
  }
  if (document.getElementById("atcd").value !== "") {
    bil += rtl + rtl + `======= Antécédants  =======`;
    bil += rtl + rtl + document.getElementById("atcd").value;
  }
  bil +=
    rtl +
    rtl +
    `======= Prescription médicale  =======` +
    rtl +
    rtl +
    document.getElementById("pec").value;
  if (document.getElementById("operation").value !== "") {
    bil +=
      rtl +
      rtl +
      "Date de l'opération: " +
      frenchdate(document.getElementById("operation").value) +
      rtl;
  }
  if (document.getElementById("appui").value !== "") {
    bil +=
      rtl +
      "Appui ( total/limité/sans appui ): " +
      document.getElementById("appui").value;
  }
  if (document.getElementById("immobilisation").value !== "") {
    bil +=
      rtl +
      rtl +
      "Immobilisation (plâtre/attelle...): " +
      document.getElementById("immobilisation").value;
  }
  bil += rtl + spacer.box(" Cotation de la Douleur EVS", egal);
  bil += rtl + "Échelle de 0 à 4.";
  bil +=
    rtl +
    " 0 = pas de douleur, 1 = faible, 2 = moyenne, 3 = forte, 4 = très forte." +
    rtl;
  bil +=
    rtl +
    repos +
    spacer.line(lpldoul - repos.length + 3, ".") +
    " " +
    document.getElementById("douleurRepos").value +
    "/4";
  bil +=
    rtl +
    mobilisation +
    " " +
    document.getElementById("douleurMob").value +
    "/4";
  bil += rtl + "Type: " + getSelectionsListe("typeDouleur");
  bil += rtl + "Localisation: " + document.getElementById("localisation").value;
  bil += rtl + spacer.box("Fonctionnel", egal);
  bil +=
    rtl +
    assis +
    spacer.line(lplfonc - assis.length + 5, ".") +
    " " +
    document.getElementById("assis").value;
  bil +=
    rtl +
    debout +
    spacer.line(lplfonc - debout.length, ".") +
    spacer.line(2, ".") +
    " " +
    document.getElementById("debout").value;
  bil +=
    rtl +
    transferts +
    spacer.line(lplfonc - transferts.length, ".") +
    " " +
    document.getElementById("transferts").value;
  bil +=
    rtl +
    doubletache +
    spacer.line(lplfonc - doubletache.length + 1, ".") +
    spacer.line(3, ".") +
    " " +
    document.getElementById("doubleTache").value;
  bil +=
    rtl + rtl + "Autonomie AVJ: " + document.getElementById("autonomie").value;
  bil += rtl + rtl + marche + document.getElementById("marche").value;
  bil += rtl + spacer.box("Trophicité", egal);
  bil +=
    rtl +
    oedeme +
    spacer.line(lplfonc - oedeme.length + 4, ".") +
    " " +
    document.getElementById("oedeme").value;
  bil +=
    rtl +
    hematome +
    spacer.line(lplfonc - hematome.length, ".") +
    spacer.line(2, ".") +
    " " +
    document.getElementById("hematome").value;
  bil +=
    rtl +
    amyotrophie +
    spacer.line(lplfonc - amyotrophie.length + 1, ".") +
    " " +
    document.getElementById("amyotrophie").value;
  bil +=
    rtl +
    inflamation +
    spacer.line(lplfonc - inflamation.length + 1, ".") +
    " " +
    document.getElementById("inflamation").value;
  if (remarques !== "") {
    bil += rtl + rtl + "A noter: " + rtl + remarques;
  }
  if (document.getElementById("attitudeVicieuse").value !== "") {
    bil += rtl + spacer.box("Articulaire", egal);
    bil +=
      rtl +
      "Attitude vicieuse: " +
      document.getElementById("attitudeVicieuse").value;
    bil += rtl + "Amplitude: " + document.getElementById("amplitude").value;
  }
  bil += rtl + spacer.box("Musculaire", egal);
  bil +=
    rtl +
    "Verrouillage quadriceps: " +
    rtl +
    document.getElementById("verrouillage").value;
  bil +=
    rtl +
    rtl +
    "Autres groupes musculaires: " +
    document.getElementById("autres").value;
  bil +=
    rtl +
    spacer.box(" Fonctions Supérieures", egal) +
    rtl +
    document.getElementById("fonctionsSuperieures").value;
  if (document.getElementById("fonctionsRespiratoires").value !== "") {
    bil +=
      rtl +
      spacer.box(" Fonctions Respiratoires", egal) +
      rtl +
      document.getElementById("fonctionsRespiratoires").value;
  }
  bil +=
    rtl +
    spacer.box(
      " Projet kiné du patient (attentes et besoins du patient)",
      egal
    ) +
    rtl +
    document.getElementById("projetKine").value;
  bil +=
    rtl +
    spacer.box(" Objectifs et prise en charge", egal) +
    rtl +
    document.getElementById("priseEnChargePrev").value;
  bil = rmNastyChars(bil);

  let toCopy = document.getElementById("to-copy");
  toCopy.value = bil;
  toCopy.select();
  navigator.clipboard.writeText(toCopy.value);
  const modal = document.getElementById("modal");
  modal.classList.add("show");
  disableScrolling();

  function modalClosePerKey(e) {
    if (e.key === "Escape") {
      const theCopy = document.getElementById("to-copy");
      let toCopy = document.getElementById("to-copy");
      toCopy.select();
      navigator.clipboard.writeText(toCopy.value);

      // navigator.clipboard.writeText(theCopy.value);
      document.removeEventListener("keyup", modalClosePerKey);
      modal.classList.remove("show");
      enableScrolling();
    }
  }

  document.addEventListener("keyup", modalClosePerKey);

  // fermeture de la modale
  const modalClose = document.querySelectorAll("[data-dismiss=dialog]");

  for (let close of modalClose) {
    close.addEventListener("click", () => {
      modal.classList.remove("show");
      enableScrolling();
    });
    // copie du texte de la modale dans le clipboard
    const btnCopy = document.getElementById("to-copy");

    btnCopy.addEventListener("click", () => {
      navigator.clipboard.writeText(toCopy.value);
    });
  }

  modal.addEventListener("click", function () {
    enableScrolling();
    this.classList.remove("show");
  });

  // on stop la propagation vers le bas
  modal.children[0].addEventListener("click", function (e) {
    e.stopPropagation();
  });

  storeAndCheck(chambre, nom, prenom, entree);
}
