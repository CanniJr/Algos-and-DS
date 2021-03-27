//#1 -- For loop in Javascript.
const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}
// findNemo1(nemo); // O(n) -> Linear time

const randomNums = [1,3,4,2,5,6,11,10]
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // 1

    var middleIndex = Math.floor(items.length / 2); // 1
    var index = 0; // 1

    while (index < middleIndex) {
        console.log(items[index]); // n
        index++; // n
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi'); // n
    }
}
// printFirstItemThenFirstHalfThenSayHi100Times(randomNums) // O(n)






