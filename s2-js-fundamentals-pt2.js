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
