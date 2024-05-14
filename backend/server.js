const express = require("express");
const { chats } = require("./data.js");
const dotenv = require("dotenv");
const app = express()
dotenv.config();



app.get('/',(req,res) => {
   res.send("API is running successfully");
});

app.get("/api/chat",(req,res) => {
    res.send(chats);
 });


 app.get("/api/chat/:id",(req,res) => {
    const SingleChat = chats.find((c) => c._id === req.params.id );
    res.send(SingleChat);
 });



 const PORT = process.env.PORT || 5000 ;

app.listen(5000, console.log("Server started on port 5000"));
