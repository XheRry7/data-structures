// Hash Tables:
// Objects in Js are types of hash tables.
// Key is used as index from where we can find the value in the memory.
// Hash Function:
// Idempotent:
// It is a function given some input always returns the same output.

// Complexities:
// insert : O(1)
// lookup : O(1)
// delete : O(1)
// search : O(1)

// when we create an object and assign key values in it it hash the keys and allocate
// the memory in for the keys. So In doing this more than one keys can be assigned to same
// memory location which is known as collosion. In this case it uses linkedlist to insert
// multiple keys at one index or memory location.

// Map in js allows us to store any type of key. where as simple object only allows us to
// create a string key.Map maintains insertion order.
// Sets: contains only keys and not the values.

// Exercise:
// class HashTable {
//     constructor(size){
//       this.data = new Array(size);
//       // this.data = [];
//     }

//     _hash(key) {
//       let hash = 0;
//       for (let i =0; i < key.length; i++){
//           hash = (hash + key.charCodeAt(i) * i) % this.data.length
//       }
//       return hash;
//     }

//     set(key, value) {
//       let address = this._hash(key);
//       if (!this.data[address]) {
//         this.data[address] = [];
//       }
//       this.data[address].push([key, value]);
//       return this.data;
//     }

//     get(key){
//       const address = this._hash(key);
//       const currentBucket = this.data[address]
//       if (currentBucket) {
//         for(let i = 0; i < currentBucket.length; i++){
//           if(currentBucket[i][0] === key) {
//             return currentBucket[i][1]
//           }
//         }
//       }
//       return undefined;
//     }

//     keys(){
//       const keysArray = [];
//       console.log(this.data.length);
//       for (let i = 0; i < this.data.length; i++){
//         if(this.data[i]){
//           keysArray.push(this.data[i][0][0])
//         }
//       }
//       return keysArray;
//     }
//   }

//   const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   myHashTable.set('grapes', 10000)
//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')
//   myHashTable.keys()

const arr = [2, 1, 1, 3, 5, 2, 3, 4, 7];
let map = {};
let num = 0;
for (let i = 0; i < arr.length; i++) {
  if (map[arr[i]] !== undefined) {
    num = arr[i];
    return map[arr[i]];
  } else {
    map[arr[i]] = i;
  }
}
