//import { delay } from "helpers/delay";
//import { randomBetween } from "helpers/randomBetween";

const _COMPUTER_STARTS = 1; // X
const _PLAYER_STARTS = 2; // O

export const make2 = (table: any[]): number => {
  if (table[5] === 2) {
    return 5;
  }
  if (table[2] === 2) {
    return 2;
  }
  if (table[4] === 2) {
    return 4;
  }
  if (table[6] === 2) {
    return 6;
  }
  if (table[8] === 2) {
    return 8;
  }
  return 0;
};

export const getFirstEmpty = (table: any[]): number => {
  let firstEmptyIndex: number = 0;

  for (firstEmptyIndex = 0; firstEmptyIndex < table.length; firstEmptyIndex++) {
    if (table[firstEmptyIndex] === 2) break;
  }

  return firstEmptyIndex;
};

export const canWin = (table: any[], playerID: number) => {
  let winningSpot = -1;
  if (playerID === 1) {
    // plays with x

    // check lines
    if (table[0] * table[1] * table[2] === 18) {
      winningSpot = table[0] === 2 ? 0 : table[1] === 2 ? 1 : 2;
    }

    if (table[3] * table[4] * table[5] === 18) {
      winningSpot = table[3] === 2 ? 3 : table[4] === 2 ? 4 : 5;
    }

    if (table[6] * table[7] * table[8] === 18) {
      winningSpot = table[6] === 2 ? 6 : table[7] === 2 ? 7 : 8;
    }

    // check columns
    if (table[0] * table[3] * table[6] === 18) {
      winningSpot = table[0] === 2 ? 0 : table[3] === 2 ? 3 : 6;
    }

    if (table[1] * table[4] * table[7] === 18) {
      winningSpot = table[1] === 2 ? 1 : table[2] === 2 ? 2 : 7;
    }

    if (table[2] * table[5] * table[8] === 18) {
      winningSpot = table[2] === 2 ? 2 : table[5] === 2 ? 5 : 8;
    }

    // check diagonals
    if (table[0] * table[4] * table[8] === 18) {
      winningSpot = table[0] === 2 ? 0 : table[4] === 2 ? 4 : 8;
    }

    if (table[6] * table[4] * table[2] === 18) {
      winningSpot = table[6] === 2 ? 6 : table[4] === 2 ? 4 : 2;
    }
  } else {
    // player id === 2 plays with o

    // check lines
    if (table[0] * table[1] * table[2] === 50) {
      winningSpot = table[0] === 2 ? 0 : table[1] === 2 ? 1 : 2;
    }

    if (table[3] * table[4] * table[5] === 50) {
      winningSpot = table[3] === 2 ? 3 : table[4] === 2 ? 4 : 5;
    }

    if (table[6] * table[7] * table[8] === 50) {
      winningSpot = table[6] === 2 ? 6 : table[7] === 2 ? 7 : 8;
    }

    // check columns
    if (table[0] * table[3] * table[6] === 50) {
      winningSpot = table[0] === 2 ? 0 : table[3] === 2 ? 3 : 6;
    }

    if (table[1] * table[4] * table[7] === 50) {
      winningSpot = table[1] === 2 ? 1 : table[2] === 2 ? 2 : 7;
    }

    if (table[2] * table[5] * table[8] === 50) {
      winningSpot = table[2] === 2 ? 2 : table[5] === 2 ? 5 : 8;
    }

    // check diagonals
    if (table[0] * table[4] * table[8] === 50) {
      winningSpot = table[0] === 2 ? 0 : table[4] === 2 ? 4 : 8;
    }

    if (table[6] * table[4] * table[2] === 50) {
      winningSpot = table[6] === 2 ? 6 : table[4] === 2 ? 4 : 2;
    }
  }
  return winningSpot;
};

export const letAIChoose = async (plays: number, array_spotValues: number[]) => {
  //let miliseconds = randomBetween(800, 1200);
  //await delay(miliseconds)

  if (plays % 2 === 0) {
    //even plays
    if (plays === 2) {
      if (array_spotValues[4] === 2) {
        return 4;
      } else {
        return 0;
      }
    }
    if (plays === 4) {
      let winningSpot = canWin(array_spotValues, _PLAYER_STARTS);
      if (winningSpot !== -1) {
        return winningSpot;
      } else {
        return make2(array_spotValues);
      }
    }
    if (plays === 6) {
      let winningSpot = canWin(array_spotValues, _COMPUTER_STARTS);
      if (winningSpot !== -1) {
        return winningSpot;
      } else {
        winningSpot = canWin(array_spotValues, _PLAYER_STARTS);
        if (winningSpot !== -1) {
          return winningSpot;
        } else {
          return make2(array_spotValues);
        }
      }
    }
    if (plays === 8) {
      let winningSpot = canWin(array_spotValues, _COMPUTER_STARTS);
      if (winningSpot !== -1) {
        return winningSpot;
      } else {
        winningSpot = canWin(array_spotValues, _PLAYER_STARTS);
        if (winningSpot !== -1) {
          return winningSpot;
        } else {
          return getFirstEmpty(array_spotValues);
        }
      }
    }
  } else {
    // odd plays
    if (plays === 1) {
      return 0;
    }

    if (plays === 3) {
      if (array_spotValues[8] === 2) {
        return 8;
      } else {
        return 2;
      }
    }

    if (plays === 5) {
      let winningSpot = canWin(array_spotValues, _COMPUTER_STARTS);
      if (winningSpot !== -1) {
        return winningSpot;
      } else {
        winningSpot = canWin(array_spotValues, _PLAYER_STARTS);
        if (winningSpot !== -1) {
          return winningSpot;
        } else {
          if (array_spotValues[6] === 2) {
            return 6;
          } else {
            return 2;
          }
        }
      }
    }

    if (plays === 7 || plays === 9) {
      let winningSpot = canWin(array_spotValues, _COMPUTER_STARTS);
      if (winningSpot !== -1) {
        return winningSpot;
      } else {
        winningSpot = canWin(array_spotValues, _PLAYER_STARTS);
        if (winningSpot !== -1) {
          return winningSpot;
        } else {
          return getFirstEmpty(array_spotValues);
        }
      }
    }
  }
};
