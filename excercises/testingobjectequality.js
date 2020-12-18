/*
Problem:
input: two objects
output: true or false. whether or not the two objects have the same key value pairs


Examples:



Algorithm:

convert both to entries, if one has a longer length then return false

iterte through the input object
  if the current property is not property of the other object return false
  else if the value of the current property does not equal the value of the property in the other object reutnr false
  
return true


*/
function objectsEqual(obj1, obj2) {
  
  for (let prop in obj1) {
    if (!obj2.hasOwnProperty(prop)) {
      return false;
    } else if (obj1[prop] !== obj2[prop]) {
      return false;
    } else {
      return Object.entries(obj1).length === Object.entries(obj2).length;
    }
  }
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false