"use strict";

const SLL = require("../linked-list");

function removeMidNode(node) {
  if (node === null || node.next === null) {
    return false;
  }

  let next = node.next;
  node.value = next.value;
  node.next = next.next;

  return true;
}
