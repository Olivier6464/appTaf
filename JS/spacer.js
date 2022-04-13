const spacer = {
  blank: function () {
    return " ";
  },

  newline: function () {
    return "\n";
  },

  line: function (length, character) {
    let s = "";
    for (let i = 0; i < length; i++) {
      s += character;
    }
    return s;
  },

  wrap: function (text, length, character) {
    let padLength = (length - text.length) / 2 - 1;
    let wrapText = character + spacer.line(padLength, " ") + text;
    wrapText += spacer.line(padLength, " ");
    return wrapText;
  },

  box: function (text, character) {
    let boxText = spacer.newline();
    let length = text.length + 38;
    if (character === "=") length = 25;
    if (character === "*") length = 40;

    boxText += spacer.line(length, character) + spacer.newline();
    boxText += spacer.wrap(text, length, character) + spacer.newline();
    boxText += spacer.line(length, character) + spacer.newline();
    return boxText;
  },
};