const print = array => array.forEach(line => console.log(line.join('')))

const picture = [
  [' ', ' ', 'a', ' ', ' '],
  [' ', 'b', ' ', 'b', ' '],
  ['c', ' ', ' ', ' ', 'c'],
  [' ', 'b', ' ', 'b', ' '],
  [' ', ' ', 'a', ' ', ' ']
]

print(picture)

print(doSomeStuff("c"))

function doSomeStuff(letter) {
  const a = 97
  const z = 122
  const abc = []

  for (let i = a; i <= z; i++)
    abc.push(String.fromCharCode(i))

  const letterIndex = abc.indexOf(letter)
  const size = letterIndex * 2 + 1

  const lines = []

  for (let i = 0; i < size; i++) {
    const rowLetterCode = i > letterIndex ? a + size - i - 1 : a + i
    const rowLetter = String.fromCharCode(rowLetterCode)

    const line = []

    for (let j = 0; j < size; j++) {
      line.push(rowLetter)
    }

    lines.push(line)
  }

  return lines
}
