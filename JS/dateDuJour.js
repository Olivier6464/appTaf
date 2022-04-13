function dateDuJour() {
  let dateObj = new Date();
  let mois = String(dateObj.getMonth() + 1).padStart(2, "0");
  let jour = String(dateObj.getDate()).padStart(2, "0");
  let annee = dateObj.getFullYear();
  let dateDuJour = annee + "-" + mois + "-" + jour;
  return dateDuJour;
}