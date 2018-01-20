const possibilities = {
  0: ['012', '048', '036'],
  1: ['012', '147'],
  2: ['012', '246', '258'],
  3: ['036', '345'],
  4: ['048', '147', '246', '345'],
  5: ['258', '345'],
  6: ['036', '246', '678'],
  7: ['147', '678'],
  8: ['048', '258', '678'],
}

const win = function(arr, num) {
  const toCheck = possibilities[num];

  for (let i = 0; i < toCheck.length; i++) {

    const checking = toCheck[i];
    const first = checking.charAt(0);
    const second = checking.charAt(1);
    const third = checking.charAt(2);

    // The next two conditions only pass if all three values are equal to each other
    console.log('from collisions', arr[first], arr[second], arr[third]);
    if (arr[first] === arr[second]) {
      if (arr[second] === arr[third]) {
        return true;
      }
    }
  }

  return false;
}

export default win;