import { Router } from 'express';
import { getIndexPage } from '../controllers/indexController.js';

const indexRouter = Router();

// HTTP Request used to render the home page
indexRouter.get('/', getIndexPage);

export default indexRouter;
