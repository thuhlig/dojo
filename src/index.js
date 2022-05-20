import * as ReadLine from "readline";
import { shineBrightLikeADiamond } from './diamond/diamond.js';

const readline = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Choose your weapon [a-zA-Z]: `, letter => {
  console.log(`You have chosen: ${letter}!`);
  readline.close();

  shineBrightLikeADiamond(letter)
});
