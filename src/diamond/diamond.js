'use strict'

const print = array => array.forEach(line => console.log(line.join('')))

const shineBrightLikeADiamond = (letter) => {
  const begin = "a".charCodeAt(0)
  const end = letter.charCodeAt(0)
  const abc = []

  for (let i = begin; i <= end; i++)
    abc.push(String.fromCharCode(i))

  const letterIndex = abc.indexOf(letter)
  const size = abc.length * 2 - 1

  const lines = []

  for (let i = 0; i < size; i++) {
    const rowLetter = i > letterIndex ? abc[size - i - 1] : abc[i]
    const line = []

    for (let j = 0; j < size; j++) {
      const grow = j === letterIndex - i || j === letterIndex + i
      const shrink = j === i - letterIndex || i - letterIndex === size - 1 - j

      line.push(grow || shrink ? rowLetter : " ")
    }

    lines.push(line)
  }

  return lines
}

const a = 97
const z = 122

for (let i = a; i <= z; i++)
  print(shineBrightLikeADiamond(String.fromCharCode(i)))
