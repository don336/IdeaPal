import { Router } from "express";
import Controller from "../../../contoroller/Article";

const articleRoute = Router();

articleRoute.get("/", Controller.getArticles);
articleRoute.get("/:id", Controller.getArticle);
articleRoute.post("/", Controller.PostArticle);
articleRoute.put("/:id", Controller.updateArticle);
articleRoute.delete("/:id", Controller.deleteArticle);

export default articleRoute;
