import { Router } from 'express';
import { getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuarios';

const router = Router();

router.get('/', getUsuarios);

router.get('/:id', getUsuario);

router.post('/', crearUsuario);

router.put('/:id', actualizarUsuario);

router.delete('/:id', eliminarUsuario);


export default router;