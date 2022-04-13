let trieParChambre = () => {
  let patients = lectureListe();
  patients.sort((a, b) => {
    return a.chambre - b.chambre;
  });
  return patients;
}