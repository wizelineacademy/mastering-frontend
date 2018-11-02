/***********************************
Scenario 1
***********************************/

const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // a lot of more code in  between
  // ...
  // ...
  dispatch(l);
});

/***********************************
Scenario 2
***********************************/

setTimeout(reminder, 3 * 60 * 60 * 1000);

/***********************************
Scenario 3
***********************************/

const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

function paintCar(car) {
  car.carColor = "Red";
}

/***********************************
Scenario 4
***********************************/

function createMenu(title, body, buttonText, cancellable) {}

createMenu("my title", "the body", "the button text", true);

/***********************************
Scenario 5
***********************************/

if (person.age > 18 && person.id && person.id.isValid()) {
  person.give("beer");
} else {
  person.give("soda");
}

/***********************************
Scenario 6
***********************************/

let kidCart = [];

const addItemToCart = (cart, item) => {
  cart.push(item);
  return cart;
};

kidCart = addItemToCart(kidCart, "soda");
kidCart = addItemToCart(kidCart, "chips");
let momCart = addItemToCart(kidCart, "beer");

console.log(momCart); // ['soda', 'chips', 'beer']
console.log(cart); // ['soda', 'chips', 'beer'] //oops

/***********************************
Scenario 7
***********************************/

class Animal {
  constructor(type) {
    this.type = type;
  }

  talk() {
    switch (this.type) {
      case "dog":
        return "bark";
      case "cat":
        return "meow";
      case "duck":
        return "cuack";
    }
  }
  fly() {
    switch (this.type) {
      case "dog":
        throw Error(":(");
      case "cat":
        throw Error(":(");
      case "duck":
        return "cuack";
    }
  }
}

const duck = new Animal("duck");
duck.talk();
duck.fly();
