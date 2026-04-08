const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Essencial para o celular acessar
const app = express();

app.use(cors()); 
app.use(express.json());

// SUA CONEXÃO COM O MONGO ATLAS
const mongoURI = "mongodb+srv://zambalucaspastro_db_user:zamba123@cluster0.deqgluq.mongodb.net/zimbao?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => console.log("💪 CONECTADO AO MONGO ATLAS!"))
    .catch(err => console.error("❌ ERRO AO CONECTAR:", err));

// --- SCHEMAS E ROTAS (SUA BASE) ---
const userSchema = new mongoose.Schema({
    name: String, email: { type: String, unique: true }, password: { type: String, required: true },
    goal: String, freq: Number, weight: Number, height: Number, age: Number
});
const User = mongoose.model('User', userSchema);

const workoutSchema = new mongoose.Schema({
    userId: String, exercicio: String, carga: Number, data: { type: Date, default: Date.now }
});
const Workout = mongoose.model('Workout', workoutSchema);

app.post('/usuarios', async (req, res) => {
    try {
        const novoUser = new User(req.body);
        await novoUser.save();
        res.status(201).json(novoUser);
    } catch (e) { res.status(400).json({ message: "E-mail já cadastrado!" }); }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) res.json(user);
    else res.status(401).json({ message: "Credenciais inválidas" });
});

app.post('/salvar-treino', async (req, res) => {
    const treino = new Workout(req.body);
    await treino.save();
    res.json(treino);
});

app.get('/meus-treinos/:userId', async (req, res) => {
    const treinos = await Workout.find({ userId: req.params.userId });
    res.json(treinos);
});

// --- AJUSTE DE PORTA PARA O RENDER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando na porta ${PORT}`);
});