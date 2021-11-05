
const express = require('express');
//add const reqiure routes
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();


//parse incoming string or arr data - extended: true tells code to look for nested objs as well.
app.use(express.urlencoded({extended: true}));
//parse incoming jsons
app.use(express.json());
//make public static 
app.use(express.static('public'));
//router exports (routes) from above consts
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



