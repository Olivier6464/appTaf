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
  ch = ch.replaceAll(/(\/+)/gm, "//");
  // lignes vides en double
  ch = ch.replaceAll(/\n\n+/g, "\n\n");
  return ch;
}
