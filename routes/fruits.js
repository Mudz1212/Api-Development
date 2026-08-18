const express = require("express"); // must import from express
const router = express.Router(); // A router binds a http request to a controller function
const fruits = require("../controllers/fruits");

router.get("/", fruits.index); //.index comes from the controller // handles anything that starts /fruits
router.get("/:name", fruits.showOne); // request parameter/ request query. queries are optional parameters are not
router.get("/:genus/:genus", fruits.showGenus);
router.post("/", fruits.create);
router.patch("/:name", fruits.update);
router.delete("/:name", fruits.deleted);

module.exports = router;

// check the order of the routers because they are sequential and if one interfers and gets caught early it will never be reached.
