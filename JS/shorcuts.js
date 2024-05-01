function shorcuts() {
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "b" && e.ctrlKey) {
            e.preventDefault();
            listeToogle();
        }
        else if (e.key === "F1") {
            e.preventDefault();
            toggleModalHelp();
        }
        else if (e.key.toLowerCase() === "k" && e.ctrlKey) {
            e.preventDefault();
            if (window.confirm("Voulez vous vraiment effacer la liste des patients")) {
                localStorage.removeItem("liste");
            }
        }
    });
}

shorcuts();
