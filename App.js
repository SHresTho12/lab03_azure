//create a node app to send hello world
const express = require("express");

const app = express();
const port = 3000;
//middleware

app.use(express.json());

//get req to print hello world
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//server listening
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
