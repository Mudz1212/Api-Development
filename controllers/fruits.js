// Handles the request and response.

const Fruit = require("../models/Fruit");

const index = async (req, res) => {
  try {
    const fruits = await Fruit.showAll(); // calls the model function
    res.status(200).send(fruits);
  } catch (err) {
    res.status(500).send({ error: "Server error" });
  }
};

const showOne = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.show(name);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(500).send({ error: "Server error mate" });
  }
};

const showGenus = async (req, res) => {
  const genus = req.params.genus.toLowerCase();
  try {
    const fruit = await Fruit.showG(genus);
    res.status(200).send(fruit);
  } catch (err) {
    res.status(500).send({ error: "Server error mate" });
  }
};

const create = async (req, res) => {
  try {
    const newFruit = await Fruit.create(req.body);
    res.status(201).send(newFruit);
  } catch (err) {
    res.status(409).send({ error: err.message });
  }
};
const update = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const fruit = await Fruit.show(name);
    const result = await fruit.update(req.body);

    res.status(200).send(result);
  } catch {
    res.status(401).send({ error: err.message });
  }
};

const deleted = async (req, res) => {
  const name = req.params.name.toLowerCase();

  try {
    const dFruit = await Fruit.show(name);
    const result = await dFruit.delete(req.params);
    res.status(200).send(dFruit);
  } catch {
    res.status(404).send({ error: err.message });
  }
};

module.exports = { index, showOne, showGenus, create, update, deleted };
