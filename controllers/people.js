let { people } = require("../data/people");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => PerformanceResourceTiming.id === Number(id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((pereson) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(req.params.id));
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
