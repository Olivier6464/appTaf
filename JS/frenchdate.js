function frenchdate(strDate) {
  const ch = strDate.split("-").reverse().join("/");
  return ch;
}