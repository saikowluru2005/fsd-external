const newSymbol=Symbol('Hello')

const obj={
    [newSymbol]:'Hello World',
}
// console.log(newSymbol)
console.log(obj[newSymbol])