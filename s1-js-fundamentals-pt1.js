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

//
