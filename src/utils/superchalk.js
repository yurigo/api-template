import chalk from "chalk";

chalk.rainbow = (text) => {
  if (text === undefined) {
    return chalk.rainbow("*****");
  }

  const letters = text.split("");
  const colors = [
    "#8648a3",
    "#25AEE4",
    "#53DD3B",
    "#FFEB11",
    "#FF7B20",
    "#FE1416",
  ];
  return letters
    .map((letter, index) => {
      const color = colors[index % colors.length];
      return chalk.hex(color)(letter);
    })
    .join("");
};

chalk.wobniar = (text) => {
  if (text === undefined) {
    return chalk.wobniar("*****");
  }
  const letters = text.split("");
  const colors = [
    "#FE1416",
    "#FF7B20",
    "#FFEB11",
    "#53DD3B",
    "#25AEE4",
    "#8648a3",
  ];
  return letters
    .map((letter, index) => {
      const color = colors[index % colors.length];
      return chalk.hex(color)(letter);
    })
    .join("");
};

export default chalk;
