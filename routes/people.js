const express = require("express");
const router = express.Router();

const { deletePerson, updatePerson, createPerson, getPeople } = require("../controllers/people");

// Option 1
router.get("/", getPeople);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

// Option 2
// router.route('/').get(getPeople).post(createPerson)
// router.route('/id').put(updatePerson).delete(deletePerson)

module.exports = router;
