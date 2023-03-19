const { request ,response } = require('express')

const getUsuario = (req = request, res = response) => {

    const params = req.query;

    res.json({
        msg: 'api GET - Controller',
        params
    });
}

const PutUsuario = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'api PUT - Controller',
        id: id
    });
}

const PostUsuario = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'api POST - Controller',
        body
    });
}

const DeleteUsuario = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'api DELETE - Controller',
        id: id
    });
}

const PatchUsuario = (req, res) => {
    res.json({
        msg: 'api PATCH - Controller'
    });
}

module.exports = {
    getUsuario, PutUsuario, PostUsuario, DeleteUsuario, PatchUsuario
}