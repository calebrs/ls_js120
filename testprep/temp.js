let obj1 = { foo: 1, bar: 2 };
let obj2 = Object.assign(obj1, { baz: 3 });

console.log(obj2.hasOwnProperty('foo'));