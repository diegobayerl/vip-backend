"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("./config/upload"));
const usesControlles_1 = __importDefault(require("./controllers/usesControlles"));
const productsControllers_1 = __importDefault(require("./controllers/productsControllers"));
const requestsControllers_1 = __importDefault(require("./controllers/requestsControllers"));
const routes = express_1.Router();
const upload = multer_1.default(upload_1.default);
routes.post('/user', usesControlles_1.default.create);
routes.get('/users', usesControlles_1.default.index);
routes.get('/user/:id', usesControlles_1.default.show);
routes.get('/user', usesControlles_1.default.showFilter);
routes.put('/user/:id', usesControlles_1.default.update);
routes.delete('/user/:id', usesControlles_1.default.delete);
routes.post('/product', upload.single('image'), productsControllers_1.default.create);
routes.get('/product', productsControllers_1.default.show);
routes.get('/product/:id', productsControllers_1.default.showID);
routes.get('/productPromo', productsControllers_1.default.showPromo);
routes.put('/product/:id', upload.single('image'), productsControllers_1.default.update);
routes.get('/products', productsControllers_1.default.index);
routes.delete('/product/:id', productsControllers_1.default.delete);
routes.post('/request', requestsControllers_1.default.create);
routes.get('/requests', requestsControllers_1.default.index);
routes.get('/requests/:idUser', requestsControllers_1.default.show);
routes.patch('/request/:id', requestsControllers_1.default.update);
exports.default = routes;