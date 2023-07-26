
var cors = require('cors')
//Package imports
console.log('Hello World');
const express = require('express');
const mongoose = require('mongoose');

//File imports
const authRouter = require('./routes/auth')

//Initialisations
const PORT = process.env.PORT || 3000;
const app = express();
const DB = "mongodb+srv://komaldhall1:48komal48@cluster0.ju5kpdh.mongodb.net/?retryWrites=true&w=majority";


app.use(cors({
    origin: '*'
}))

//middleware
app.use(express.json());
app.use(authRouter);

//conntection
mongoose.connect(DB).then(() => {
    console.log('Connection Sucessfull');
}).catch((e) => {
    console.log(e);
})
//creating API

app.listen(PORT, "0.0.0.0", function () {
    console.log(`Connected ${PORT}`);
}) //access from anywhere
