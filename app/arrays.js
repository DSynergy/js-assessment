exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var x = 0, length = arr.length; x < length; x++) {
      if (arr[x] === item) { return x;}
    }
    return -1;
  },

  sum : function(arr) {
    var sum = arr.reduce(function(x, y) {return x + y; }, 0);

    return sum;
  },

  remove : function(arr, item) {
    for(var x = arr.length - 1; x >= 0; x--) {
      if(arr[x] === item) {arr.splice(x, 1);}
    }
    return arr
  },

  removeWithoutCopy : function(arr, item) {
    for(var x = arr.length - 1; x >= 0; x--) {
      if(arr[x] === item) {arr.splice(x, 1);}
    }
    return arr
  },

  append : function(arr, item) {
    arr.push(item);
    return arr
  },

  truncate : function(arr) {
    arr.splice(-1,1);
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr
  },

  count : function(arr, item) {
    var count = 0;

    for (var x = 0, length = arr.length; x < length; x++) {
      if (arr[x] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    var results = [];
    for (var x = 0, length = arr.length - 1; x < length; x++) {
      if((results.indexOf(arr[x]) == -1) && (arr.indexOf(arr[x], x + 1) != -1)) {
          results.push(arr[x]);
       }
    }
    return results
  },

  square : function(arr) {
    var result = arr.map(function(x){
      return Math.pow(x, 2);
    });
    return result
  },

  findAllOccurrences : function(arr, target) {
    var results = [];
    for (var x = 0, length = arr.length - 1; x < length; x++) {
      if (arr[x] === target) {
        results.push(x);
       }
     }
    return results;
  }

};
