const express = require('express');
const layout = require('express-ejs-layouts');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
// app.use(layout());

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Homepage',
        layout: 'layouts/main-layout'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About',
        layout: 'layouts/main-layout'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        pageTitle: 'Contact',
        layout: 'layouts/main-layout'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        pageTitle: 'Page Not Found',
        layout: 'layouts/main-layout'
    })
})

app.listen(PORT);