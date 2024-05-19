const express= require('express');

const {chats}= require('./data/data');
const dotenv= require('dotenv');
const connectDB = require('./config/db');
const userRoutes= require('./routes/userRoutes')
const {notFound, errorHandler} = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();
const app = express();
app.use(express.json())


app.use('/api/user',userRoutes);
app.use('/api/user',chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000,console.log("Server started on port 5000 "));
