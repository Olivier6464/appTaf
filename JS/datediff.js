function datediff(first, second) {
  // differencce entre 2 dates en ms convertie en jours DST.
  return Math.round((second - first) / 86400000);
}