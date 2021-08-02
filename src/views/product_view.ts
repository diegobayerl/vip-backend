import Products from '../models/Products';

export default {
    render(product: Products){
        return {

            id: product.id,
            name: product.name,
            type: product.type,
            value: product.value,
            description: product.description,
            promotion: product.promotion,
            url: `https://vip-back-end.herokuapp.com/uploads/${product.image}`,

        };
    },

    renderMany(product: Products[]){
        return product.map(product => this.render(product));
    }
};