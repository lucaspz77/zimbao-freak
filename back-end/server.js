const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://zambalucaspastro_db_user:8q3ExxLBxlVXaEe1@cluster0.deqgluq.mongodb.net/zimbaofreak?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => console.log("💪 CONECTADO AO MONGO COM SUCESSO!"))
    .catch(err => console.error("❌ ERRO NO MONGO:", err));

// Esquema de Usuário
const userSchema = new mongoose.Schema({
    name: String, email: { type: String, unique: true }, password: String,
    goal: String, weight: Number, height: Number, age: Number, freq: Number
});
const Usuario = mongoose.model('Usuario', userSchema);

// NOVO: Esquema de Treino (Para salvar as cargas)
const treinoSchema = new mongoose.Schema({
    userId: String,
    exercicio: String,
    carga: Number,
    data: { type: Date, default: Date.now }
});
const Treino = mongoose.model('Treino', treinoSchema);

// Rotas de Usuário (Cadastro/Login) - [Mesmo código anterior...]
app.post('/usuarios', async (req, res) => {
    try { const u = new Usuario(req.body); await u.save(); res.status(201).send(u); }
    catch (e) { res.status(400).send(e); }
});

app.post('/login', async (req, res) => {
    const user = await Usuario.findOne({ email: req.body.email, password: req.body.password });
    user ? res.send(user) : res.status(401).send("Erro");
});

// NOVO: Rota para Salvar Carga
app.post('/salvar-treino', async (req, res) => {
    try {
        const novoTreino = new Treino(req.body);
        await novoTreino.save();
        res.status(201).send(novoTreino);
    } catch (e) { res.status(400).send(e); }
});

// NOVO: Rota para Buscar Cargas do Usuário
app.get('/meus-treinos/:userId', async (req, res) => {
    const treinos = await Treino.find({ userId: req.params.userId }).sort({ data: 1 });
    res.send(treinos);
});

app.listen(3000, () => console.log("🔥 Servidor rodando na porta 3000"));