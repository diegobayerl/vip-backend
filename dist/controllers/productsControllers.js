"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Yup = __importStar(require("yup"));
const Products_1 = __importDefault(require("../models/Products"));
const product_view_1 = __importDefault(require("../views/product_view"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.default = {
    async index(request, response) {
        const productRepository = typeorm_1.getRepository(Products_1.default);
        const products = await productRepository.find();
        return response.json(product_view_1.default.renderMany(products));
    },
    async show(request, response) {
        const { type } = request.query;
        const productRepository = typeorm_1.getRepository(Products_1.default);
        const product = await productRepository.find({
            type: String(type),
        });
        return response.json(product_view_1.default.renderMany(product));
    },
    async showID(request, response) {
        const { id } = request.params;
        const productRepository = typeorm_1.getRepository(Products_1.default);
        const product = await productRepository.findOne(id);
        return response.json(product_view_1.default.render(product));
    },
    async showPromo(request, response) {
        const { promotion } = request.query;
        const productRepository = typeorm_1.getRepository(Products_1.default);
        const product = await productRepository.find({
            promotion: Boolean(promotion),
        });
        return response.json(product_view_1.default.renderMany(product));
    },
    async update(request, response) {
        const { id } = request.params;
        const { filename } = request.file;
        const image = String(filename);
        const { name, type, value, description, promotion } = request.body;
        const data = {
            name,
            type,
            value,
            image,
            description,
            promotion: Boolean(promotion),
        };
        const productRepository = typeorm_1.getRepository(Products_1.default);
        const product = await productRepository.findOne(id);
        const filePath = path_1.default.join(__dirname, '..', '..', 'uploads', `${product.image}`);
        fs_1.default.stat(filePath, (err, stats) => {
            if (err) {
                return console.log(err);
            }
            ;
            fs_1.default.unlink(filePath, (err) => {
                if (err)
                    return console.log(err);
                console.log('file update successfully');
            });
        });
        await productRepository.update(id, data);
        const productUpdate = await productRepository.findOne(id);
        return response.json(productUpdate);
    },
    async delete(request, response) {
        const { id } = request.params;
        const productRepository = typeorm_1.getRepository(Products_1.default);
        const product = await productRepository.findOne(id);
        const filePath = path_1.default.join(__dirname, '..', '..', 'uploads', `${product.image}`);
        fs_1.default.stat(filePath, (err, stats) => {
            if (err) {
                return console.log(err);
            }
            ;
            fs_1.default.unlink(filePath, (err) => {
                if (err)
                    return console.log(err);
                console.log('file deleted successfully');
            });
        });
        await productRepository.delete(id);
        return response.json({ message: "Successfully deleted product" });
    },
    async create(request, response) {
        const { name, type, value, description, } = request.body;
        const { filename } = request.file;
        const promotion = false;
        const image = String(filename);
        const productsRepository = typeorm_1.getRepository(Products_1.default);
        const data = {
            name,
            type,
            value,
            image,
            description,
            promotion
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            type: Yup.string().required(),
            value: Yup.number().required(),
            description: Yup.string().required(),
            image: Yup.string().required(),
            promotion: Yup.boolean().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const product = productsRepository.create(data);
        await productsRepository.save(product);
        return response.status(201).json(product);
    },
};
