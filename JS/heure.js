function heure() {
  var h = new Date();
  document.getElementById("temps").innerHTML =
    (h.getHours() < 10 ? "0" + h.getHours() : h.getHours()) +
    ":" +
    (h.getMinutes() < 10 ? "0" + h.getMinutes() : h.getMinutes()) +
    ":" +
    (h.getSeconds() < 10 ? "0" + h.getSeconds() : h.getSeconds());
  setTimeout(heure, 1000);
}

heure();

