function myBind(func, ctx, ...partialArgs){
  return function(...args) {
    return func.apply(cts, partialArgs.concat(args));
  };
}