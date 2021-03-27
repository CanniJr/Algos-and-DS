//Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items.
//ex: const arr1 = ['a', 'b', 'c', 'x']
//    const arr2 = ['z', 'y', 'i']
//    should return false
// ------------------------
//    const arr1 = ['a', 'b', 'c', 'x']
//    const arr2 = ['z', 'y', 'x']
//    should return true

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']
function commonItemsInArray(arr1, arr2){
  let arr = []
  for(let i = 0; i < arr1.length; i++){
    arr[i] = arr1[i]
    }
  for(let j = 0; j < arr2.length; j++){
    if(arr2[j] === arr[j]){
      return true
    }else{
      return false
    }
  }
}
// console.log(commonItemsInArray(array1, array2)) // needs fix