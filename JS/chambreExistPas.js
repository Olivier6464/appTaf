const chambreExistPas = (chambre) => {
  const s5 = [
    101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127,
  ];
  const s6 = [
    102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130,
    132,
  ];
  const s7 = [
    201, 203, 205, 207, 209, 211, 213, 215, 217, 219, 221, 223, 225, 227,
  ];
  const s8 = [
    202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228,
  ];
  const chambres = [...s5, ...s6, ...s7, ...s8];
  let bool = chambres.includes(parseInt(chambre.value));
  if (bool === false) {
    chambre.classList.add("alert");
    chambre.style.backgroundColor = "#ffaaee";
    alert(`${chambre.value} n'est pas un numéro de chambre existant !!!`);
    chambre.focus();
    return true;
  }
};
