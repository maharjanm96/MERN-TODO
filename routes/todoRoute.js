const router = require("express").Router();
const {
  addItem,
  updateItem,
  deleteItem,
 //  getAllItems,
} = require("../controllers/todoCrud");

//router.get("/todo", getAllItems);
router.post("/todo", addItem);
router.patch("/todo/:todoId", updateItem);
router.delete("/todo/:todoId", deleteItem);

module.exports = router;
