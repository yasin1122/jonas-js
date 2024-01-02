// Lecture Assignments
// Functions
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}
const unitedStates = describeCountry('United States', 300, 'Washington DC')
const turkey = describeCountry('Turkey', 80, 'Ankara')
const india = describeCountry('India', 1400, 'New Delhi')
console.log(`  ${unitedStates}
  ${turkey}
  ${india}`)

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return population / 79
}
const percentageOfWorld2 = function (population) {
  return population / 79
}

const unitedStatesPopulation = percentageOfWorld1(300)
const turkeyPopulation = percentageOfWorld1(80)
const indiaPopulation = percentageOfWorld1(1400)
console.log(unitedStatesPopulation, turkeyPopulation, indiaPopulation)

// Arrow Functions
const percentageOfWorld3 = population => population / 79
console.log(percentageOfWorld3(300))

// Functions Calling Other Functions
const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  ).toFixed(2)}% of the World.`
}
console.log(describePopulation('United States', 300))

// Introduction to Arrays
const populations = [300, 80, 1400, 40]
console.log(populations.length === 4)
const percentages = []
for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]).toFixed(2))
}

// Basic Array Operations (Methods)
const neighbors = ['Canada', 'Mexico', 'Cuba']
neighbors.push('Utopia')
neighbors.pop()
console.log(neighbors)
console.log(neighbors.includes('Germany') ? 'In Europe' : 'Not in Europe')
neighbors[neighbors.indexOf('Cuba')] = 'Bahamas'
console.log(neighbors)

// Introduction to Objects
const myCountry = {
  country: 'United States',
  capital: 'Washington DC',
  language: 'English',
  population: 300,
  neighbors: ['Canada', 'Mexico', 'Cuba']
}

// Dot vs. Bracket Notation
myCountry.population += 2
myCountry['population'] -= 2
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
)

// Object Methods
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
  )
}
myCountry.describe()
myCountry.checkIsIsland = function () {
  this.isIsland = neighbors.length > 0 ? false : true
  // Even simpler version (see why this works...)
  // this.isIsland = !Boolean(this.neighbours.length);
}

// Iteration: The for Loop
for (let i = 1; i <= 5; i++) {
  console.log(`Voter number ${i} is voting.`)
}

// Looping Arrays, Breaking and Continuing
console.log(percentages)

// Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
]
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Country ${i + 1} Neighbor: ${listOfNeighbours[i][j]}`)
  }
}

// The while Loop
const percentages3 = []
let whileCounter = 0
while (whileCounter < populations.length) {
  percentages3.push(percentageOfWorld1(populations[whileCounter]).toFixed(2))
  whileCounter++
}
console.log(percentages3)
