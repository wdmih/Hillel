// #5 ERRORS EXAMPLES
// type error
try {
  let obj = {};
  obj();
} catch (e) {
  console.log(e);
}
try {
  console.log(undefined.name);
} catch (e) {
  console.log(e);
}

// syntax error
  var x = 2;
  var y = 3;
  console.log(x + y;  // missing a closing parenthesis

let obj = {a:4 b:7} // missing comma