require('dotenv').config();
const express = require('express');
const { engine } = require('express-handlebars');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.engine('hbs', engine({ extname: '.hbs',defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', './views');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public') );

app.get( '/', (req, res) =>{
    res.render( 'home', {
        nombre: 'Rodrigo Obon',
        titulo: 'Curso de Node'
    });
});

app.get( '/generic', (req, res) =>{
    res.render( 'generic', {
        nombre: 'Rodrigo Obon',
        titulo: 'Curso de Node'
    });
});

app.get( '/elements', (req, res) =>{
    res.render( 'elements', {
        nombre: 'Rodrigo Obon',
        titulo: 'Curso de Node'
    });
});

app.listen(port);