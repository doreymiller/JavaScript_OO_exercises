// Write a delegate function that can be used to delegate the behavior of a method or function
//  to another object's method. delegate takes a minimum of two arguments: (1) the object and
//   (2) name of the method on the object. The remaining arguments, if any, are passed — 
//   as arguments — to the objects' method that it delegates to.

// Note that this is not the same as using bind. bind returns a new function, whereas delegate 
// maintains the reference.

// Here's a sample run;

function delegate(obj, methodName, ...args) {
  return function () { 
    return obj[methodName].apply(obj, args);
  };
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

console.log(baz.qux());   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

console.log(baz.qux());          // logs 'changed'