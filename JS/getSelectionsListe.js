function getSelectionsListe(id) {
  const liste = document.getElementById(id);
  let lsSelections = "";
  for (let i = 0; i < liste.options.length; i++) {
    if (liste.options[i].selected) {
      lsSelections += liste.options[i].value + ", ";
    }
  }
  return lsSelections;
}