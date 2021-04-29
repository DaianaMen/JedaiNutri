import { model, Schema } from "mongoose";

const dietaSchema = new Schema(
    {
        descricao: {
            type: String,
            required: [true, "O campo DESCRICAO é obrigatório!"]
        },
        data_inicio: {
            type: Date,
            required: [true, "O campo DATA_INICIO é obrigatório!"]
        },
        data_fim: {
            type: Date,
            required: [true, "O campo DATA_FIM é obrigatório!"]
        },
        usuario: {
            type: Schema.Types.ObjectId,
            ref: "Usuario",
            required: [true, "O campo USUARIO é obrigatório!"],
        },
        refeicoes: [{
            type: Schema.Types.ObjectId,
            ref: "Refeicao",
        }]
    },
    {
        timestamps: true,
    }
);

export default model("dieta", dietaSchema);