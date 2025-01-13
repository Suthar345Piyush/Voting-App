const mongoose = require("mongoose");
require("dotenv").config();


const mongoURL = process.env.MONGODB_URL_LOCAL

mongoose.connect(mongoURL , {
  useNewUrlParser : true,
  useUnifiedTopology : true
})


const dataBase = mongoose.connection;

dataBase.on("connected" , () => {
  console.log("Connected to mongo db server");
});


dataBase.on("error" , (err) => {
  console.log("mongo db connection error: " , err);
});

dataBase.on("disconnected" , () => {
  console.log("mongo db is  disconnected");
});


module.exports = dataBase;
