import { Router } from "express";
import Controller from "../../../contoroller/Article";
import validation from "../../../middleware/validation";

const articleRoute = Router();

articleRoute.get("/", Controller.getArticles);
articleRoute.get("/:id", Controller.getArticle);
articleRoute.post("/", validation.saveVlidation, Controller.PostArticle);
articleRoute.put("/:id", Controller.updateArticle);
articleRoute.delete("/:id", Controller.deleteArticle);

export default articleRoute;
