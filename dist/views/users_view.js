"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(user) {
        return {
            id: user.id,
            name: user.name,
            telephone: user.telephone,
            city: user.city,
            bairro: user.bairro,
            number: user.number,
            reference: user.reference,
            note: user.note,
        };
    },
    renderMany(users) {
        return users.map(user => this.render(user));
    }
};
