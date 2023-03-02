const express = require('express');

const app = express();



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

const port = 8080

app.listen(port, () => console.log(`rodando na porta ${port}`))