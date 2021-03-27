class myArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index] ;
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    pop(){
        let lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return lastItem
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item
    }

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1] //if an item is deleted in an array, the index should shift.
        }
        delete this.data[this.length-1];
        this.length--;
    }

}

// let newArray = new myArray();
// newArray.push('hello')
// newArray.push('whazaaa')
// newArray.push('rawr')
// newArray.delete(1)
// console.log(newArray)


//Hash Table
class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }
  }
  
//   const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')

// LinkedList
// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head
    this.head = newNode;
    this.length++;
    return this
  }
}

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);



