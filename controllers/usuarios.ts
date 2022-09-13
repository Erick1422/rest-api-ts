import { Request, Response } from 'express';

export const getUsuarios = (req: Request, res: Response) => {

    res.json({
        msg: 'getUsuarios'
    });     
}

export const getUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'getUsuario',
        id
    });
}

export const crearUsuario = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'crearUsuario',
        body
    });
}

export const actualizarUsuario = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'actualizarUsuario',
        body,
        id
    });
}

export const eliminarUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUsuarios',
        id
    });
}