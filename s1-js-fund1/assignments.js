// Lecture Assignments
// Values and Variables
const country = 'USA'
const continent = 'North America'
let population = 300000000
console.log(country, continent, population)

// Data Types
const isIsland = false
let language
console.log(typeof isIsland, typeof population, typeof country, typeof language)

// let, const and var
language = 'English'

// Basic Operators
let numStr = '1988'

let age = Number(numStr) // converts to number
console.log(age + 2)
console.log('10' / 2)

console.log(`The number is ${11 % 2 === 0 ? 'even' : 'odd'}.`)

// Function declaration
function greeter(name) {
  return `Hello ${name}!`
}

// Function expression (anonymous functions)
const greeter2 = function (name) {
  return `Hello ${name}!`
}
console.log(greeter('Jordan'), greeter2('LeBron'))

const greeter3 = name => `Hello ${name}!`
const convo = name => greeter3(name) + ' How are you?'
console.log(convo('Kobe'))

const arr1 = new Array(1, 2, 3)
arr1[arr1.length] = 4
const adder = (a, b) => a + b
const arr2 = [adder(1, 2), adder(2, 3)]
console.log(arr1, arr2)

const jordan = {
  name: 'Jordan',
  number: 23,
  message: function (team) {
    return `Jordan beat the ${team}!`
  },
  message2: function () {
    return `${this.name} wears number ${this.number}.`
  }
}
console.log(jordan['message']('Hawks'))
console.log(jordan.message2())
