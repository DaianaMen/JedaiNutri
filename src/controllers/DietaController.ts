import { Request, Response } from "express";
import DietaSchema from "../models/DietaSchema";
import UsuarioSchema from "../models/UsuarioSchema";

class DietaController {

    async cadastrarDieta(request: Request, response: Response) {
        try {
            const { usuario_id } = request.body;
            const usuario = await UsuarioSchema.findById(usuario_id);

            const dieta_params = request.body;
            dieta_params.usuario = usuario;
            const novaDieta = await DietaSchema.create(dieta_params);

            response.status(201).json({
              objeto: novaDieta,
              msg: "Dieta cadastrada com sucesso!",
              erro: false
            });
          } catch (error) {
            console.log(error);
            response.status(400).json({
              objeto: error,
              msg: "Falha",
              erro: true
            });
          }
        }
    
    async buscarDieta(request: Request, response: Response) {
        const { id } = request.params; 
        const dieta = await DietaSchema.find({id:id}); 
    }

    async listarDieta(request: Request, response: Response) {
        const dieta = await DietaSchema.find();
        response.status(200).json(dieta);
    }

    async alterarDieta(request: Request, response: Response) {
        const { id } = request.params;
        const result = await DietaSchema.findOneAndUpdate({id : id}, request.body, {new: true});
        response.status(200).json(result);
    }

    async remover(request: Request, response: Response) {
        try {
            const { id } = request.params;
            await DietaSchema.deleteOne({ _id : id});
            response.status(200).json({
                msg: "Dieta excluida com êxito!",
                erro: false
            });
        } catch (error) {
            response.status(400).json({
                objeto: error,
                msg: "Falha ao deletar a Dieta!!",
                erro: true
            }); 
        }
    }

}

export { DietaController };