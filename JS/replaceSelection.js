function replaceSelection(idfield, idoption) {
  const d = document.getElementById(idoption);
  const elem = document.getElementById(idfield);

  function listenKeyUpOnOptions(e) {
    e.preventDefault();
    if (e.code === "Space" || e.code === "Enter") {
      let word = d.options[d.selectedIndex].value;
      document.getElementById(idoption).size = 1;
      word = word.replace(/\s\s+/g, " ");
      const from = elem.selectionStart;
      const to = elem.selectionEnd;
      elem.value = elem.value.slice(0, from) + word + elem.value.slice(to);
      elem.selectionStart = from + word.length;
      elem.selectionEnd = from + word.length;
      document.getElementById(idoption).selectedIndex = 0;
      elem.focus();
      d.removeEventListener("keyup", listenClickOnOptions);
    }
  }

  d.addEventListener("keyup", listenKeyUpOnOptions, false);

  function listenClickOnOptions(e) {
    e.preventDefault();
    let word = d.options[d.selectedIndex].value;
    document.getElementById(idoption).size = 1;
    word = word.replace(/\s\s+/g, " ");
    const from = elem.selectionStart;
    const to = elem.selectionEnd;
    elem.value = elem.value.slice(0, from) + word + elem.value.slice(to);
    elem.selectionStart = from + word.length;
    elem.selectionEnd = from + word.length;
    document.getElementById(idoption).selectedIndex = 0;
    elem.focus();
    d.removeEventListener("click", listenClickOnOptions);
  }

  d.addEventListener("click", listenClickOnOptions, false);
}
