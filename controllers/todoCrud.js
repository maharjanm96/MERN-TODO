const TodoModel = require("../models/todoSchema");

// const getAllItems = async (req, res) => {
//   try {
//     const allData = await TodoModel.find({});
//     res.status(200).json({ message: "All todo list", todo: allData });
//   } catch (error) {
//     console.error("Something went wrong");
//     res.status(400).json({ message: "Error Occured", error: error });
//   }
// };

const addItem = async (req, res) => {
  try {
    const newItem = await TodoModel.create(req.body);
    console.log("Item Added");
    res.status(201).json({ message: "New Item Added", todo: newItem });
  } catch (error) {
    console.log("Something went wrong.", error);
    res.status(400).json({ message: "Something Went Wrong", error: error });
  }
};

const updateItem = async (req, res) => {
  const { todoId } = req.params;
  const todoDetails = req.body;
  try {
    const updateData = await TodoModel.findByIdAndUpdate(todoId, todoDetails, {
      new: true,
    });
    console.log("Item updated");
    res.status(200).json({ message: "Item is Updated", todo: updateData });
  } catch (error) {
    console.error("Something went wrong");
    res.status(400).json({ message: "Something went wrong", error: error });
  }
};

const deleteItem = async (req, res) => {
  const { todoId } = req.params;

  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(todoId, req.body, {
      new: true,
    });

    console.log("Todo Deeleted Successfully");
    res
      .status(200)
      .json({ message: "Todo Deleted Successfully", todo: deletedTodo });
  } catch (error) {
    console.error("Something went wrong");
    res.status(400).json({ message: "Error Occured", error: error });
  }
};

module.exports = { addItem, updateItem, deleteItem };
