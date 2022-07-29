import { Request, Response } from "express";

class UsuarioController {
    buscarUsuarios(req: Request, res: Response) {
        const usuarios = [
            {
                nome: "gabriel"
            },
            {
                nome: "jacksoin"
            },
            {
                nome: "teste"
            },
            {
                nome: "testando"
            },
        ];

        return res.json({ usuarios });
    }

}


export default new UsuarioController(); // SINGLETON