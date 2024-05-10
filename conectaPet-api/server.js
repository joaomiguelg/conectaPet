const express = require('express');
const app = express();
const PORT = 3000;

// Rota GET para a raiz da API
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

// Rota GET para /api/data
app.get('/api/data', (req, res) => {
    const data = { message: 'Esses são os dados da minha API!' };
    res.json(data);
});

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
