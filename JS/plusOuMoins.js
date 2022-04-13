const plus1j = () => {
  const plus = document.querySelector(".plus1j");
  plus.addEventListener("click", () => {
    let date = document.getElementById("entree").valueAsDate;
    date.setDate(date.getDate() + 1);
    document.getElementById("entree").valueAsDate = date;
  });
};

const moins1j = () => {
  const moins = document.querySelector(".moins1j");
  moins.addEventListener("click", () => {
    let date = document.getElementById("entree").valueAsDate;
    date.setDate(date.getDate() - 1);
    document.getElementById("entree").valueAsDate = date;
  });
};

plus1j();
moins1j();
