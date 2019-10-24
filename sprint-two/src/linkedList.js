var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    // create the node
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {

      var temp = this.head;
      // figure out where the last element of the linked list
      while ( temp.next !== null ) {
        temp = temp.next;
      }
      // add the value to the end
      temp.next = newNode;
      // designate this new value as tail
      this.tail = temp.next;
    }

  };

  list.removeHead = function() {

    // if no head return list
    // if head exist reassign head to head.next
    if (this.head === null) {
      return this;
    } else {
      var formerHead = this.head.value;
      this.head = this.head.next;
      return formerHead;
    }
  };

  list.contains = function(target) {
    var temp = this.head;

    // while value of node doesnt equal target keep looking
    while (temp.value !== target) {
      temp = temp.next;
      if (temp === null) {
        return false;
      }
    }
  

    if (temp.value === target) {
      return true;
    }

    // else return false
    return false;


  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
