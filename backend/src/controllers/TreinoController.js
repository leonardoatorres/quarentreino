const connection = require('../database/connection')

module.exports = {

    async index(request, response){
        const treinos = await connection('treinos').select('*');

        return response.json(treinos);
    },

    async create(request, response){
        const {aquecimento, wod} = request.body;

        await connection('treinos').insert({
            aquecimento,
            wod
        })
    
        return response.json({}) 
    }
}