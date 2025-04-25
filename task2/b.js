const colors=['red','blue','green','yellow','purple','orange'];
const [firstColor, secondColor, ...restColors] = colors;
console.log(firstColor);

const [main, ...rest] = colors
console.log(main)
console.log(rest)