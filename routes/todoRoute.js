const router = require("express").Router();
const addItem = require("../controllers/todoCrud");

router.post("/add", addItem);

module.exports = router;
