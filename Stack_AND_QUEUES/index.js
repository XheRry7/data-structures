/**** Stacks and Queues are linear data structures. Linear data structures allows 
us to traverse sequentially which means one by one. In which one data element can be directly reached */

/* Stacks : LIFO : One scenario in which we use stacks are browser history in which we go back and forth
. Another is when we write a text and want to undo that. UNDO and REDO use stack.It is basically something
 in which we place the last added thing in the memory so we can get that thing on the first.
 
Complexity:
Lookup: O(n)
pop(): O(1)
push: O(1)
peek: view the top most plate : O(1)

Queue: FIFO: Queues are used in many scenarios like when we want to buy movie tickets. Also in restaurant app for checking tables. Most common example is a printer.
Complexities:
lookup: O(n)
enqueue(push): O(1)
dequeue(pop): It takes the first person to pop :  O(1)
peek: first person in the list : O(1)
*/
// In case of Stack
// arrays allow something called cache locality, which makes them technically
// faster when accessing its items in memory because they're right next to each other versus a linked list
// that has them scattered all over memory.

// In case of queue
//  We don't use array in case of queue because its complexity is O(n) as we have to unshift all the indexes one by one after removing first
// element from an Array. Where as in Linklist we have to just to move the head pointer whose complexity is O(1)

// Stack Exercise:
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     let newNode = new Node(value);
//     if (this.length == 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       let previousTop = this.top;
//       this.top = newNode;
//       this.top.next = previousTop;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (this.top == null) {
//       return null;
//     }
//     if (this.top == this.bottom) {
//       this.bottom = null;
//     }
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty
// }

// class Stack {
//   constructor() {
//     this.arr = [];
//   }
//   peek() {
//     return this.arr[this.arr.length - 1];
//   }
//   push(value) {
//     this.arr.push(value);
//     return this;
//   }
//   pop() {
//     this.arr.pop();
//     return this;
//   }
//   //isEmpty
// }

// const myStack = new Stack();
// myStack.push(4);
// myStack.push(5);
// myStack.pop();
// myStack.peek();
// let x = myStack.arr;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    } 
    if(this.first === this.last){
        this.last = null;
    }
      this.first = this.first.next;
      this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
//   console.log("pushed",myQueue.first);

myQueue.peek();
//   console.log("peek",myQueue.first);
myQueue.dequeue();
