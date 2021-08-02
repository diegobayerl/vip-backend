"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(request) {
        return {
            id: request.id,
            nameUser: request.nameUser,
            telephone: request.telephone,
            idUser: request.idUser,
            idProduct: request.idProduct,
            nameProduct: request.nameProduct,
            description: request.description,
            value: request.value,
            quantidade: request.quantidade,
            entrega: request.entrega,
            valorEntrega: request.valorEntrega,
            valorTotal: request.valorTotal,
            formaPag: request.formaPag,
            bandeira: request.bandeira,
            valorCliente: request.valorCliente,
            troco: request.troco,
            hora: request.hora,
            date: request.dateCreate,
            status: request.status,
        };
    },
    renderMany(requests) {
        return requests.map(request => this.render(request));
    }
};
