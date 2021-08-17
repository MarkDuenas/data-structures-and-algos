"use strict";
const SLL = require("../linked-list");

function removeDup(list) {
  let obj = {};
  let prev = null;
  let current = list.head;

  while (current) {
    if (obj[current.value]) {
      prev.next = current.next;
    } else {
      obj[current.value] = true;
      prev = current;
    }

    current = current.next;
  }
  return list;
}

const newList = new SLL();
const otherList = new SLL();

newList.append(1).append(2).append(3).append(2).append(1).append(1);
otherList.append(1).append(2).append(35).append(35).append(35).append(35);

removeDup(newList).toString();
removeDup(otherList).toString();
