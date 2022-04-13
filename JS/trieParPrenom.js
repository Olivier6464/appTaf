let trieParPrenom = () => {
  let patients = lectureListe();
  patients.sort((a, b) => {
      return a.prenom.localeCompare(b.prenom);
  });
  return patients;
}