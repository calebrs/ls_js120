/*
Problem:
input: two objects
output: true or false. whether or not the two objects have the same key value pairs


Examples:



Algorithm:
convert the objects into key value pairs array with the Object.entries function
iterate through the first object
  iteratet hrough the second object
    if the elements in each array don't mathch the elements in the other array return false
    
return true if it iterate thorugh them all



*/
function objectsEqual(obj1, obj2) {
  let obj1Entries = Object.entries(obj1);
  let obj2Entries = Object.entries(obj2);
  // console.log(obj1Entries[0][0]);
  // console.log(obj1Entries[0][1]);
  // console.log(obj2Entries[0][0]);
  // console.log(obj2Entries[0][1]);
  
  return obj1Entries[0][0] === obj2Entries[0][0] && obj1Entries[0][1] === obj2Entries[0][1];
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
//console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false