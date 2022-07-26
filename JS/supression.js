function supression() {
  const sup = document.querySelectorAll("div.supprimer");
  let patients = lectureListe();
  for (let sub of sup) {
    sub.addEventListener("click", function (e) {
      let result = patients.filter((el) => el.id != e.target.id);
      sauveListe(result);
      afficheListe(trieParChambre);
    });
  }
}

supression();
