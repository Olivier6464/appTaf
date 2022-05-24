/**
 * storeAndCheck appelé dans affichage rentre le patient lors du bilan
 * @param {int} chambre
 * @param {string} nom
 * @param {string} prenom
 * @param {string} entree
 * @param {int} civilite 1 pour H, 0 pour F
 */

function storeAndCheck(chambre, civilite, nom, prenom, entree) {
  //on recup les donnees du patient
  let lachambre = chambre.value;
  let lenom = majFirst(nom.value);
  let leprenom = majFirst(prenom.value);
  let ladateEntre = entree.value;
  let gender = civilite === "Madame" ? 0 : 1;
  //on créer l'objet
  const patient = new Object();

  patient.chambre = parseInt(lachambre);
  patient.name = lenom;
  patient.prenom = leprenom;
  patient.dateEntre = ladateEntre;
  patient.id = uuidv4();
  patient.gender = gender;

  console.log(patient);

  // cas ou rien est en place
  if (localStorage.getItem("liste") == null) {
    let patients = [];
    patients.push(patient);
    let chPatients = JSON.stringify(patients);
    localStorage.setItem("liste", chPatients);
  } else {
    let chPatients = localStorage.getItem("liste");
    let patients = JSON.parse(chPatients);
    let index = patients.findIndex(
      (patient) => patient.name == nom && patient.prenom == prenom
    );
    // index trouvé donc patient déja dans list on change la date d'arrivée
    if (index != -1) {
      patients[index].dateEntre = ladateEntre;
    } else {
      patients.push(patient);
    }
    //on restreint la longueur du tableau
    while (patients.length > 40) {
      patients.splice(0, 1);
    }
    console.log(patients);
    chPatients = JSON.stringify(patients);
    localStorage.setItem("liste", chPatients);
  }
}
