const router = require("express").Router();
const { addItem, updateItem, deleteItem } = require("../controllers/todoCrud");

router.post("/todo", addItem);
router.patch("/todo/:todoId", updateItem);
router.delete("/todo/:todoId", deleteItem);

module.exports = router;
