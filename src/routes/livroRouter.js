import { Router } from "express";
import { buscarLivros, criarLivros, deletarLivros, editarLivros, getLivros } from "../controllers/livrosControllers";

const router = Router();

router.get('/', getLivros);   
router.get("/criar", criarLivros);
router.post("/:id", buscarLivros);
router.get("/:id", editarLivros);
router.put ("/editar/:id", editarLivros);
router.delete("/remover/:id", deletarLivros);

export default router;