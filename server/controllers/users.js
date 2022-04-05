//controller takes java script file and exposes as http
const express = require('express');
const app = express.Router();
const { requireAuth } = require('../models/auth');

const userModel = require('../models/user')

const CREATED_STATUS = 201;

app
    .get('/', requireAuth, (req,res) => {
        res.send(userModel.list);
    })
    .get('/:id', (req,res) =>{
        const user = userModel.get(req.params.id);
        res.send(user);
    })
    .post('/', (req,res,next) => {
        userModel.create(req.body)
        .then(user => {
            res.status(CREATED_STATUS).send(user);
        }).catch(next);
    })
    .delete('/:id', requireAuth, (req,res) => {
        const user = userModel.remove(req.params.id);
        res.send({success: true, errors: [], data: user});
    })
    .patch('/:id', (req,res) => {
        const user = userModel.update(req.params.id, req.body);
        res.send({success: true, errors: [], data: user});
    })
    .post('/login', (req,res,next) => {
        userModel.login(req.body.email, req.body.password)
        .then(user => {
            res.send(user);
        }).catch(next);
    })

module.exports = app;