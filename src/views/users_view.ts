import Users from '../models/Users';

export default {
    render(user: Users){
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

    renderMany(users: Users[]){
        return users.map(user => this.render(user));
    }
};