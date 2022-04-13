function testNum(champ) {
  var reg = /^\d+$/;
  if (reg.exec(champ) == null) {
    return false;
  } else return true;
}

// test(champ) && chExist(champ)
// crypto js
