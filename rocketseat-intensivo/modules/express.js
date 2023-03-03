const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());



app.get('/home', (req, res) =>{
        res.contentType('application/html');
        res.status(200).send('eu sou programador')
})

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'alexandre',
            email: 'alexandrecoimbra44@gmail.com'
        },
        {
            name: 'Alessandra',
            email: 'alegremistinha19@gmail.com'
        },
    ]

    res.status(200).json(users);
})

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