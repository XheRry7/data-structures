// ***** Linked Lists *****//

/* Linked list has nodes that consist of blocks.
One block contains the value and the other contains 
the reference to the node . first node is called the head and the last node is called the tail.
linked lists are null terminated which means this is the end of the list. */

// Complexities:
// prepend: Inserting at the start : O(1)
// append: Inserting at the end: O(1)
// lookup: Traversal(finding an item ): O(n)
// Insert: O(n)
// delete: O(n)

// Pointer: A pointer is something that is used to reference something else in the memory.

// Implementing first link list
// let myLinkList ={
//     head:{
//         value:10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     },
// }

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    // const newNode = {
    //     value: value,
    //     next: null
    // }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    let leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList;
  }
  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList;
  }
  //   // first solution for reverse a link list.
  //   reverse(){
  //     let reversedLinkedList = [];
  //     let heads = this.traverseToIndex(this.length - 1);
  //     heads.next = null;
  //     this.newHead = heads;
  //     this.newTail = heads;
  //     let index = this.length - 2;
  //     while(index >= 0){
  //         let currentNode = this.traverseToIndex(index);
  //         currentNode.next = null
  //         this.newTail.next = currentNode;
  //         this.newTail = currentNode;
  //         reversedLinkedList.push(currentNode.value);
  //         index--;
  //     }
  //   }

  //   second solution to return a linked list
  reverse() {
    if (this.length == 1) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      console.log("sec", second);
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
myLinkedList.insert(2, 23);
myLinkedList.remove(3);
myLinkedList.printList();
myLinkedList.reverse();

/* double linked list: It consist of a extra block which contains the index of the previous item.
 Advantage of this linked list is that it allows us to traverse in backward direction as well */
// Complexity:
// lookup: O(n/2) but is still O(n) according to the rules. but is still faster than the single linked list.
// disadvantage of this is that we have to hold some additional memory in additional block.

// class Node {
//     constructor(value, previous) {
//       this.previous = previous;
//       this.value = value;
//       this.next = null;
//     }
//   }

//   class DoublyLinkedList {
//     constructor(value) {
//       this.head = {
//         previous: null,
//         value: value,
//         next: null,
//       };
//       this.tail = this.head;
//       this.length = 1;
//     }

//     append(value) {
//       const previous = this.tail;
//       const newNode = new Node(value, previous);
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.length++;
//       return this;
//     }
//     prepend(value) {
//       let previous = null;
//       const newNode = new Node(value, previous);
//       this.head.previous = newNode
//       newNode.next = this.head;
//       this.head = newNode;
//       this.length++;
//       return this;
//     }
//     printList() {
//       let array = [];
//       let currentNode = this.head;
//       while (currentNode !== null) {
//         array.push(currentNode.value);
//         currentNode = currentNode.next;
//       }
//       return array;
//     }
//     insert(index, value) {
//       if (index >= this.length) {
//         return this.append(value);
//       }
//       let leader = this.traverseToIndex(index - 1);
//       const newNode = new Node(value, leader);
//       const holdingPointer = leader.next;
//       leader.next = newNode;
//       newNode.next = holdingPointer;
//       this.length++;
//       return this.printList;
//     }
//     remove(index) {
//       let leader = this.traverseToIndex(index - 1);
//       let unwantedNode = leader.next;
//       leader.next = unwantedNode.next;
//       leader.previous = unwantedNode.previous;
//       this.length--;
//       return this.printList;
//     }
//     traverseToIndex(index) {
//       let counter = 0;
//       let currentNode = this.head;
//       while (counter !== index) {
//         currentNode = currentNode.next;
//         counter++;
//       }
//       return currentNode;
//     }
//   }

//   const myDoublyLinkedList = new DoublyLinkedList(10);
//   myDoublyLinkedList.append(5);
//   myDoublyLinkedList.append(16);
//   myDoublyLinkedList.prepend(2);
//   myDoublyLinkedList.insert(2, 23);
//   myDoublyLinkedList.remove(3);
//   myDoublyLinkedList.printList();
