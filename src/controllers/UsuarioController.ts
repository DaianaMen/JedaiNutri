import { Request, Response } from "express";
import UsuarioSchema from "../models/UsuarioSchema";

class UsuarioController {

    async cadastrar(request: Request, response: Response) {
        try {
            const novoUsuario = await UsuarioSchema.create(request.body);
            response.status(201).json({
                objeto: novoUsuario,
                msg: "Usuario cadastrado",
                erro: false
            });
        } catch (error) {
            response.status(400).json({
                objeto: error,
                msg: "Falha",
                erro: true
            });
        }
    }


    async buscar(request: Request, response: Response) {
        const {id} = request.params;
        const usuario = await UsuarioSchema.find({_id: id});
        response.status(200).json(usuario);
    }

    async listar(request: Request, response: Response) {
        const usuario = await UsuarioSchema.find();
        response.status(200).json(usuario);
    }

    async alterar(request: Request, response: Response) {
        const {id} = request.params;
        const result = await UsuarioSchema.findOneAndUpdate({_id: id}, request.body, {new: true});
        response.status(200).json(result);
    }

    async remover(request: Request, response: Response) {
        const {id} = request.params;
        const remove = await UsuarioSchema.findByIdAndRemove({_id: id});
        response.status(200).json(remove);
    }
}

export { UsuarioController };