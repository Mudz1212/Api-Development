//Handling data, representing data, all data stuff, It has no idea what other files will do with its data.
let fruits = require("./fruits.json");

class Fruit {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }

  static showAll() {
    return fruits.map((q) => new Fruit(q));
  }

  static show(name) {
    const fruit = fruits.find((f) => f.name.toLowerCase() == name);
    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw "The fruit does not exist mate";
    }
  }

  static showG(genus) {
    const fruit = fruits.find((f) => f.genus.toLowerCase() == genus);

    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw "The fruit does not exist mate";
    }
  }

  static create(data) {
    const newFruit = data;
    const fruit = fruits.find(
      (f) => f.name.toLowerCase() == data.name.toLowerCase(),
    );

    if (fruit) {
      throw "The fruit already exists";
    } else {
      newFruit["id"] = fruits.length + 1;
      fruits.push(newFruit);

      return new Fruit(newFruit);
    }
  }

  delete(data) {
    const noFruit = fruits.find(
      (f) => f.name.toLowerCase() === this.name.toLowerCase(),
    );

    if (noFruit) {
      // const index = fruits.indexOf(noFruit);
      // delete fruits[fruits.indexOf(noFruit)]; works as it is without anything else
      fruits = fruits.filter(
        (fruit) => fruit.name.toLowerCase() != data.name.toLowerCase(), // works as its own as it is now
      );
    } else {
      throw "Could not find fruit";
    }
  }

  update(data) {
    const updatedFruit = fruits.find(
      (f) => f.name.toLowerCase() === this.name.toLowerCase(),
    );

    if (updatedFruit) {
      updatedFruit.name = data.name;
      updatedFruit.family = data.family;
      return new Fruit(updatedFruit);
    } else {
      throw "Fruit does not exist";
    }
  }
}

module.exports = Fruit;

// static functions use data.name instead of this.name bevause we want to use the
// refers to the object running the function = this.name
