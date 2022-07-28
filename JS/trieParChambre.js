let trieParChambre = () => {
  let patients = lectureListe();
  if (patients) {
    patients.sort((a, b) => {
      return a.chambre - b.chambre;
    });
    return patients;
  }
  return patients;
};
