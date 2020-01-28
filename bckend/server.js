const express = require("express");
const app = express();
const bodyPareser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
const uri =
  "mongodb+srv://user:Password@cluster1-xenqr.mongodb.net/SocialNetwork?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection
  .once("open", function() {
    console.log("Conection has been made!");
  })
  .on("error", function(error) {
    console.log("Error is: ", error);
  });

app.use(cors());
app.use(bodyPareser.json());

const excerciseRouter = require("./routes/excercises");
const userRouter = require("./routes/users");

app.use("/excercises", excerciseRouter);
app.use("/users", userRouter);
app.listen(port, () => {
  console.log("Server is running" + port);
});
