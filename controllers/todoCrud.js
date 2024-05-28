const TodoModel = require("../models/todoSchema");

const addItem = async (req, res) => {
  try {
    const newItem = await TodoModel.create(req.body);
    console.log("Item Added");
    res.status(200).json({ message: "New Item Added", todo: newItem });
  } catch (error) {
    console.log("Something went wrong.", error);
    res.status(400).json({ message: "Something Went Wrong", error: error });
  }
};

module.exports = addItem;
