/*
Modify the program from the previous problem so that logReturnVal accepts an additional context argument. If you then run the program with turk as the context argument, it should produce the desired output.

Suppose that we want to extract getDescription from turk, but we always want it to execute with turk as its execution context. How would you modify your code to do that?
*/

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func();
  console.log(returnVal);
}

let turk1 = turk.getDescription.bind(turk);

console.log(turk1());

//logReturnVal(turk.getDescription, turk);