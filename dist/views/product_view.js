"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(product) {
        return {
            id: product.id,
            name: product.name,
            type: product.type,
            value: product.value,
            description: product.description,
            promotion: product.promotion,
            url: `http://10.0.0.182:3333/uploads/${product.image}`,
        };
    },
    renderMany(product) {
        return product.map(product => this.render(product));
    }
};
