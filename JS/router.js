const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  gestionLocation();
};
//marche en local
// const routes = {
//   404 : "/pages/404.html",
//   "/" : "/index.html",
//   "/actes" : "/pages/actes/actes.html",
//   "/suivis" : "/pages/suivis/suivis.html"
// }

// sur github
const routes = {
  404: "https://olivier6464.github.io/appTaf/pages/404.html",
  "/": "https://olivier6464.github.io/appTaf/index.html",
  "/actes": "https://olivier6464.github.io/appTaf/pages/actes/actes.html",
  "/suivis": "https://olivier6464.github.io/appTaf/pages/suivis/suivis.html",
};

const gestionLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("app").innerHTML = html;
};

window.onpopstate = gestionLocation;
window.route = route;
// gestionLocation();
