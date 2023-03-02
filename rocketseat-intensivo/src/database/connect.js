const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.jdqwi9d.mongodb.net/?retryWrites=true&w=majority`, (error) => {
            if(error) {
                return console.log('conecção falhou');
            }

            return console.log('conecção bem sucedida')
    })
}

// para exportar
module.exports = connectToDatabase