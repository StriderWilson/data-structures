

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.getIndexBelowMaxForKey = getIndexBelowMaxForKey;
};

HashTable.prototype.insert = function(k, v) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  if (!index && index !== 0) {

  } else {
    // add array to index of storage
    this._storage[index] = [];
    // create tuple
    var tuple = [k, v];
    // push tuple into array
    this._storage[index].push(tuple);

  }

};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  // iterate over array in index
  for (var i = 0; i < this._storage[index].length; i++) {
    // check if tuple contains value
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    // check if tuple contains value
    if (this._storage[index][i][0] === k) {
      this._storage[index][i].pop();
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(n)
 retrieve = O(n)
 remove = O(n)
 */


