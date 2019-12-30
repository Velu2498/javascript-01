
/*
(function iHate(arr) {
    'use strict';
    let pointer = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        pointer = i || i + 2;
        //console.log(pointer)
        //console.log(!arr[pointer])
        //console.log( pointer < arr.length)
        //console.log(!arr[pointer] && pointer)
        if (!arr[pointer] && pointer < arr.length) {
          throw new Error('I hate zeroes and undefined!!!');
        }
      }
    }
    console.log('Love it when there\'s no zeroes or undefined!');
  })([0,0,1,0,0,0,1]);
*/

/*
  (function accountant() {
    const balance = [1,2,,4,5];
    let sum = 0;

    for (let i = 0; i < balance.length; i++) {
        sum += balance[i];
        console.log(sum)
    }
    if (sum !== 15) {
        throw new Error(`Oh no! It's all wrong again!`);
    }
    console.log(`Yep! It's correct:-)`);
})();
*/

/*
(function cowboy(param, y = null) {
    const x = y =! param;
    console.log(typeof x !== 'number')
    console.log(x)
    if (x && typeof x !== 'number') {
        return console.log('Yee haaa!');
    }
    throw new Error(`...[horrible silence]...`);
})(0);
*/
