const express = require('express');
const router = express.Router();
const CrearUsuario = require('../controllers/crear.usuario');
const listarUsuarios = require('../controllers/user.getall');
const UsuarioId = require('../controllers/user.getid');
const ActualizarUser = require('../controllers/user.acttualizar');
const DeleteUser = require('../controllers/user.delete');

//ver todos los usuarios
router.get('/', listarUsuarios);

//buscar un usuario por su id
router.get('/:id', UsuarioId);

//crear un nuevo usuario
router.post('/crear-usuario', CrearUsuario);

//actualizar un usuario
router.put('/:id', ActualizarUser);

//eliminar un usuario
router.delete('/:id', DeleteUser);

module.exports = router;

