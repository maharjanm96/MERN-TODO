const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => {
  res.status(200).send("nigga is home");
});

app.listen(PORT, () => {
  console.log(`Server is running in port http://localhost:${PORT}`);
});