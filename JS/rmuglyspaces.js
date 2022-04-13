function rmuglyspaces(id) {
  ch = document.getElementById(id).value;
  ch = ch.replace(/^\s*/gm, "");
  ch = ch.replace(/  +/g, " ");
  document.getElementById(id).value = ch;
}