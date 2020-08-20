function objectsEqual(obj1, obj2) {
  let [obj1Keys, obj2Keys] = [Object.keys(obj1), Object.keys(obj2)];

  if (obj1Keys.length !== obj2Keys.length) return false;

  for (let key of obj1Keys) {
    if (!(obj1[key] && obj2[key]) || obj1[key] !== obj2[key])  return false;
  }
  
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false