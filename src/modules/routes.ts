import { Router } from 'express';
import likeRouter from './like/routes';
import dastavkaRouter from './dastavka/routes';
import productsRouter from './products/routes';

export default Router()
	.use('/like', likeRouter)
	.use('/dastavka', dastavkaRouter)
	.use('/product', productsRouter);
