/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  // Appends a new node with value val to the tail. Returns undefined.

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length ++;

  }

  /** unshift(val): add new value to start of list. */
  // Add a new node with value val to the head. Returns undefined.

  unshift(val) {
    
    let currentHead = this.head;
  
    // for an empty list ->
    if (currentHead === null) {
      this.push(val)
    } else {
      // for a list with 1 or more items ->
      let newFirstNode = new Node(val);
      newFirstNode.next = currentHead
      this.head = newFirstNode;
      this.length ++;
    }
  }

  /** pop(): return & remove last item. */
  // Remove & return tail value. Throws error if list is empty.

  pop() {
    if (!this.head) {
      // the list is empty
      throw Error;
    }
   
    if (!this.head.next) {
      // there is only one item in the list
      let returnVal = this.head.val;
      this.length --;
      this.head = null;
      this.tail = null;
      return returnVal;
    }
   
    let previous = this.head;
    let node = this.head.next;
   
    while (node.next) {
      previous = node;
      node = node.next;
    }
    
    this.tail = previous;
    this.length --;
    previous.next = null;
   return node.val;
  }

  /** shift(): return & remove first item. */
  // Remove & return head value. Throws error if list is empty.

  shift() {
    if (this.head === null) {
      // the list is empty
      throw Error;
    }
    
    if (!this.head.next) {
      // there is only one item in the list
      let returnVal = this.head.val;
      this.length --;
      this.head = null;
      this.tail = null;
      return returnVal;
    }
    
    let currentHeadVal = this.head.val;
    this.head = this.head.next;
    this.length --;
    return currentHeadVal;

  }

  /** getAt(idx): get val at idx. */
  // Retrieve value at index position idx. Throws error if index is invalid.

  getAt(idx) {
    if (idx >= this.length) throw Error;
    let count = 0
    let currentNode = this.head;
    while (count !== idx) {
      currentNode = currentNode.next;
      count ++;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */
  // Set value of node at index position idx to val. Throws error if index is invalid.

  setAt(idx, val) {
    if (idx >= this.length) throw Error;
    let count = 0
    let currentNode = this.head;
    while (count !== idx) {
      currentNode = currentNode.next;
      count ++;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  // Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined.

  insertAt(idx, val) {
    // invalid index
    if (idx > this.length) throw Error;
    // index is final spot in list
    else if (idx === this.length) this.push(val);
    // index is first spot in list
    else if (idx === 0) {
      return this.unshift(val)
    } else {
      // index is between beginning and end of the list
      let newNode = new Node(val)
      let count = 0
      let previous = this.head;
      let node = this.head.next;
      while (count !== (idx - 1)) {
        previous = node;
        node = node.next;
        count ++;
      }
      previous.next = newNode
      newNode.next = node
      this.length ++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */
  // Remove & return value at position idx. Throws error if index is invalid.

  removeAt(idx) {
    // invalid index
    if (idx >= this.length) throw Error;

    // index is final spot in list
    else if (idx === this.length-1) this.pop();
    // index is first spot in list
    else if (idx === 0) {
      return this.shift()
    } else {
      // index is between beginning and end of the list
      let count = 0
      let previous = this.head;
      let node = this.head.next;
      while (count !== (idx - 1)) {
        previous = node;
        node = node.next;
        count ++;
      }
      previous.next = node.next
      this.length --;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    else {
      let currentNode = this.head;
      let total = 0;
      let count = 0;
      while (count < this.length){
        total += currentNode.val;

        currentNode = currentNode.next;
        count ++;
      }
      
      return total / this.length
    }
  }
}

module.exports = LinkedList;
