function alarmJoursDePresence() {
  const patients = lectureListe();
  if (patients !== null) {
    let strNowDate = dateDuJour();
    // on selectionne les patients dans pat45[]

    patients.forEach((elem) => {
      // on calcule les jours de présence
      const days = datediff(parseDate(elem.dateEntre), parseDate(strNowDate));
      const fo = document.querySelector("#sup45");
      const node = document.createElement("DIV");
      if (days % 45 >= 40 || (days >= 45 && days % 45 <= 10)) {
        
        node.innerText =
          elem.name +
          " " +
          elem.prenom +
          " " +
          days +
          " " +
          "jours de présence.";
        fo.appendChild(node);
        node.classList.add("warning");
      }
    });
  }
}

alarmJoursDePresence();
