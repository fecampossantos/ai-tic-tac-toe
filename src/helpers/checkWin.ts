export const checkWin = (table: any[], plays: number) => {
  let userWon: boolean = false;
  let computerWon: boolean = false;
  let tie: boolean = true;

  const _VALUE_USER_WINS = 5 * 5 * 5;
  const _VALUE_COMPUTER_WINS = 3 * 3 * 3;

  const _LINES: number = 3;
  const _COLUMNS: number = 9;

  //check lines
  for (let index = 0; index < _COLUMNS; index+=3) {
      const lineValue0: number = table[index];
      const lineValue1: number = table[index + 1];
      const lineValue2: number = table[index + 2];

      const lineResult = lineValue0 * lineValue1 * lineValue2;

      if (lineResult === _VALUE_COMPUTER_WINS) {
        computerWon = true;
        tie = false;
        break;
      } else if (lineResult === _VALUE_USER_WINS) {
        userWon = true;
        tie = false;
        break;
      }
  }

  //check columns
  for (let index = 0; index < _LINES; index++) {
      const columnValue0: number = table[index];
      const columnValue1: number = table[index + 3];
      const columnValue2: number = table[index + 6];

      const columnResult = columnValue0 * columnValue1 * columnValue2;

      if (columnResult === _VALUE_COMPUTER_WINS) {
        computerWon = true;
        tie = false;
        break;
      } else if (columnResult === _VALUE_USER_WINS) {
        userWon = true;
        tie = false;
        break;
      }
  }

  // check diagonals
  if(table[0]*table[4]*table[8] === _VALUE_COMPUTER_WINS){
    tie = false;
    computerWon = true;
  } 
  if(table[0]*table[4]*table[8] === _VALUE_USER_WINS){
    tie = false;
    userWon = true;
  } 
  if(table[2]*table[4]*table[6] === _VALUE_COMPUTER_WINS){
    tie = false;
    computerWon = true;
  }
  if(table[2]*table[4]*table[6] === _VALUE_USER_WINS){
    tie = false;
    userWon = true;
  } 

  return { userWon, computerWon, tie };
};
