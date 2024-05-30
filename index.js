const express = require("express");
const cors = require("cors");
const dbConnect = require("./database/db");
const TodoModel = require("./models/todoSchema");
require("dotenv").config();
dbConnect();

const PORT = process.env.PORT;

const todo = require("./routes/todoRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", todo);



app.get("/api/home", (req, res) => {
  res.status(200).send("Hello Vercel Deployment");
});

const getAllItems = async (req, res) => {
  try {
    const allData = await TodoModel.find({});
    res.status(200).json({ message: "All todo list", todo: allData });
  } catch (error) {
    console.error("Something went wrong");
    res.status(400).json({ message: "Error Occured", error: error });
  }
};
app.get("/api/todos", getAllItems);
app.listen(PORT, () => {
  console.log(`Server is running in port http://localhost:${PORT}`);
});
