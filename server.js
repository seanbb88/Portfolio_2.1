const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose'); 
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001; 
require('dotenv').config();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


mongoose.connect(
  
  process.env.MONGODB_URI || "mongodb://localhost/portfolioDB",
  console.log("Connected to Mongoose") 
);

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
