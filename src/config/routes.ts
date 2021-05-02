import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController"
import { DietaController } from "../controllers/DietaController"
import { RefeicaoController } from "../controllers/RefeicaoController"

const router = Router();
const usuarioController = new UsuarioController();
const dietaController = new DietaController();
const refeicaoController = new RefeicaoController();

// ROTAS USUARIO
router.post("/usuario/cadastrar", usuarioController.cadastrar);
router.get("/usuario/buscar/:id", usuarioController.buscar);
router.get("/usuario/listar", usuarioController.listar);
router.post("/usuario/alterar/:id", usuarioController.alterar);
router.delete("/usuario/remover/:id", usuarioController.remover);

// ROTAS DIETA
router.post("/dieta/cadastrar", dietaController.cadastrarDieta);
router.get("/dieta/buscar/:id", dietaController.buscarDieta);
router.get("/dieta/listar", dietaController.listarDieta);
router.post("/dieta/alterar/:id", dietaController.alterarDieta);
router.delete("/dieta/remover/:id", dietaController.remover);

// ROTAS REFEICAO
router.post("/refeicao/cadastrar", refeicaoController.cadastrar);
router.get("/refeicao/buscar/:id", refeicaoController.buscar);
router.get("/refeicao/listar", refeicaoController.listar);
router.post("/refeicao/alterar/:id", refeicaoController.alterar);
router.delete("/refeicao/remover/:id", refeicaoController.remover);

export { router };