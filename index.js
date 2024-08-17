const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/products.route.js');
const app = express();
const port = 3000;
//* MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//*routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('hello world from Node API');
});

//* connceting to the data base.
const url = "mongodb+srv://nicholastoshack12345:MMQaoqrLwadkcQDa@backend.cuf2l.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEnd";

mongoose.connect(url) 
    .then(() => {
        console.log("Connected to the Database")
        app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
})
    })
    .catch (() => {
        console.log('Connection Failed');
    })