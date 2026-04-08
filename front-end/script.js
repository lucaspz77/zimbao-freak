const MONTHS = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

// 1. BASE DE DADOS COMPLETA
const EXERCISES_DATABASE = [
    { id: 1, cat: "Peito", name: "Supino Reto Barra", target: "Peitoral Maior", desc: "Clássico para massa bruta.", tip: "Ponte leve com a coluna." },
    { id: 2, cat: "Peito", name: "Supino Inclinado Halteres", target: "Peitoral Superior", desc: "Foco na parte de cima do peito.", tip: "Não encoste os halteres." },
    { id: 3, cat: "Peito", name: "Crucifixo Reto", target: "Peitoral", desc: "Isolamento total.", tip: "Cotovelos levemente flexionados." },
    { id: 4, cat: "Peito", name: "Crossover Polia Alta", target: "Peitoral Inferior", desc: "Definição do miolo e base.", tip: "Esmague no final do movimento." },
    { id: 5, cat: "Peito", name: "Supino Declinado", target: "Peitoral Inferior", desc: "Foco na base do peito.", tip: "Cuidado com o rosto na barra." },
    { id: 6, cat: "Peito", name: "Flexão de Braços", target: "Peitoral Geral", desc: "Básico e funcional.", tip: "Mantenha o core rígido." },
    { id: 7, cat: "Peito", name: "Chest Press Máquina", target: "Peitoral", desc: "Segurança e carga alta.", tip: "Ajuste o banco na altura do peito." },
    { id: 8, cat: "Peito", name: "Peck Deck (Voador)", target: "Estrias do Peito", desc: "Isolamento mecânico.", tip: "Não deixe o peso bater." },
    { id: 9, cat: "Peito", name: "Supino Reto Halteres", target: "Estabilizadores", desc: "Maior amplitude que a barra.", tip: "Desça até sentir alongar." },
    { id: 10, cat: "Peito", name: "Pull Over", target: "Peitoral/Serrátil", desc: "Expansão da caixa torácica.", tip: "Mantenha os braços quase retos." },
    { id: 11, cat: "Costas", name: "Puxada Alta (Pulley)", target: "Dorsais (Largura)", desc: "Puxe para o peito.", tip: "Não balance o tronco." },
    { id: 12, cat: "Costas", name: "Remada Curvada Barra", target: "Dorsais (Espessura)", desc: "Puxada explosiva.", tip: "Coluna 45 graus sempre reta." },
    { id: 13, cat: "Costas", name: "Barra Fixa (Pull Up)", target: "Dorsais", desc: "O rei das costas largas.", tip: "Puxe até o queixo passar a barra." },
    { id: 14, cat: "Costas", name: "Remada Unilateral (Serrote)", target: "Grande Dorsal", desc: "Foco individual por lado.", tip: "Puxe o haltere em direção ao quadril." },
    { id: 15, cat: "Costas", name: "Levantamento Terra", target: "Cadeia Posterior", desc: "Força bruta total.", tip: "Barra colada na canela." },
    { id: 16, cat: "Costas", name: "Remada Baixa Triângulo", target: "Miolo das Costas", desc: "Puxada horizontal.", tip: "Aproxime as escápulas no final." },
    { id: 17, cat: "Costas", name: "Pulldown Corda", target: "Lats (Isolamento)", desc: "Braços estendidos.", tip: "Sinta o lats puxar, não o tríceps." },
    { id: 18, cat: "Costas", name: "Remada Cavalinho", target: "Espessura Total", desc: "Cargas extremas.", tip: "Peito aberto e joelhos flexionados." },
    { id: 19, cat: "Costas", name: "Lombar (Hiperextensão)", target: "Eretores da Espinha", desc: "Proteção da coluna.", tip: "Não ultrapasse a linha reta." },
    { id: 20, cat: "Costas", name: "Puxada Triângulo", target: "Lats Inferiores", desc: "Pegada fechada.", tip: "Leve o triângulo no peito inferior." },
    { id: 21, cat: "Pernas", name: "Agachamento Livre", target: "Quadríceps/Glúteo", desc: "O construtor de monstros.", tip: "Quebre a paralela (90 graus)." },
    { id: 22, cat: "Pernas", name: "Leg Press 45", target: "Quadríceps", desc: "Pressão total nas pernas.", tip: "Não trave os joelhos no topo." },
    { id: 23, cat: "Pernas", name: "Extensora", target: "Quadríceps (Isolado)", desc: "Foco no desenho da coxa.", tip: "Pico de contração de 1 seg." },
    { id: 24, cat: "Pernas", name: "Flexora Deitado", target: "Isquiotibiais", desc: "Posterior de coxa.", tip: "Mantenha o quadril colado no banco." },
    { id: 25, cat: "Pernas", name: "Stiff Barra", target: "Posterior/Glúteo", desc: "Alongamento máximo.", tip: "Desça a barra rente às pernas." },
    { id: 26, cat: "Pernas", name: "Afundo/Passada", target: "Glúteo/Perna", desc: "Equilíbrio e potência.", tip: "Passo largo para focar em glúteo." },
    { id: 27, cat: "Pernas", name: "Hack Squat", target: "Quadríceps Exterior", desc: "Padrão de agachamento fixo.", tip: "Pés baixos na plataforma focam quadríceps." },
    { id: 28, cat: "Pernas", name: "Cadeira Abdutora", target: "Glúteo Médio", desc: "Lateral do quadril.", tip: "Incline o tronco para frente." },
    { id: 29, cat: "Pernas", name: "Cadeira Adutora", target: "Interno de Coxa", desc: "Miolo da perna.", tip: "Movimento controlado." },
    { id: 30, cat: "Pernas", name: "Elevação Pélvica", target: "Glúteo Máximo", desc: "O melhor para glúteos.", tip: "Esmague em cima." },
    { id: 31, cat: "Pernas", name: "Panturrilha em Pé", target: "Gastrocnêmio", desc: "Massa da batata da perna.", tip: "Alongue tudo embaixo." },
    { id: 32, cat: "Pernas", name: "Panturrilha Sentado", target: "Sólleo", desc: "Largura da panturrilha.", tip: "Frequência alta de reps." },
    { id: 33, cat: "Pernas", name: "Agachamento Sumô", target: "Adutores/Glúteo", desc: "Base aberta.", tip: "Joelhos apontando para fora." },
    { id: 34, cat: "Pernas", name: "Flexora Sentado", target: "Isquiotibiais", desc: "Isolamento sentado.", tip: "Puxe com força e solte devagar." },
    { id: 35, cat: "Pernas", name: "Sissy Squat", target: "Quadríceps (Gota)", desc: "Foco no vasto medial.", tip: "Use o apoio para segurança." },
    { id: 36, cat: "Ombros", name: "Desenvolvimento Militar", target: "Deltóide Anterior", desc: "Ombros de titã.", tip: "Trave o core." },
    { id: 37, cat: "Ombros", name: "Elevação Lateral Halteres", target: "Deltóide Lateral", desc: "Largura dos ombros.", tip: "Pense em empurrar para os lados." },
    { id: 38, cat: "Ombros", name: "Elevação Frontal", target: "Deltóide Anterior", desc: "Frente do ombro.", tip: "Não ultrapasse a linha dos olhos." },
    { id: 39, cat: "Ombros", name: "Crucifixo Inverso", target: "Deltóide Posterior", desc: "Postura e detalhe.", tip: "Não use o trapézio." },
    { id: 40, cat: "Ombros", name: "Arnold Press", target: "Deltóide Total", desc: "Rotação de 180 graus.", tip: "Movimento fluido." },
    { id: 41, cat: "Ombros", name: "Remada Alta Polia", target: "Deltóide/Trapézio", desc: "Foco em trapézio superior.", tip: "Cotovelos acima dos punhos." },
    { id: 42, cat: "Ombros", name: "Encolhimento Barra", target: "Trapézio Superior", desc: "Pescoço de touro.", tip: "Apenas suba, não gire os ombros." },
    { id: 43, cat: "Ombros", name: "Face Pull Corda", target: "Posterior/Manguito", desc: "Saúde do ombro.", tip: "Puxe a corda na altura da testa." },
    { id: 44, cat: "Ombros", name: "Elevação Lateral Polia", target: "Deltóide Lateral", desc: "Tensão constante.", tip: "Passe o cabo por trás das pernas." },
    { id: 45, cat: "Ombros", name: "Desenvolvimento Halteres", target: "Deltóide Anterior", desc: "Estabilidade e carga.", tip: "Encoste levemente em cima." },
    { id: 46, cat: "Bíceps", name: "Rosca Direta Barra W", target: "Bíceps (Massa)", desc: "O clássico.", tip: "Não balance os cotovelos." },
    { id: 47, cat: "Bíceps", name: "Rosca Alternada", target: "Braquial/Bíceps", desc: "Supinação no topo.", tip: "Gire o punho para fora." },
    { id: 48, cat: "Bíceps", name: "Rosca Martelo", target: "Braquiorradial", desc: "Largura do braço.", tip: "Pegada neutra." },
    { id: 49, cat: "Bíceps", name: "Rosca Scott", target: "Pico do Bíceps", desc: "Isolamento total.", tip: "Não estenda 100% para proteger o tendão." },
    { id: 50, cat: "Bíceps", name: "Rosca Concentrada", target: "Bíceps Isolado", desc: "Desenho e pico.", tip: "Cotovelo na parte interna da coxa." },
    { id: 51, cat: "Tríceps", name: "Tríceps Testa Barra W", target: "Cabeça Longa", desc: "Massa do tríceps.", tip: "Leve a barra até a testa." },
    { id: 52, cat: "Tríceps", name: "Tríceps Corda Polia", target: "Cabeça Lateral", desc: "Definição 'ferradura'.", tip: "Abra a corda embaixo." },
    { id: 53, cat: "Tríceps", name: "Tríceps Pulley Barra", target: "Tríceps Geral", desc: "Carga e explosão.", tip: "Mantenha o corpo fixo." },
    { id: 54, cat: "Tríceps", name: "Tríceps Francês Halter", target: "Cabeça Longa", desc: "Alongamento máximo.", tip: "Mantenha os cotovelos fechados." },
    { id: 55, cat: "Tríceps", name: "Mergulho Paralelas", target: "Tríceps/Peito", desc: "Peso do corpo.", tip: "Corpo reco foca tríceps." },
    { id: 56, cat: "Tríceps", name: "Supino Fechado", target: "Tríceps (Carga)", desc: "Poder de empurrar.", tip: "Mãos na largura dos ombros." },
    { id: 57, cat: "Tríceps", name: "Coice Halter", target: "Tríceps (Detalhe)", desc: "Fim do treino.", tip: "Estenda totalmente o braço." },
    { id: 61, cat: "Abdômen", name: "Abdominal Supra", target: "Reto Abdominal", desc: "Parte superior.", tip: "Não puxe o pescoço." },
    { id: 62, cat: "Abdômen", name: "Elevação de Pernas", target: "Abdomen Inferior", desc: "Pochete.", tip: "Não encoste os pés no chão." },
    { id: 63, cat: "Abdômen", name: "Prancha Isométrica", target: "Core/Estabilidade", desc: "Resistência.", tip: "Corpo como uma tábua." },
    { id: 64, cat: "Abdômen", name: "Abdominal Infra no Banco", target: "Inferior", desc: "Foco em infra.", tip: "Suba o quadril levemente." },
    { id: 65, cat: "Abdômen", name: "Roda Abdominal", target: "Core Total", desc: "Nível avançado.", tip: "Não deixe a lombar selar." },
    { id: 68, cat: "Abdômen", name: "Vacuum", target: "Transverso", desc: "Cintura fina.", tip: "Solte todo o ar e sugue o umbigo." }
];

const METHODOLOGIES_DATABASE = [
    { name: "Low Volume (Heavy Duty)", desc: "Intensidade máxima.", protocol: "2 sets x 6-8 reps", color: "#ff4500" },
    { name: "High Volume (Volume Alemão)", desc: "Grande volume.", protocol: "10 sets x 10 reps", color: "#adff2f" },
    { name: "Powerlifting (Força Pura)", desc: "Carga máxima.", protocol: "5 sets x 3-5 reps", color: "#ffffff" },
    { name: "Padrão (Hipertrofia)", desc: "Equilíbrio.", protocol: "4 sets x 12 reps", color: "#adff2f" }
];

let currentUser = null;
let evolutionStore = { bench: [], mass: [] };

// AUTH & NAVIGATION
function toggleAuth() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('setup-form').classList.toggle('hidden');
}

async function handleLogin() {
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-pass').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const user = await response.json();

        if (response.ok) {
            localStorage.setItem('usuarioLogado', JSON.stringify(user));
            startApp(user);
        } else {
            alert(user.message || "Credenciais incorretas!");
        }
    } catch (error) {
        alert("Erro ao conectar no servidor. O back-end está rodando?");
    }
}

// CADASTRO CORRIGIDO COM NOVOS IDs
document.getElementById('main-setup').onsubmit = async function(e) {
    e.preventDefault();
    const user = { 
        name: document.getElementById('name').value, 
        email: document.getElementById('setup-email').value, 
        password: document.getElementById('setup-pass').value, 
        goal: document.getElementById('goal').value, 
        freq: parseInt(document.getElementById('freq').value),
        weight: parseFloat(document.getElementById('weight').value),
        height: parseFloat(document.getElementById('height').value),
        age: parseInt(document.getElementById('age').value)
    };

    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        if (response.ok) {
            alert("Monstro cadastrado! Faça login agora.");
            toggleAuth();
        } else {
            const res = await response.json();
            alert("Erro: " + res.message);
        }
    } catch (error) {
        alert("Erro no servidor.");
    }
};

async function startApp(user) {
    currentUser = user;
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    
    if(document.getElementById('user-header')) document.getElementById('user-header').style.display = 'flex';
    document.getElementById('header-display-name').innerText = user.name.toUpperCase();
    document.getElementById('header-display-goal').innerText = user.goal.toUpperCase();
    document.getElementById('header-display-weight').innerText = user.weight;
    
    document.getElementById('nav-display-name').innerText = user.name.split(' ')[0].toUpperCase();
    document.getElementById('nav-display-goal').innerText = user.goal.toUpperCase();

    const options = EXERCISES_DATABASE.sort((a,b) => a.name.localeCompare(b.name))
                    .map(ex => `<option value="${ex.name}">${ex.name}</option>`).join('');
    document.getElementById('log-exercise').innerHTML = options;
    document.getElementById('filter-chart-exercise').innerHTML = options;

    await carregarCargasDoBanco();
    injectAcademyTab();
    generateStructuredWorkout(user);
    renderWiki(); 
    calculateDiet(user);
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    location.reload();
}

async function carregarCargasDoBanco() {
    try {
        const response = await fetch(`http://localhost:3000/meus-treinos/${currentUser._id || currentUser.email}`);
        const treinos = await response.json();
        evolutionStore.bench = treinos.map(t => ({
            val: t.carga,
            m: MONTHS[new Date(t.data).getMonth()],
            ex: t.exercicio
        }));
        renderCharts();
    } catch (e) { console.log("Erro cargas."); }
}

async function updateEvolution() {
    const exercise = document.getElementById('log-exercise').value;
    const benchVal = parseFloat(document.getElementById('log-bench').value);
    const massVal = parseFloat(document.getElementById('log-mass').value);
    
    if(benchVal > 0) {
        await fetch('http://localhost:3000/salvar-treino', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                userId: currentUser._id || currentUser.email, 
                exercicio: exercise, 
                carga: benchVal 
            })
        });
    }
    if(massVal > 0) {
        evolutionStore.mass.push({val: massVal, m: MONTHS[new Date().getMonth()]});
    }
    await carregarCargasDoBanco();
}

function changeTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

function calculateDiet(user) {
    let bmr = (10 * user.weight) + (6.25 * user.height) - (5 * user.age) + 5;
    let tdee = bmr * 1.55; 
    let calories, p, c, f;
    if(user.goal === 'hipertrofia') { calories = tdee + 400; p = user.weight * 2.2; f = user.weight * 0.9; }
    else if(user.goal === 'cutting') { calories = tdee - 500; p = user.weight * 2.4; f = user.weight * 0.7; }
    else { calories = tdee + 200; p = user.weight * 2.0; f = user.weight * 1.0; }
    c = (calories - (p*4) - (f*9)) / 4;
    document.getElementById('d-cal').innerText = Math.round(calories);
    document.getElementById('d-prot').innerText = Math.round(p);
    document.getElementById('d-carb').innerText = Math.round(c);
    document.getElementById('d-fat').innerText = Math.round(f);
    document.getElementById('meal-plan').innerHTML = `• Ovos, aveia e fruta.<br>• Arroz, Proteína e Vegetais.<br>• Proteína magra e legumes.`;
}

function injectAcademyTab() {
    const bottomBar = document.querySelector('.bottom-bar');
    if (!document.getElementById('btn-academy')) {
        const btn = document.createElement('div');
        btn.className = "nav-btn"; btn.id = "btn-academy";
        btn.innerHTML = '<i class="fas fa-graduation-cap"></i>';
        btn.onclick = () => changeTab('tab-academy', btn);
        bottomBar.appendChild(btn);
    }
    if (!document.getElementById('tab-academy')) {
        const tab = document.createElement('section');
        tab.id = 'tab-academy'; tab.className = 'tab-content';
        tab.innerHTML = `<h2 style="font-family:'Orbitron'; color: var(--primary);">FREAK ACADEMY</h2><div id="render-academy" class="workout-grid"></div>`;
        document.getElementById('dashboard').appendChild(tab);
    }
    document.getElementById('render-academy').innerHTML = METHODOLOGIES_DATABASE.map(m => `
        <div class="lib-card" style="border-left: 4px solid ${m.color}">
            <h3 style="color:${m.color}">${m.name}</h3>
            <p>${m.desc}</p><strong>${m.protocol}</strong>
        </div>`).join('');
}

function generateStructuredWorkout(user) {
    const container = document.getElementById('render-workout');
    container.innerHTML = "";
    const getById = (id) => EXERCISES_DATABASE.find(e => e.id === id);
    let method = METHODOLOGIES_DATABASE[3];
    if(user.goal === 'hipertrofia') method = METHODOLOGIES_DATABASE[1];
    if(user.goal === 'forca') method = METHODOLOGIES_DATABASE[2];
    if(user.goal === 'cutting') method = METHODOLOGIES_DATABASE[0];
    let workoutPlan = user.freq >= 5 ? [
        { title: "PUSH", ids: [1, 2, 36, 37, 51, 52] },
        { title: "PULL", ids: [15, 11, 12, 46, 48, 42] },
        { title: "LEGS", ids: [21, 22, 25, 23, 31, 62] }
    ] : [{ title: "FULL BODY", ids: [21, 1, 11, 36, 47, 61] }];
    workoutPlan.forEach(day => {
        const card = document.createElement('div');
        card.className = "day-card";
        let exHtml = day.ids.map(id => {
            const ex = getById(id);
            return `<div class="exercise-item"><strong>${ex.name}</strong><br><small>${method.protocol}</small></div>`;
        }).join('');
        card.innerHTML = `<h3>${day.title}</h3>${exHtml}`;
        container.appendChild(card);
    });
}

function renderWiki() {
    document.getElementById('render-wiki').innerHTML = EXERCISES_DATABASE.map(ex => `
        <div class="lib-card" data-search="${ex.name.toLowerCase()}">
            <span class="muscle-tag">${ex.cat}</span><h2>${ex.name}</h2><p>${ex.desc}</p>
        </div>`).join('');
}

function searchWiki() {
    const query = document.getElementById('wiki-search').value.toLowerCase();
    document.querySelectorAll('.lib-card').forEach(card => {
        card.style.display = card.getAttribute('data-search').includes(query) ? 'block' : 'none';
    });
}

function renderCharts() {
    const loadContainer = document.getElementById('chart-load');
    const exerciseFilter = document.getElementById('filter-chart-exercise').value;
    const filteredData = evolutionStore.bench.filter(d => d.ex === exerciseFilter);
    if(filteredData.length === 0) { loadContainer.innerHTML = "SEM DADOS"; return; }
    const max = Math.max(...filteredData.map(d => d.val)) * 1.2;
    loadContainer.innerHTML = filteredData.map(d => `
        <div class="bar-group"><div class="bar" style="height: ${(d.val/max)*100}%" data-value="${d.val}kg"></div>
        <div class="bar-label">${d.m}</div></div>`).join('');
}

window.onload = () => {
    const salvo = localStorage.getItem('usuarioLogado');
    if (salvo) startApp(JSON.parse(salvo));
};