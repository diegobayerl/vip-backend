import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Products from '../models/Products';
import productsView from '../views/product_view';

import fs from 'fs';
import path from 'path';

export default {

    async index(request: Request, response: Response) { 

        const productRepository = getRepository(Products);

        const products = await productRepository.find();

        return response.json(productsView.renderMany(products));

    },

    async show(request: Request, response: Response) { 

        const { type } = request.query;


        const productRepository = getRepository(Products);

        const product = await productRepository.find({
            type: String(type),
        });

        return response.json(productsView.renderMany(product));

    },

    async showID(request: Request, response: Response) { 

        const { id } = request.params;

        const productRepository = getRepository(Products);

        const product = await productRepository.findOne(id);

        return response.json(productsView.render(product));

    },

    async showPromo(request: Request, response: Response) { 

        const { promotion } = request.query;

        const productRepository = getRepository(Products);

        const product = await productRepository.find({
            promotion: Boolean(promotion),
        });

        return response.json(productsView.renderMany(product));

    },

    async update(request: Request, response: Response) { 

        const { id } = request.params;

        const { filename } = request.file;
        const image = String(filename);

        const {
            name,
            type,
            value,
            description,
            promotion
        } = request.body;

        const data = {
            name,
            type,
            value,
            image,
            description,
            promotion: Boolean(promotion),
        };

        const productRepository = getRepository(Products);

        const product = await productRepository.findOne(id);
        const filePath = path.join(__dirname, '..', '..', 'uploads', `${product.image}`);

        fs.stat(filePath, (err, stats)=> {
            if(err){
                return console.log(err);
            };

            fs.unlink(filePath, (err)=>{
                if(err) return console.log(err);
                console.log('file update successfully');
            });
        });

        await productRepository.update(id, data);

        const productUpdate = await productRepository.findOne(id);

        return response.json(productUpdate);
      
    },

    async delete(request: Request, response: Response){
        const { id } = request.params;

        const productRepository = getRepository(Products);

        const product = await productRepository.findOne(id); 

        const filePath = path.join(__dirname, '..', '..', 'uploads', `${product.image}`);

        fs.stat(filePath, (err, stats) => {
            if(err){
                return console.log(err);
            };

            fs.unlink(filePath, (err)=>{
                if(err) return console.log(err);
                console.log('file deleted successfully');
            });
        });

        await productRepository.delete(id);

        return response.json({message: "Successfully deleted product"});
    },

    async create(request: Request, response: Response) {

        const {
            name,
            type,
            value,
            description,
            } = request.body;

            const { filename } = request.file;

            const promotion = false;
            const image = String(filename);

            const productsRepository = getRepository(Products);
           
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