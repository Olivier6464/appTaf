function optionsResize() {
  const chselect = document.querySelectorAll("select");
  const seltab = Array.from(chselect);
  seltab.forEach((elem) => {
    elem.addEventListener(
      "focus",
      function (event) {
        event.target.size = elem.options.length;
      },
      false
    );
  });

  seltab.forEach((elem) =>
    elem.addEventListener(
      "blur",
      function (event) {
        event.target.size = 1;
      },
      false
    )
  );
}

optionsResize();
