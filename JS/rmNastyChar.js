function rmNastyChars(ch){
  ch = ch.replaceAll("'", " ");
  ch = ch.replaceAll(/[:()"]/g, ""); 
  // lignes vides en double
  ch = ch.replaceAll(/\n\n+/g,"\n\n");     
  return ch;
}