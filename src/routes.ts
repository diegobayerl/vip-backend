import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'

import UsersControllers from './controllers/usesControlles';
import ProductsControllers from './controllers/productsControllers';
import RequestsControllers from './controllers/requestsControllers';


const routes = Router();
const upload = multer(uploadConfig);

routes.post('/user', UsersControllers.create);
routes.get('/users', UsersControllers.index);
routes.get('/user/:id', UsersControllers.show);
routes.get('/user', UsersControllers.showFilter); //user?telephone=1234567890
routes.put('/user/:id', UsersControllers.update);
routes.delete('/user/:id', UsersControllers.delete);

routes.post('/product', upload.single('image'), ProductsControllers.create);
routes.get('/product', ProductsControllers.show); //product?type=BC
routes.get('/product/:id', ProductsControllers.showID); //product?type=BC
routes.get('/productPromo', ProductsControllers.showPromo); //product?promotion=true
routes.put('/product/:id', upload.single('image'), ProductsControllers.update);
routes.get('/products', ProductsControllers.index);
routes.delete('/product/:id', ProductsControllers.delete);

routes.post('/request', RequestsControllers.create);
routes.get('/requests', RequestsControllers.index);
routes.get('/requests/:idUser', RequestsControllers.show);
routes.patch('/request/:id', RequestsControllers.update);

export default routes;