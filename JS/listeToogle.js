// modal2 la modale de la liste des patients

function listeToogle(){
  afficheListe(trieParChambre);
  if (modal2.style.display === "none") {
    modal2.style.display = "inline-block";
  } 
  else {
    modal2.style.display = "none";
  }
}