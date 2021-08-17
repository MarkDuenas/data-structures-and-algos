"use strict";

const SLNode = require("./node.js");

class SLList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new SLNode(value);
      return this;
    }

    let temp = this.head;
    this.head = new SLNode(value);
    this.head.next = temp;
    return this;
  }

  includes(value) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;

    if (current.value === value) {
      return true;
    }

    while (current.next !== null) {
      current = current.next;
      if (current.value === value) {
        return true;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = "";

    while (current !== null) {
      string += `{${current.value}}` + "->";
      current = current.next;
    }
    console.log(string);
    return string;
  }

  append(value) {
    let node = new SLNode(value);
    if (this.head === null) {
      this.head = node;
      return this;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
    return this;
  }

  insertBefore(value, newValue) {
    let node = new SLNode(newValue);

    if (this.head === null) {
      this.head = node;
      return this;
    }

    if (this.head.value === value) {
      let temp = this.head;
      this.head = node;
      node.next = temp;
      return this;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === value) {
        let temp = current.next;
        node.next = temp;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return this;
  }

  insertAfter(value, newValue) {
    let node = new SLNode(newValue);

    if (this.head === null) {
      this.head = node;
      return this;
    }
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        let temp = current.next;
        node.next = temp;
        current.next = node;
        return this;
      }
      current = current.next;
    }
    return this;
  }

  delete(value) {
    let current = this.head;

    if (this.head.value === value) {
      let newHead = this.head.next;
      this.head = newHead;
      return this;
    }

    while (current.next) {
      if (current.next.value === value) {
        let updateNode = current.next.next;
        current.next = updateNode;
        return this;
      }
      current = current.next;
    }
    return this;
  }

  length() {
    let current = this.head;
    let count = 0;

    while (current) {
      current = current.next;
      count += 1;
    }
    return count;
  }

  kthFromEnd(k) {
    let current = this.head;
    let index = 0;

    if (!this.head) {
      return false;
    }

    if (this.length() <= k || k < 0) {
      return "Linked List does not have that many nodes";
    }

    let count = this.length() - k;

    while (current) {
      index += 1;

      if (count === index) {
        return current.value;
      }

      current = current.next;
    }

    return "Cleared While Loop for some reason";
  }

  // nthToLast(k) {
  //   let p1 = this.head;
  //   let p2 = this.head;

  //   for (let i = 0; i < k; i++) {
  //     if (p1 === null) return null;
  //     p1 = p1.next;
  //   }

  //   while (p1) {
  //     p1 = p1.next;
  //     p2 = p2.next;
  //   }
  //   return p2;
  // }
}

module.exports = SLList;
