// Bubble Sort (My own implementation! (^-^) )
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function myBubbleSort(array) {
    let count = 0
    let indexCountdown = array.length-1
    while(indexCountdown >= 0){
      if(array.indexOf(array[count]) === indexCountdown ){
        count = 0
        indexCountdown--
      }else if(array[count] > array[count + 1]){
        [array[count], array[count + 1]] = [array[count + 1], array[count]];
        count++
      }else{
        count++
      }
    }
    return array
}

// Bubble sort from ZTM
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

// myBubbleSort(numbers)
// bubbleSort(numbers);
// console.log(numbers);