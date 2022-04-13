
function fdate() {
  const date = new Date();
  const nday = date.getDate() + 1 < 10 ? "0" + date.getDate() : date.getDate();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const fullYear = date.getFullYear();
  const year = fullYear - 2000;
  const laDate = nday + "/" + month + "/" + year;
  document.getElementById("laDate").innerHTML = laDate;
  // date.setDate(date.getDate() - 1);
  document.getElementById("entree").valueAsDate = date;
  
}

fdate();
