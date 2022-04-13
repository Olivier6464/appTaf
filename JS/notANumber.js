const notANumber = (nom) => {
  if (isNaN(nom.value)) {
    alert (`${nom.value} n'est pas un numéro (☉｡☉) !`);
    nom.style.backgroundColor = "#ffaaee";
    nom.classList.add("alert");
    nom.focus();
    return true;
  } else return false;
};
