let group = 'MyGroup'
let myObject = {
  key:'val'
};

let action = () => {
  console.log('mutation');
  myObject = {
    ...myObject,
    key2: 'val2'
  }
}
console.group(group); 
console.log(myObject); 
action(); 
console.log(myObject); 
console.groupEnd(); 

