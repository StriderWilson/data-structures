// Instantiate a new graph
var Graph = function () {

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {

  this[node] = {};
  this[node][node] = node;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {

  //check if this node exists, if not, return false
  if (this[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {

  if (Object.keys(this[node]).length > 1) {
    var keyArr = Object.keys(this[node]);
    //console.log(keyArr)
    var key = keyArr[0];
    delete this[key][node];
  }
  // delete the input node
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  // check if the value of edge fromNode has a value toNode
  if (this[fromNode].hasOwnProperty(toNode)) {
    // return true
    return true;
  }
  return false;
  // return false

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {

  // add the first key to fromNode with value of toNode
  this[fromNode][toNode] = toNode;
  // add the second key to toNode with value of fromNode
  this[toNode][fromNode] = fromNode;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {

  delete this[fromNode][toNode];
  delete this[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {

  // iterate the graph's key
  for (var key in this) {
    // apply call back function to each node's key
    cb(key);
  }



};

/*
 * Complexity: What is the time complexity of the above functions?
 */


