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
const Requests_1 = __importDefault(require("../models/Requests"));
const requests_view_1 = __importDefault(require("../views/requests_view"));
exports.default = {
    async index(request, response) {
        const requestsRepository = typeorm_1.getRepository(Requests_1.default);
        const requests = await requestsRepository.find();
        return response.json(requests_view_1.default.renderMany(requests));
    },
    async show(request, response) {
        const { idUser } = request.params;
        const requestsRepository = typeorm_1.getRepository(Requests_1.default);
        const requests = await requestsRepository.find({
            idUser: Number(idUser),
        });
        return response.json(requests_view_1.default.renderMany(requests));
    },
    async update(request, response) {
        const { id } = request.params;
        const requestsRepository = typeorm_1.getRepository(Requests_1.default);
        await requestsRepository.update(id, {
            status: true,
        });
        return response.json({ message: "request fishined" });
    },
    async create(request, response) {
        const { nameUser, telephone, idUser, idProduct, nameProduct, description, value, quantidade, entrega, valorEntrega, valorTotal, formaPag, bandeira, valorCliente, troco, } = request.body;
        const requestsRepository = typeorm_1.getRepository(Requests_1.default);
        const date = new Date();
        const hora = date.toLocaleTimeString();
        const dateCreate = date.toLocaleDateString();
        const status = false;
        const data = {
            nameUser,
            telephone,
            idUser,
            idProduct,
            nameProduct,
            description,
            value,
            quantidade,
            entrega,
            valorEntrega,
            valorTotal,
            formaPag,
            bandeira,
            valorCliente,
            troco,
            hora,
            dateCreate,
            status,
        };
        const schema = Yup.object().shape({
            nameUser: Yup.string().required(),
            telephone: Yup.string().required(),
            idUser: Yup.number().required(),
            idProduct: Yup.number().required(),
            nameProduct: Yup.string().required(),
            description: Yup.string().required(),
            value: Yup.number().required(),
            entrega: Yup.string().required(),
            valorEntrega: Yup.number().required(),
            valorTotal: Yup.number().required(),
            formaPag: Yup.string().required(),
            bandeira: Yup.string().required(),
            valorCliente: Yup.number().required(),
            troco: Yup.number().required(),
            hora: Yup.string().required(),
            dateCreate: Yup.string().required(),
            status: Yup.boolean().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const requests = requestsRepository.create(data);
        await requestsRepository.save(requests);
        return response.status(201).json(requests);
    },
};
