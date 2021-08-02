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
const Users_1 = __importDefault(require("../models/Users"));
const users_view_1 = __importDefault(require("../views/users_view"));
exports.default = {
    async index(request, response) {
        const usesRepository = typeorm_1.getRepository(Users_1.default);
        const users = await usesRepository.find();
        return response.json(users_view_1.default.renderMany(users));
    },
    async show(request, response) {
        const { id } = request.params;
        const usesRepository = typeorm_1.getRepository(Users_1.default);
        const user = await usesRepository.findOneOrFail(id);
        return response.json(users_view_1.default.render(user));
    },
    async showFilter(request, response) {
        const { telephone } = request.query;
        const usesRepository = typeorm_1.getRepository(Users_1.default);
        const user = await usesRepository.findOne({
            telephone: String(telephone),
        });
        if (user) {
            return response.json(users_view_1.default.render(user));
        }
        return response.json({ message: "not found" });
    },
    async update(request, response) {
        const { id } = request.params;
        const data = request.body;
        const updateUserRepository = typeorm_1.getRepository(Users_1.default);
        await updateUserRepository.update(id, data);
        const requestUpdate = await updateUserRepository.findOne(id);
        return response.json(requestUpdate);
    },
    async delete(request, response) {
        const { id } = request.params;
        const UserRepository = typeorm_1.getRepository(Users_1.default);
        await UserRepository.delete(id);
        return response.json({ message: "Successfully deleted User" });
    },
    async create(request, response) {
        const { name, telephone, city, bairro, rua, number, reference, note, } = request.body;
        const usesRepository = typeorm_1.getRepository(Users_1.default);
        const data = {
            name,
            telephone,
            city,
            bairro,
            rua,
            number,
            reference,
            note,
        };
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            telephone: Yup.string().required(),
            city: Yup.string().required(),
            bairro: Yup.string().required(),
            rua: Yup.string().required(),
            number: Yup.number().required(),
            reference: Yup.string().required(),
            note: Yup.string().required(),
        });
        await schema.validate(data, {
            abortEarly: false,
        });
        const user = usesRepository.create(data);
        await usesRepository.save(user);
        return response.status(201).json(user);
    }
};
