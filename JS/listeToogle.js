function listeToogle(){
  afficheListe(trieParChambre);
  // tableau.style.display = "none";
  if (tableau.style.display === "none") {
    tableau.style.display = "block";
  } 
  else {
    tableau.style.display = "none";
  }
}