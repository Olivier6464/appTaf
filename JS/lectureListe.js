function lectureListe() {
  let chPatients = localStorage.getItem("liste");
  return JSON.parse(chPatients);
}