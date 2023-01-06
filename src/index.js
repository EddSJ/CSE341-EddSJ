const express = require('express');
const port = process.env.PORT || 9000;

//routes



const app = express();

//middlewares
app.use(express.json());

//initial route
app.get('/', (req, res) => {
    res.json({name: 'Fernando Sanchez'});
});


app.listen(port, () => console.log(`server listening on port: ${port}`));