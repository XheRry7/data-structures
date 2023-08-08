// **** O(n): Linear Time complexity: Fair ****:

const nemo = ["nemo"];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  /* Best case for this code would be if we find nemo at the start of the array. 
  and worst case would be if we found nemo at the last index of the array */
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "nemo") {
      console.log("Found Nemo!");
      break; // Adding this break so our loop stops when we found nemo in the array. So it does not iterate through the whole array
    }
  }
  let t1 = performance.now();
  console.log("call to find nemo too " + (t1 - t0) + "milliseconds");
}

findNemo(large); // O(n) : here n depends on number of inputs. here input is large. o(n) is also known as linear time.

/* def of O(n): The O(n) notation means that the runtime complexity 
of your algorithm has a linear relationship with the size of input data.
 If the size of input data is increased by 2, then the runtime complexity
  of your algorithm will be increased by 2 as well */

// **** O(1): Constant Time Complexity: Excellent****:

// Example 1:
function compressTheBoxes(boxes) {
  console.log(boxes[0]);
}

// Example 2:
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoElements(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}
logFirstTwoElements(boxes); // O(2)

// Exercise 1: Big(O) calculation 1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// OutPut: Big O(3 + 4n) = O(n)

// Exercise 2: Big(O) calculation 2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// OutPut: Big O(4 + 7n) = O(n)

// Four rules for calculating Big O

// **Rule 1: Worst Case **:

/* Best case for this code would be if we find nemo at the start of the array. 
  and worst case would be if we found nemo at the last index of the array */

// ** Rule 2 : Remove Constants **

// Example:
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}

// Complexity = O(1+ n/2 + 100) = O(n/2 + 101) = O(n) we are dropping constants as they does not affect much.

// ** Rule 2 : Different terms for inputs **

// when we use two different loops inside a same function and those loops are on different items than the complexity would be O(item1 + item2)

// Example O(n^2)
// log all pairs of array

const boxes1 = [1, 2, 3, 4, 5];

for (let i = 0; i < boxes1.length; i++) {
  for (let j = 0; j < boxes1.length; j++) {
    console.log(boxes1[i], boxes1[j]);
  }
}
// as there are nested loops present so the complexity would be O(n * n) = O(n ^ 2) - Quadratic Time

// Rule 4: Drop non Dominants

// Example:

function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// Complexity : O(n + n ^ 2) = O(n ^ 2)

// O(n!) : Most cheapest complexity.

// **** which code is best
// three pillars of programming that everyone should follow.
// 1) Readable
// 2) Memory: Space Complexity
// 3) speed: Time Complexity

// heap: where we store variables
// stack: where we store function calls

// Space Complexity :
// Variables
// Data Structures
// Function Call
// Allocations

function booo(n) {
  for (let i = 0; i < n.length; n++) {
    console.log("Boooooo!");
  }
}
booo([1, 3, 4, 5, 6]);
/* Space Complexity of this block of code is O(1) as we have 
only one variable available in the function that is initialized to zero. */

function foo(n) {
  let arr = [];
  for (let i = 0; i < n; n++) {
    arr[i] = "fooo";
  }
  return arr;
}
foo(6);
// space complexity of the above code is O(n) because we are assigning the arr foo for every iteration of loop

