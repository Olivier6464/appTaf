/**
 * storeAndCheck appelé dans affichage rentre le patient lors du bilan
 * @param {int} chambre
 * @param {string} nom
 * @param {string} prenom
 * @param {string} entree
 * @param {char} civilite  M F
 */

//  storeAndCheck(chambre, civilite, nom, prenom, entree, pathologie);
//  utilisé dans affichage.js

function storeAndCheck(chambre, civilite, nom, prenom, entree, pathologie) {
  //on recup les donnees du patient
  let lachambre = chambre.value;
  let gender = civilite === "Madame" ? "F" : "M";
  let lenom = majFirst(nom.value);
  let leprenom = majFirst(prenom.value);
  let dateEntre = entree.value;
  let patho = pathologie;
  //on créer l'objet
  const patient = new Object();

  patient.id = uuidv4();
  patient.chambre = parseInt(lachambre);
  patient.gender = gender;
  patient.name = lenom;
  patient.prenom = leprenom;
  patient.dateEntre = dateEntre;
  patient.patho = patho;
  patient.suivi = "";

  // cas ou rien est en place
  if (localStorage.getItem("liste") == null) {
    let patients = [];
    patients.push(patient);
    localStorage.setItem("liste", JSON.stringify(patients));
    return;
  }
  let patients = JSON.parse(localStorage.getItem("liste"));
  let index = patients.findIndex(
    (patient) => patient.name == nom && patient.prenom == prenom
  );
  // index trouvé donc patient déja dans list on change la date d'arrivée
  if (index != -1) {
    patients[index].dateEntre = dateEntre;
  } else {
    patients.push(patient);
  }
  //on restreint la longueur du tableau
  while (patients.length > 40) {
    patients.splice(0, 1);
  }
  console.log(patients);
  localStorage.setItem("liste", JSON.stringify(patients));
}
