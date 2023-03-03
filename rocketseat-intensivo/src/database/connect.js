const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.jdqwi9d.mongodb.net/?retryWrites=true&w=majority`);
};

// para exportar
module.exports = connectToDatabase