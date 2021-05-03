import { Request, Response } from "express";
import RefeicaoSchema from "../models/RefeicaoSchema";

class RefeicaoController {

    async cadastrar(request: Request, response: Response) {
        try {
            const novoRefeicao = await RefeicaoSchema.create(request.body);
            response.status(201).json({
                objeto: novoRefeicao,
                msg: "Refeicao cadastrada",
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
        const { id } = request.params;
        const refeicao = await RefeicaoSchema.find({_id: id});
        response.status(200).json(refeicao);
    }

    async listar(request: Request, response: Response) {
        const refeicao = await RefeicaoSchema.find();
        response.status(200).json(refeicao);
    }

    async alterar(request: Request, response: Response) {
        const { id } = request.params;
        const result = await RefeicaoSchema.findOneAndUpdate({_id: id}, request.body, {new: true});
        response.status(200).json(result);
    }

    async remover(request: Request, response: Response) {
        const { id } = request.params;
        const remove = await RefeicaoSchema.findByIdAndRemove({_id: id});
        response.status(200).json(remove);
    }
}

export { RefeicaoController };