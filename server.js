require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override')
// const Fruit = require('./models/fruit');
const PORT = process.env.PORT || 2000;

app.use(express.urlencoded({ extended: true })); //build a ssr website
app.use(methodOverride('_method'))
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongodb')
})

//NEW

app.get('/captain/new', (req, res) => {
    res.render('views/New')
})

//LISTEN

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})