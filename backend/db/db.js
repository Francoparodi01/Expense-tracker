const mongoose = require('mongoose');

const db = async() =>{
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Base conectada')
    } catch (error) {
        console.log('Error al conectar a la bd')
    }
}

module.exports = {db}