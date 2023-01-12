const express = require('express');
const mongoose = require("mongoose");

require("dotenv").config();

//routes 
const contactsRoutes = require('./routes/contacts');

const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;


//middlewares
app.use(cors());
app.use(express.json());
app.use('/contact', contactsRoutes);

//initial route
app.get('/', (req, res) => {
    res.json({name: 'Fernando Sanchez'});
});


//database connection
mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log('connected to MongoDB Atlas'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log(`server listening on port: ${port}`));