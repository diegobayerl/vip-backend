import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Requests from '../models/Requests';
import requestsView from '../views/requests_view';

export default {
    async index(request: Request, response: Response) {
        const requestsRepository = getRepository(Requests);

        const requests = await requestsRepository.find();

        return response.json(requestsView.renderMany(requests));
    },

    async show(request: Request, response: Response) {

        const { idUser } = request.params;

        const requestsRepository = getRepository(Requests);

        const requests = await requestsRepository.find({
            idUser: Number(idUser),
        });

        return response.json(requestsView.renderMany(requests));

    },

    async update(request: Request, response: Response) {

        const { id } = request.params;

        const requestsRepository = getRepository(Requests);

        await requestsRepository.update(id,{
            status: true,
        });

        return response.json({ message: "request fishined"});

    },

    async create(request: Request, response: Response) {

        const {
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
        } = request.body;


        const requestsRepository = getRepository(Requests);

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
        })

        await schema.validate(data, {
            abortEarly: false,
        })

        const requests = requestsRepository.create(data);

        await requestsRepository.save(requests);

        return response.status(201).json(requests);

    },
};