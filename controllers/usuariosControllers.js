
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) =>{

    //const query = req.query;

    const { q, nombre, apellido = 'No Name', page = 1, limiit = 5 } = req.query;

    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        apellido,
        page,
        limiit
    });
}

const usuariosPut = (req, res = response) =>{

    const id = req.params.id;

    res.json({
        msg: 'Put API - Controlador',
        id
    });
}

const usuariosPost = (req, res = response) =>{

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'Post API - Controlador',
        nombre, 
        edad
    });
}

const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'Delete API - Controlador'
    });
}

const usuariosPatch = (req, res = response) =>{
    res.json({
        msg: 'Patch API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}