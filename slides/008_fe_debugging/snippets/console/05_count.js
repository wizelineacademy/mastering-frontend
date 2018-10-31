function factorial( n ) {
  console.count('Factorial count')
  if ( n === 1 ) {
    return 1;
  }
  return n * factorial( n - 1 );
}
console.countReset(['Factorial count']);
factorial(10)