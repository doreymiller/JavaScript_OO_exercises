function myBind(func, ctx){
  return function(...args) {
    return func.apply(cts, args);
  };
}