function rmNastyChars(ch) {
  ch = ch.replaceAll("'", " ");
  ch = ch.replaceAll(/[:()"]/g, "");
  ch = ch.replaceAll(/(^ +)/gm, "");
  ch = ch.replaceAll(/^> +/gm, "- ");
  ch = ch.replaceAll(/^>./gm, "- ");
  ch = ch.replaceAll(/^(=> +)/gm, "- ");
  ch = ch.replaceAll(/^(=>.)/gm, "- ");
  ch = ch.replaceAll(/^(\* +)/gm, "- ");
  ch = ch.replaceAll(/^(\*.)/gm, "- ");
  ch = ch.replaceAll(/(?!^)-/gm, "_");
  // lignes vides en double
  ch = ch.replaceAll(/\n\n+/g, "\n\n");
  return ch;
}
