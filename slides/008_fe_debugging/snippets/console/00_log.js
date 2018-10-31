console.log('Hello World!');
console.log('This is a string', { foo: 'bar' }, { bar: 'foo' });
console.info('Hello World!');
console.warn('Hello World!');
console.error('Hello World!');

var wallets = [{ amount: 0 }];
 
setInterval( function() { 
    console.log( wallets, wallets[0], wallets[0].amount ); 
    wallets[0].amount += 100; 
}, 1000 );