let trieParChambre = () => {
  let patients = lectureListe();
  if (patients.length >= 2) {
    patients.sort((a, b) => {
      return a.chambre - b.chambre;
    });
    return patients;
  }
  return patients;
};
