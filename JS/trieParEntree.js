let trieParEntree = () => {
  let patients = lectureListe();
  let strNowDate = dateDuJour();
  patients.forEach((elem) => {
    let dateEntree = elem.dateEntre;
    let diff = datediff(parseDate(dateEntree), parseDate(strNowDate));
    elem.days = diff;
  });

  patients.sort((a, b) => {
    return a.days - b.days;
  });
  return patients;
};