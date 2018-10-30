console.time("Time this"); 

for (var i = 0; i < 2; i++) {
  // Your stuff here

  console.time("Time this inner"); 
  for (var j = 0; j < 100000; j++) {
    // Your stuff here
  }
  // string == needs to be same as its parent label
  console.timeEnd("Time this inner");

}

// string == needs to be same as its parent label
console.timeEnd("Time this");

