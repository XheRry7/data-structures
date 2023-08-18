// In trees we have one directional flow. it consist of nodes and leafs . leafs are end nodes of the tree data structure.In trees we have sub trees.
// first node is the root node .

// Binary Tree: Each node can only have 0 1 or 2 nodes and each child can only have one parent.

// Perfect Binary tree: A tree which is complete.Bottom layer of the tree is completely filled. the number on each level doubles.
// Number of nodes in the last level is equal to the all the previous nodes on all the levels + 1.
// Full binary tree: A node have either 0 or two children.

// complexities:
// lookup: O(log N)
// insert: O(log N)
// delete: O(log N)

// Binary Search Tree: Subset of binary tree. it includes relationship like our folder structure.
// Rules:
// Right node on the parent must be greater than the parent node.
// left nodes should have the values less than the parent node.
// A node can only have upto two children.

// unbalanced binary search tree is a problem in which we have a structure like a link list.
// its complexity is greater such that we have to loop through every single item

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    //Code here
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }
  // remove
  // for removing a given value first we have to find the value and than we
  // have to see the left of the next node and replace that left in place of that node.

  // TODO: implement remove
  //   remove(value) {
  //     if (!this.root) {
  //       return null;
  //     }
  //     let currentNode = this.root;
  //     while (currentNode) {
  //       if (value < currentNode.value) {
  //         currentNode = currentNode.left;
  //       } else if (value > currentNode.value) {
  //         currentNode = currentNode.right;
  //       } else if (value === currentNode.value) {
  //         if (currentNode.right && currentNode.right?.left?.value){
  //         let nextNode = currentNode.right;
  //         nextNode.right.left.value = currentNode.value =
  //           currentNode.right.left.value;
  //           currentNode.right = nextNode.right.left.value;
  //         }
  //         else{
  //             currentNode = c
  //         }

  //       }
  //       console.log("aaa", this.root);
  //     }
  //   }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(4);
console.log(tree.lookup(40));
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
