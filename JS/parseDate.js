function parseDate(str) {
  var mdy = str.split("-");
  return new Date(mdy[0], mdy[1] - 1, mdy[2]); //ma version
  //return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}