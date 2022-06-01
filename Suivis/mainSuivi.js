function lectureListe() {
  let donnee = localStorage.getItem("liste");
  return JSON.parse(donnee);
};

let trieParChambre = () => {
  let patients = lectureListe();
  if (patients.length) {
    patients.sort((a, b) => {
      return a.chambre - b.chambre;
    });
    return patients;
  }
};

function sauveListe(tableau) {
  localStorage.setItem("liste", JSON.stringify(tableau));
}

function effaceListeSuivis() {
  const tr = document.querySelectorAll(".container-patient");
  tr.forEach((element) => {
    element.parentNode.removeChild(element);
  });
}

function afficheListeSuivis() {
  const divListeContainer = document.querySelector("#container-patients");
  localStorage.length;
  const list = trieParChambre();

  list.map((elem) => {
    divListeContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="container-patient" >
      <label><span>${elem.name} ${elem.prenom}</span></label> <textarea  id=${elem.id} class="letext"></textarea>
      </div>`
    );
  });
}

afficheListeSuivis();

// on ajoute e listener
document.querySelectorAll("textarea").forEach((elem) =>
  elem.addEventListener("input", (e) => {
    let a = elem.getAttribute("id");
    let text = elem.value;
    console.log("id", a);
    console.log("texte", text);
  })
);
