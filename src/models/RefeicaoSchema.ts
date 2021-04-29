import { model, Schema } from "mongoose";

const refeicaoSchema = new Schema(
    {
        descricao: {
            type: String,
            required: [true, "O campo DESCRICAO é obrigatório!"]
        },
        horario: {
            type: String,
            required: [true, "O campo HORARIO é obrigatório!"]
        },
        refeicao: {
            type: Date,
            required: [true, "O campo REFEICAO é obrigatório!"]
        },
        dieta: {
            type: Schema.Types.ObjectId,
            ref: "Dieta",
            required: [true, "O campo USUARIO é obrigatório!"],
        },
    },
    {
        timestamps: true,
    }
);

export default model("refeicao", refeicaoSchema);