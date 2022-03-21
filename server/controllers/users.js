
const express = require('express');
const app = express.Router();

const userModel = require('../models/user')

app
    .get('/',(req,res) => {
        res.send(user.list);
    })
    .get('/:id', (req,res) =>{
        const user = userModel.get(req.params.id);
        res.send(user);
    })

module.exports = app;