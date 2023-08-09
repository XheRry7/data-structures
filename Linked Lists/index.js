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
    // const newNode = {
    //     value: value,
    //     next: null
    // }
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
    console.log("aaa", arr);
    return arr;
  }
  insert(index, value) {
    const newNode = new Node(value);
    // newNode.next =
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
myLinkedList.printList();
