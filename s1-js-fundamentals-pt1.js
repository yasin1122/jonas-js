// Lecture Assignments
// Values and Variables
const country = 'USA'
const continent = 'North America'
let population = 300 // in millions
console.log(country, continent, population)

// Data Types
const isIsland = false
let language
console.log(typeof isIsland, typeof population, typeof country, typeof language)

// let, const and var
language = 'English'

// Basic Operators
console.log(population + 1)

// Strings and Template Literals
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`

// Taking Decisions: if / else Statements
console.log(
  population > 33
    ? `${country}'s population is above average.`
    : `${country}'s population is ${33 - population} million below average.`
)

// Type Coversion and Coercion
console.log('9' - '5') // 4
console.log('19' - '13' + '17') // 617
console.log('19' - '13' + 17) // 23
console.log('123' < 57) // false
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143

// Equality Operators: == vs. ===
let numNeighbors = Math.floor(Math.random() * 10) + 1
console.log(numNeighbors === 1 ? 'Only 1 border!' : 'More than 1 border.')

// Logical Operators
if (language === 'English' && population > 50 && !isIsland) {
  console.log('You should live in USA!')
} else {
  console.log('You should not live in USA.')
}
