const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());



app.get('/users', async (req, res) =>{
       try {
            const users = await UserModel.find({});
            res.status(200).json(users)

       } catch (error) {
            return res.status(500).send(error.message)
       }
})

app.get('/users')

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch {
        res.status(500).send(error.message)
    }
    
})

const port = 8080

app.listen(port, () => console.log(`rodando na porta ${port}`))