function trieParNom() {
  let patients = lectureListe();
  patients.sort( ( a, b ) => {
    return a.name.localeCompare( b.name );
  } );
  return patients;
}