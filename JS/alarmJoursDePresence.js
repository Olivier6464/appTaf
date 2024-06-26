function alarmJoursDePresence() {
    const patients = lectureListe();
    const fo = document.querySelector("#sup45");

    if (patients !== null) {
        let strNowDate = dateDuJour();
        // on selectionne les patients dans pat45[]

        patients.forEach((elem) => {
            // on calcule les jours de présence
            const days = datediff(parseDate(elem.dateEntre), parseDate(strNowDate));
            if (days % 45 >= 40 || (days % 45 <= 10) && days >= 40) {
                const node = document.createElement("DIV");
                node.innerText =
                    elem.name +
                    " " +
                    elem.prenom +
                    " " +
                    days +
                    " " +
                    "jours de présence.";
                fo.appendChild(node);
                node.classList.add("warning");
            }
        });
    }
}

alarmJoursDePresence();
