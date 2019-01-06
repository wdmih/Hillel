function myBind(func, ctx) {
  let bindedArgs = Array.prototype.slice.call(arguments, 2);
  return function() {
    return func.apply(ctx, bindedArgs);
  };
};

let someObj = {
  name: 'NAME'
};
// console.log(someObj);
function getName(a, b) {
  return this.name + a + b;
}

let binded = myBind(getName, someObj, 'one', 'two');
console.log(binded());
