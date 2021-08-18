// Bubble Sort (My own implementation! (^-^) )
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function myBubbleSort(array) {
  let count = 0;
  let indexCountdown = array.length - 1;
  while (indexCountdown >= 0) {
    if (array.indexOf(array[count]) === indexCountdown) {
      count = 0;
      indexCountdown--;
    } else if (array[count] > array[count + 1]) {
      [array[count], array[count + 1]] = [array[count + 1], array[count]];
      count++;
    } else {
      count++;
    }
  }
  return array;
}

// Bubble sort from ZTM

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap the numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// myBubbleSort(numbers)
// bubbleSort(numbers);
// console.log(numbers);

// Selection Sort from ZTM
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// selectionSort(numbers);
// console.log(numbers);
