import { model, Schema } from "mongoose";

const usuarioSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "O campo NOME é obrigatório!"],
        },
        email: {
            type: String,
            required: [true, "O campo EMAIL é obrigatório!"],
            unique: true
        },
        data_nascimento: {
            type: Date,
            required: [true, "O campo DATA_NASCIMENTO é obrigatório!"]
        },
        recomendacao_hidrica: {
            type: String,
            required: [true, "O campo RECOMENDACAO_HIDRICA é obrigatório!"],
        },
        dietas: [{
            type: Schema.Types.ObjectId,
            ref: "Dieta",
        }]
    },
    {
        timestamps: true,
    }
);

export default model("usuario", usuarioSchema);