var Tree = function(value) {
  //parent obj
  var newTree = Object.create(treeMethods);
  //parent value
  newTree.value = value;
  newTree.children = [];


  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {

  // create new obj
  var newChild = Object.create(treeMethods);
  // add properties
  newChild.value = value;
  newChild.children = [];
  // find parent reference
  this.children.push(newChild);

};

treeMethods.contains = function(target) {
  // create recursive function
  var result = false;

  // node = object
  var containsValue = function containsValue(node) {
    // check in child value = target
    if (node.value === target) {
      result = true;
    }
    // iterate through the children array
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        containsValue(node.children[i]);
      }
    }
  };
  // return recursive call to our function

  // this = root
  containsValue(this);

  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
