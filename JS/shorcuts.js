function shorcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "b" && e.ctrlKey) {
      e.preventDefault();
      listeToogle();
    } else if (e.key.toLowerCase() === "s" && e.ctrlKey) {
      e.preventDefault();
      affichage();
    } else if (e.key === "F1") {
      e.preventDefault();
      toggleModalHelp();
    } else if (e.key.toLowerCase() === "p" && e.ctrlKey) {
      e.preventDefault();
      window.location.href =
        "https://olivier6464.github.io/appTaf/pages/suivis/index.html";
      // affichage();
    }
    // else if (e.key === "F3") {
    //   e.preventDefault();
    //   localStorage.removeItem("liste");
    // }
  });
}

shorcuts();
