const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transactions = [];

app.post('/api/deposit', (req, res) => {
    const { user, amount } = req.body;
    transactions.push({ user, amount, type: 'deposit', date: new Date() });
    res.json({ success: true, message: 'Depósito registrado com sucesso.' });
});

app.post('/api/withdraw', (req, res) => {
    const { user, amount } = req.body;
    transactions.push({ user, amount, type: 'withdraw', date: new Date() });
    res.json({ success: true, message: 'Saque solicitado com sucesso.' });
});

app.get('/api/transactions', (req, res) => {
    res.json(transactions);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
