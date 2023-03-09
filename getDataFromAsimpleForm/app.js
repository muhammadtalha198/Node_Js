const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


 
app.get("/getDataFromHTMLfile", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
 
app.post("/sendFormData", (req, res) => {
  
  const username = req.body.username;
  const password = req.body.password;

  res.send("Username: " + username);
  res.send("Password: " + password);
  res.send("Data received");
});
 
const port = 4000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
