import * as ReadLine from "readline";
import { shineBrightLikeADiamond } from './diamond/diamond.js';

const readline = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const diamond = () => {
  readline.question(`Choose your weapon [a-zA-Z]: `, letter => {
    console.log(`You have chosen: ${letter}!`)
    readline.close()

    shineBrightLikeADiamond(letter)
  })
}

const katas = {
  "1" : [ "Diamond", diamond ]
}

for (let i in katas)
  console.log(`${i} -> ${katas[i][0]}`)

readline.question(`Choose a Kata (${Object.keys(katas).join(", ")}): `, option => {
  katas[option][1]()
})
