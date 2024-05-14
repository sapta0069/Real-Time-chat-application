const express= require('express');

const {chats}= require('./data/data');
const dotenv= require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const app = express();




app.get('/api/chat',(req,res)=>{
    res.send(chats);
})
app.listen(5000,console.log("Server started on port 5000 "));
