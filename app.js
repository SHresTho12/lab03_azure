//create a node app to send hello world
const express = require("express");

const app = express();
const port = 3000;
require("dotenv").config({ path: "./.env" });
//middleware

app.use(express.json());

//get req to print hello world
app.get("/", (req, res) => {
  res.send("Hello To Azure test Lab j");
});

//server listening
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
