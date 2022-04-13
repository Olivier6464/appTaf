/**
 * @param {*} tableau 
 * sauve le tableau dans le localstorage 
 */
function  sauveListe(tableau){
  let chPatients = JSON.stringify(tableau);
      localStorage.setItem("liste", chPatients);
};