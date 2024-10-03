/**
 * this is the BoardFoot program
 *
 * By: Justin, Lavoie
 * Version: 1.0
 * Since: 2024-10-03
 */

function checkBoardFoot (width: number, height: number): number {
  // this function calculates the length of a boardFoot
  const boardFoot = 144
  const lengthInInches = boardFoot / (width * height)
  return lengthInInches
}

console.log('This program figures out the length of a wooden board that is 1 board foot in dimensions. (1 board foot is 144 cubic inches of wood.)')

// Add a line break here
console.log()

const widthString = prompt('Enter the width(inch): ')
const width = parseFloat(widthString)
const heightString = prompt('Enter the height(inch): ')
const height = parseFloat(heightString)

if (isNaN(width) || isNaN(height)) {
  console.log('Invalid Input')
} else if (width < 0 || height < 0) {
  console.log('Invalid Input')
} else {
  const lengthInInches = checkBoardFoot(width, height)
  console.log('\nLength of the board:', lengthInInches, 'inch(es) long.')
}

console.log('\nDone.')
