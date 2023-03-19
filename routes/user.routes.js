const { Router } = require('express');
const { getUsuario, PutUsuario, PostUsuario, DeleteUsuario, PatchUsuario } = require('../controllers/user.controller');

const router = Router();

//API endpoint GET
router.get('/', getUsuario);

//API endpoint PUT
router.put('/:id', PutUsuario);

//API endpoint POST
router.post('/', PostUsuario);

//API endpoint DELETE
router.delete('/:id', DeleteUsuario);

//API endpoint PATCH
router.patch('/', PatchUsuario);


module.exports = router;