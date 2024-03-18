function supression() {
  const sup = document.querySelectorAll("div.supprimer");
  const patients = JSON.parse(localStorage.getItem("liste"));

  for (let sub of sup) {
    sub.addEventListener("click", function (e) {
        const restants = patients.filter((el) => {return (el.id != e.target.id)  ;});
        localStorage.setItem("liste", JSON.stringify(restants));
        afficheListe();
    });
  }
}

