const emptyField = (nom) => {
  if (!nom.value) {
    nom.classList.add("alert");
    nom.style.backgroundColor = "#ffaaee";
    nom.placeholder = "champ requis !";
    nom.focus();
    return true;
  } else return false;
};
