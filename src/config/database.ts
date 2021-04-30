import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://topicos:topicos@aulajs.skswt.mongodb.net/JedaiNutri?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Conectado ao BD!");
  })
  .catch((error: any) => {
    console.log(`Erro ao conectar com BD: ${error}`);
  });

export  { mongoose };