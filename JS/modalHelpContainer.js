const modalHelpContainer = document.querySelector(".modalhelp-container");
const modalTriggers = document.querySelectorAll(".modalhelp-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModalHelp));

function toggleModalHelp() {    
  modalHelpContainer.classList.toggle("active");
}