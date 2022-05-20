const drawDiamond = (letter) => {
  const a = 97
  const z = 122

  const chars = []

  for (let i = a; i <= letter.charCodeAt(0); i++)
    chars.push(String.fromCharCode(i))

  for (let i = 0; i < chars.length; i++) {
    console.log(buildLine(chars, i))
  }
}

const buildLine = (chars, i) => {
  let line = ``

  for (let j = 0; j < chars.length - i - 1; j++)
    line = `${line}.`

  line = `${line}${chars[i]}`

  return line
}

drawDiamond('c')

// letter ascii - a ascii + letter +  letter ascii - ascii
// 99           - 97      + a         99 -         - 97
//
// // ..a..
// // .b.b.
// // c...c
// // .b.b.
// // ..a..
//
// zweidimensionales array (pos und pos *-1)
