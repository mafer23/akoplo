const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');


class UserService {

  constructor(){
    this.users = [];

  }

  async create(data){
     return data;
  }

   async find() {

    const query = 'SELECT * FROM public.usuario';
    const [data] = await sequelize.query(query);
    return data;
  }
     // const rta = await client.query('SELECT * FROM usuario ')

  async findOne(id){
    return { id };

  }




}

module.exports = UserService;
