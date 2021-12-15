const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');


class UserService {

  constructor(){
    this.users = [];
    this.pool = pool;
    this.pool.on('error',(err) => console.error(eer));
  }

  async create(data){
     return data;
  }

   async find() {

    const query = 'SELECT * FROM public.usuario';
    const rta = await this.pool.query(query);
    return rta.rows;
  }
     // const rta = await client.query('SELECT * FROM usuario ')

  async findOne(id){
    return { id };

  }




}

module.exports = UserService;
