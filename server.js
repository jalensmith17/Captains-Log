require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override')
const Log = require('./models/log');
const PORT = process.env.PORT || 2000;

app.use(express.urlencoded({ extended: true })); //build a ssr website
app.use(methodOverride('_method'))
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongodb')
})

//Index

app.get('/logs', async (req, res) => {
    try {
        const foundLogs = await Log.find({})
        res.render('logs/Index', {logs: foundLogs})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

//NEW

app.get('/logs/new', (req, res) => {
    res.render('logs/New')
})

//Delete

app.delete('/logs/:id', async (req, res) => {
    try {
      await Log.findOneAndDelete({_id: req.params.id})
      .then(() => {
        res.redirect('/logs')
      })
    } catch (error) {
      res.status(400).send({message: error.message})
    }
  })

//Update

app.put('/logs/:id', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
      req.body.shipIsBroken = true
    } else {
      req.body.shipIsBroken = false
    }

    try {
      await Log.findOneAndUpdate({'_id': req.params.id}, 
        req.body, { new: true })
        .then(() => {
          res.redirect(`/logs/${req.params.id}`)
        })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  })

//Create

app.post('/logs', async (req, res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    try {
        const createdLog = await Log.create(req.body)
        res.redirect(`/logs/${createdLog._id}`)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

//Edit

app.get('/logs/:id/edit', async (req, res) => {
    try {
        const foundLogs = await Log.findOne({'_id': req.params.id})
        res.render('logs/Edit', {
            log: foundLogs
        })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  })

//Show 

app.get('/logs/:id', async (req, res) => {
    try {
      const foundLogs = await Log.findOne({_id: req.params.id})
      res.render('logs/Show', {
        log: foundLogs
      })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  })

//LISTEN

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})