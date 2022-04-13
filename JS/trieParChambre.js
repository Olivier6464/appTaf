let trieParChambre = () => {
  let patients = lectureListe();
  if (patients.length) {
    patients.sort((a, b) => {
      return a.chambre - b.chambre;
    });
    return patients;
  }
};
