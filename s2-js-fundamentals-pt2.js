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
