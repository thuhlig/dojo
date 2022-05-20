const a = "a".charCodeAt(0) // 97
const A = "A".charCodeAt(0) // 65

const shineBrightLikeADiamond = (letter) => {
  validateInput(letter)

  const end = letter.charCodeAt(0)
  const begin = end < a ? A : a
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

  print(lines)
}

const validateInput = (letter) => {
  if (letter === undefined)
    throw new Error("Letter ist undefined!")

  if (!letter.match("^[a-zA-Z]$"))
    throw new Error(`Just one letter ffs (${letter})!`)
}

const print = array => array.forEach(line => console.log(line.join('')))

export {shineBrightLikeADiamond}
