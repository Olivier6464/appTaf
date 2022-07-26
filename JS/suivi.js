function lectureListe() {
  let donnee = localStorage.getItem("liste");
  return JSON.parse(donnee);
}

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
      <label class="suivi"><span>${elem.name} ${elem.prenom}</span></label> <textarea  id=${elem.id} class="letext suivi"></textarea>
      </div>`
    );
  });
}

// afficheListeSuivis();

// on ajoute e listener
document.querySelectorAll("textarea").forEach((elem) =>
  elem.addEventListener("input", (e) => {
    let a = elem.getAttribute("id");
    let text = elem.value;
    console.log("id", a);
    console.log("texte", text);
  })
);
