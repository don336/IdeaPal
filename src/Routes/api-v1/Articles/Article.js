import { Router } from 'express';
import Controller from '../../../contoroller/Article';

const articleRoute = Router();

articleRoute.get('/', Controller.getArticles);
articleRoute.get('/:id', Controller.getArticle);
articleRoute.post('/', Controller.PostArticle);
articleRoute.put('/', Controller.updateArticle);
articleRoute.delete('/', Controller.deleteArticle);

export default articleRoute;
