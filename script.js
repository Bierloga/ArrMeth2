//Assigment A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const isSpidey = (superheroes) => {
    return superheroes.name === "Spiderman";
}

const findSpiderMan = (array) => {
    return array.find(isSpidey)
}
console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//Assignment B
const doubleArrayValues = (array) => {
    array.forEach(Doubler)
}

const Doubler = (item) => {
    console.log([item * 2])
}

doubleArrayValues([1, 2, 3])
// result should be [2, 4, 6]

//Assignment C

const numberChecker = (item) => {
    if (item > 10) {
        return true
    } else return false
}
const containsNumberBiggerThan10 = (array) => {
    console.log(array.some(numberChecker))
}
containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
// result should be true
containsNumberBiggerThan10([1, 2, 1, 2, 1, 2])
// result should be false

//Assignment D

const isItalyInTheGreat7 = (array) => {
    console.log(array.includes('Italy'))
}
isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'])
// result should be true

//Assignment E

const multiplier = (item) => {
    return ([item * 10])
}

const tenfold = (array) => {
    array.forEach(multiplier)
}


console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//Assignment F

const checker = (item) => {
    return item < 100
}
const isBelow100 = (array) => {
    return array.every(checker)
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

//Assigment G

// const sum = [1, 2, 3].reduce(add, 0); // with initial value to avoid when the array is empty

// function add(accumulator, a) {
//   return accumulator + a;
// }

// console.log(sum); // 6
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const bigSum = (array) => {
    return array.reduce(reducer)
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118