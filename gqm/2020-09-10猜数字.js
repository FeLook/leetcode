/**
 * 猜数字
 */
const guessNumber = (question, guess) => {
  let bull = 0, cow = 0;
  let qkeep = [], gkeep = [];
  for (let i in guess) {
    if(question[i] === guess[i]) {
      bull++;
    } else {
      qkeep.push(question[i]);
      gkeep.push(guess[i]);
    }
  }
  for(let i in gkeep) {
    let index = qkeep.indexOf(gkeep[i])
    if(index !== -1) {
      cow++
      qkeep[i] = null
    }
  }
  return `${bull}A${cow}B`
}


console.log(guessNumber('1807', '7810'))