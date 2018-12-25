// #1 IS PRIME NUMBER

function isPrimeNumber(num) {
  let isPrime = true;
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  } else {
    return 'Number must be greater than 1';
  }
}

for (let num = 0; num <= 50; num++) {
  console.log(isPrimeNumber(num));
}
