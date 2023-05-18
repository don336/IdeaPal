import { Router } from 'express';
import articleRoute from './Articles/Article';
const Route = Router();

Route.use('/api/v1/articles', articleRoute);

export default Route;
