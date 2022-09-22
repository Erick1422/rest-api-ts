import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json({ usuarios });
    } catch (error) {
        console.log(error);
    }
}

export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return res.status(404).json({
            msg: `No existe usuario con el id: ${id}`
        });
    }
    res.json(usuario);
}

export const crearUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        let existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400)
                .json({
                    msg: `Ya existe usuario con el email ${body.email}`
                });
        }
        const usuario = await Usuario.create(body); // Cambió la forma de guardar
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500)
            .json({
                msg: 'Error al procesar la petición',
            });
    }
}

export const actualizarUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe usuario con el id ${id}`
            });
        }
        await usuario.update(body);
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al completar la petición'
        });
    }
}

export const eliminarUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(400).json({
                msg: `No existe usuario con el id ${id}`
            });
        }
        await usuario.update({ estado: false }); // Eliminación lógica
        res.json({
            msg: 'Usuario eliminado'
        });
        // await usuario.destroy(); -> Eliminaciónn fisica

    } catch (error) {
        res.json({
            msg: 'Error al completar la petición'
        });
    }
}