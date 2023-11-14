const express = require('express');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();
const routes = require('./server/routers/recipeRoutes')
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(expressLayouts)
app.set('layout', './layouts/main.ejs')
app.set('view engine', 'ejs')
app.use(cookieParser('cookingBlogSecure'))
app.use(session({
    secret: 'CookingBlogSecretSession',
    saveUninitialized: true,
    resave: true
}))
app.use(flash())
app.use(fileUpload());


// Routes
app.use('/', routes)


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server is running on Port: http://localhost:${PORT}`))
    } catch (error) {
        console.log(error.message)
    }
}

start();