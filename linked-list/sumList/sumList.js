// Sum LIsts: You have numbers represented by a linked list, where each node contains a single digit. The digits are
// stored in reverse order, such that the 1's digits is at the end of the list. Write a function that adds the two numbers and returns the
// sum as a linked list.
//INPUT: ( 7 -> 1 -> 6) + ( 5 -> 9 -> 2)
//OUTPUT: ( 2 -> 1 -> 9 )

const SLL = require("../linked-list");

function sumLists(listA, listB) {
  // if linked list is passed non-reversed; reverse the LL
  let hold = 0;
  let newLL = new SLL();
  let currentA = listA.head;
  let currentB = listB.head;
  while (currentA && currentB) {
    hold = currentA.value + currentB.value + hold;
    if (hold >= 10) {
      newLL.append(hold - 10);
      hold = 1;
    } else {
      newLL.append(hold);
      hold = 0;
    }
    currentA = currentA.next;
    currentB = currentB.next;
  }
  while (currentA || currentB) {
    if (currentA) {
      newLL.append(currentA.value + hold);
      hold = 0;
      currentA = currentA.next;
    }
    if (currentB) {
      newLL.append(currentB.value + hold);
      hold = 0;
      currentB = currentB.next;
    }
  }
  if (hold) {
    newLL.append(hold);
  }
  return newLL;
}

let newListA = new LL();
let newListB = new LL();

newListB.append(7).append(1).append(9).append(3).append(9);
newListA.append(5).append(9).append(2);
console.log(sumLists(newListA, newListB).toString());
