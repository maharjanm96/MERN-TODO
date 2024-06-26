const express = require("express");
const cors = require("cors");
const dbConnect = require("./database/db");
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

app.listen(PORT, () => {
  console.log(`Server is running in port http://localhost:${PORT}`);
});
