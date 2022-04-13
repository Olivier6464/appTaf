function shorcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "b" && e.ctrlKey) {
      listeToogle();
    } else if (e.key.toLowerCase() === "s" && e.ctrlKey) {
      e.preventDefault();
      affichage();
    }
  });
}

shorcuts();
