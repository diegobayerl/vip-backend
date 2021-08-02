import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Users from '../models/Users';
import UsersView from '../views/users_view';

export default {

    async index(request: Request, response: Response) {

        const usesRepository = getRepository(Users);

        const users = await usesRepository.find();

        return response.json(UsersView.renderMany(users));

    },

    async show(request: Request, response: Response) {

        const { id } = request.params;

        const usesRepository = getRepository(Users);

        const user = await usesRepository.findOneOrFail(id);

        return response.json(UsersView.render(user));

    },

    async showFilter(request: Request, response: Response) {

        const { telephone } = request.query;

        const usesRepository = getRepository(Users);

        const user = await usesRepository.findOne({
            telephone: String(telephone),
        });

        if(user){
            return response.json(UsersView.render(user));
        }

        return response.json({ message: "not found"});
       
    },

    async update(request: Request, response: Response){
        const { id } = request.params;

        const data = request.body;

        const updateUserRepository = getRepository(Users);

        await updateUserRepository.update(id, data);

        const requestUpdate = await updateUserRepository.findOne(id);

        return response.json(requestUpdate);
    },

    async delete(request: Request, response: Response){
        const { id } = request.params;

        const UserRepository = getRepository(Users);

        await UserRepository.delete(id);

        return response.json({message: "Successfully deleted User"});
    },

    async create(request: Request, response: Response) {

        const {
            name,
            telephone,
            city,
            bairro,
            rua,
            number,
            reference,
            note,
            } = request.body;
        
            const usesRepository = getRepository(Users);

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
            })
            
            const user = usesRepository.create(data);
        
            await usesRepository.save(user);
        
            return response.status(201).json(user);

    }
};