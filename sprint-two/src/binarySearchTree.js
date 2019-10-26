var BinarySearchTree = function (value) {
  var storage = Object.create(binaryMethods);
  storage.value = value;
  storage.right = undefined;
  storage.left = undefined;
  return storage;

};

var binaryMethods = {};

binaryMethods.insert = function (value) {
  // recursive function
  var checkNode = function (node) {
    // check if value is greater than current node
    // check if there is a right property in current node
    if (value > node.value && !node.right) {
      // if property does not exist add property with new node
      var newObj = { value: value };
      node.right = newObj;
      // check if value is less than current node
      // check if there is a left property in current node
    } else if (value < node.value && !node.left) {
      // if property does not exist add property with new node
      var newObj = { value: value };
      node.left = newObj;
      // if properties exist, move to next node
    } else {
      if (value > node.value) {
        checkNode(node.right);
      } else if (value < node.value) {
        checkNode(node.left);
      }
    }


  };

  // first function call
  checkNode(this);


};

binaryMethods.contains = function (value) {
  // create a default result variable to false
  var result = false;
  var check = function (node) {
    if (node === undefined) {
      result = result;
      // check if value is equal node
    } else if (node.value === value) {
      //if yes, reset result true
      result = true;
      // if not check whether if value is greater than first node
    } else if ( value > node.value) {
      check(node.right);
      // // else if check whether if values is less than first node
    } else if ( value < node.value) {
      check(node.left);
      // call recursive on left node
    }
  };
  check(this);
  // return result
  return result;


};

binaryMethods.depthFirstLog = function (cb) {
  

};




/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(1)
 contains = O(1)

 */
