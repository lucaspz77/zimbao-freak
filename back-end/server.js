const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.json());

// SUA CONEXÃO COM O MONGO ATLAS
const mongoURI = "mongodb+srv://admin:admin123@cluster0.deqgluq.mongodb.net/zimbaofreak?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(() => console.log("💪 CONECTADO AO MONGO ATLAS!"))
    .catch(err => console.error("❌ ERRO AO CONECTAR:", err));

// --- SCHEMAS E ROTAS ---
// Ajuste: Adicionado 'usuarios' e 'treinos' para o Mongo não se perder
const userSchema = new mongoose.Schema({
    name: String, 
    email: { type: String, unique: true }, 
    password: { type: String, required: true },
    goal: String, 
    freq: Number, 
    weight: Number, 
    height: Number, 
    age: Number
});
const User = mongoose.model('User', userSchema, 'usuarios');

const workoutSchema = new mongoose.Schema({
    userId: String, 
    exercicio: String, 
    carga: Number, 
    data: { type: Date, default: Date.now }
});
const Workout = mongoose.model('Workout', workoutSchema, 'treinos');

app.post('/usuarios', async (req, res) => {
    try {
        const novoUser = new User(req.body);
        await novoUser.save();
        res.status(201).json(novoUser);
    } catch (e) { 
        console.error("Erro no cadastro:", e);
        res.status(400).json({ message: "Erro ao cadastrar. E-mail já existe ou dados inválidos." }); 
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.json(user);
        } else {
            res.status(401).json({ message: "Credenciais inválidas" });
        }
    } catch (e) {
        res.status(500).json({ message: "Erro interno no servidor" });
    }
});

app.post('/salvar-treino', async (req, res) => {
    try {
        const treino = new Workout(req.body);
        await treino.save();
        res.json(treino);
    } catch (e) {
        res.status(500).json({ message: "Erro ao salvar treino" });
    }
});

app.get('/meus-treinos/:userId', async (req, res) => {
    try {
        const treinos = await Workout.find({ userId: req.params.userId });
        res.json(treinos);
    } catch (e) {
        res.status(500).json({ message: "Erro ao buscar treinos" });
    }
});

// --- AJUSTE DE PORTA PARA O RENDER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando na porta ${PORT}`);
});