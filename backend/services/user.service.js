const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres');


class UserService {

  constructor(){}

  async create(data){
     return data;
  }

  async find() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM public.usuario');
    return rta.rows;
  }
     // const rta = await client.query('SELECT * FROM usuario ')

  async findOne(id){
    return { id };

  }




}

module.exports = UserService;
