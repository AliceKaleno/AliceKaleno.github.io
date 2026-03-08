/* PARTICLES */

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#7c3aed"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#7c3aed",
            opacity: 0.4
        },

        move: {
            enable: true,
            speed: 2
        }
    }
});


/* SCROLL ANIMATION */

const faders = document.querySelectorAll(".fade");

function reveal() {

    faders.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);


/* MATRIX EFFECT */

const canvas = document.getElementById("matrix");

if (canvas) {

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const letters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {

        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#7c3aed";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {

            const text = letters.charAt(Math.floor(Math.random() * letters.length));

            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;

        }

    }

    setInterval(draw, 35);

}


/* TERMINAL TYPING */

const terminalText = [
    "> Inicializando sistema...",
    "> Conectando ao servidor...",
    "> Usuário: Alice Maria",
    "> Especialidade: Cybersecurity",
    "> Carregando projetos...",
    "> Sistema pronto."
];

const terminal = document.querySelector(".terminal");

let lineIndex = 0;

function typeLine() {

    if (lineIndex < terminalText.length) {

        const p = document.createElement("p");
        p.textContent = terminalText[lineIndex];

        terminal.appendChild(p);

        lineIndex++;

        setTimeout(typeLine, 1000);

    }

}

typeLine();


/* SKILLS ANIMATION */

const skills = document.querySelectorAll(".bar span");
let skillsAnimated = false;

function animateSkills() {

    if (skillsAnimated) return;

    const section = document.querySelector("#skills");
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight) {

        skills.forEach(skill => {
            const width = skill.style.width;
            skill.style.width = width;
        });

        skillsAnimated = true;

    }

}

window.addEventListener("scroll", animateSkills);


/* GITHUB PROJECTS */

fetch("https://api.github.com/users/AliceKaleno/repos")
    .then(res => res.json())
    .then(data => {

        const grid = document.querySelector(".projects-grid");

        data.forEach(repo => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "Projeto no GitHub"}</p>
<a href="${repo.html_url}" target="_blank">Ver Projeto</a>
`;

            grid.appendChild(card);

        });

    });

/* NAVBAR SCROLL */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "#020617";
    } else {
        navbar.style.background = "#111827";
    }

});


/* DARK MODE */

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀️";
    }

});


/* CYBER ATTACK CHART */

const ctxChart = document.getElementById("attackChart");

if (ctxChart) {

    new Chart(ctxChart, {
        type: "doughnut",

        data: {
            labels: ["Phishing", "Malware", "Ransomware", "DDoS"],

            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: [
                    "#7c3aed",
                    "#9333ea",
                    "#a855f7",
                    "#c084fc"
                ]
            }]
        },

        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "white"
                    }
                }
            }
        }

    });

}


/* MAPA CYBER */

const map = document.getElementById("cyber-map");

function createAttack() {

    if (!map) return;

    const dot = document.createElement("div");

    dot.classList.add("attack");

    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";

    map.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 1500);

}

setInterval(createAttack, 400);


/* COUNTERS */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10);

        } else {

            counter.innerText = target.toLocaleString();

        }

    };

    updateCounter();

});


/* PHISHING SIMULADOR */

function phishingFail() {
    document.getElementById("phishingResult").textContent =
        "❌ Você caiu em um ataque de phishing.";
}

function phishingSafe() {
    document.getElementById("phishingResult").textContent =
        "✔️ Boa! Você evitou um ataque.";
}


/* PASSWORD LAB */

function checkPassword() {

    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("passwordResult");

    if (password.length < 6) {
        result.textContent = "Senha fraca";
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
        result.textContent = "Senha forte";
    } else {
        result.textContent = "Senha média";
    }

}

function generatePassword() {

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";

    let password = "";

    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("generatedPassword").textContent = password;

}


/* CHATBOT */

function sendMessage() {

    const input = document.getElementById("chatInput");
    const chat = document.getElementById("chatMessages");

    if (!input || !chat) return;

    const message = input.value.trim();

    if (message === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.textContent = message;

    chat.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";

    botMsg.innerHTML = getBotResponse(message.toLowerCase());

    chat.appendChild(botMsg);

    chat.scrollTop = chat.scrollHeight;

    input.value = "";

}



/* ABRIR E FECHAR CHAT */

function toggleChat() {

    const chat = document.getElementById("chatbot");

    if (chat.style.display === "flex") {

        chat.style.display = "none";
        document.body.classList.remove("chat-open");

    } else {

        chat.style.display = "flex";
        document.body.classList.add("chat-open");

    }

}


/* ROBÔ CYBERLY */

const cyberlyMessage =
    "Olá! Eu sou Cyberly 🤖 assistente virtual da Alice. Bem-vindo ao portfólio dela. Aqui você encontrará projetos, habilidades em desenvolvimento web e cybersecurity.";

let cyberIndex = 0;

function typeCyberly() {

    const element = document.getElementById("botTyping");

    if (!element) return;

    element.innerHTML = "";

    function typing() {

        if (cyberIndex < cyberlyMessage.length) {

            element.innerHTML += cyberlyMessage.charAt(cyberIndex);

            cyberIndex++;

            setTimeout(typing, 40);

        }

    }

    typing();

}

window.addEventListener("load", typeCyberly);

/* FECHAR ROBÔ */

function closeBot(){
  document.getElementById("welcomeBot").style.display = "none";
}

/* ================================
IA CONVERSACIONAL DO BIBOT
================================ */

function getBotResponse(message) {

    message = message.toLowerCase();

    /* SAUDAÇÕES */

    if (message.includes("oi") || message.includes("olá") || message.includes("hello")) {
        return "Olá 👋 Eu sou o Bibot, assistente da Alice. Digite <b>help</b> para ver comandos.";
    }

    /* AJUDA */

    if (message.includes("help")) {
        return `
Comandos disponíveis:<br><br>

about → sobre a Alice<br>
skills → habilidades<br>
projects → projetos<br>
github → repositórios<br>
linkedin → perfil profissional<br>
instagram → redes sociais<br>
contact → contato
`;
    }

    /* SOBRE */

    if (message.includes("about") || message.includes("alice")) {
        return `
Alice Maria da Silva é estudante de tecnologia focada em desenvolvimento web e cibersegurança.<br><br>

🎓 Técnica em Desenvolvimento de Sistemas pelo IFPE.<br>
🛡 Atualmente cursando Segurança Cibernética na Gran Faculdade.<br>
🚀 Interessada em desenvolvimento, segurança digital e inovação.
`;
    }

    /* SKILLS */

    if (message.includes("skills") || message.includes("habilidades")) {
        return `
Principais habilidades da Alice:<br><br>

💻 HTML<br>
🎨 CSS<br>
⚡ JavaScript<br>
🐍 Python<br>
🔷 C#<br>
🔐 Cybersecurity
`;
    }

    /* PROJETOS */

    if (message.includes("projects") || message.includes("projetos")) {
        return `
Projetos da Alice:<br><br>

📌 noticias-app<br>
📌 Hackathon Project<br>
📌 NOSSOAPPCLIMA<br>
📌 alice.site<br>
📌 appFeitoPorElas<br><br>

Digite <b>github</b> para abrir os repositórios.
`;
    }

    /* GITHUB */

    if (message.includes("github")) {
        return `<a href="https://github.com/AliceKaleno" target="_blank">Abrir GitHub da Alice</a>`;
    }

    /* LINKEDIN */

    if (message.includes("linkedin")) {
        return `<a href="https://www.linkedin.com/in/alice-maria-da-silva-47ab27367/" target="_blank">Abrir LinkedIn da Alice</a>`;
    }

    /* INSTAGRAM */

    if (message.includes("instagram")) {
        return `<a href="https://www.instagram.com/a.kalenno/" target="_blank">Abrir Instagram</a>`;
    }

    /* CONTATO */

    if (message.includes("contact") || message.includes("contato")) {
        return `
📧 Email: alicemariadasilvasilva81@gmail.com<br>
📱 Telefone: +55 (81) 99446-7601
`;
    }

    /* RECRUTADOR */

    if (message.includes("contratar") || message.includes("hire")) {
        return `
Ótima escolha! 🚀<br><br>

Alice está aberta a oportunidades nas áreas de:<br>

• Desenvolvimento Web<br>
• Cybersecurity<br>
• Tecnologia<br><br>

Entre em contato via LinkedIn ou Email.
`;
    }

    /* RESPOSTA PADRÃO */

    return "Não entendi 😅 Digite <b>help</b> para ver os comandos.";

}

const entrada = document.getElementById("entradaHacker");
const saida = document.getElementById("saidaHacker");

const senha = "alice";

let tentativas = 0;

function escrever(texto) {

    const p = document.createElement("p");
    p.innerHTML = texto;

    saida.appendChild(p);

    saida.scrollTop = saida.scrollHeight;

}

if (entrada) {

    entrada.addEventListener("keypress", function(e) {

        if (e.key === "Enter") {

            const comando = entrada.value.toLowerCase();

            escrever("> " + comando);

            if (comando === "analisar") {

                escrever("Analisando sistema...");
                escrever("Tamanho da senha detectado: 5 caracteres");

            } else if (comando === "decifrar") {

                escrever("Fragmento criptografado encontrado:");
                escrever("A _ _ C E");

            } else if (comando.startsWith("senha")) {

                const tentativa = comando.split(" ")[1];

                if (tentativa === senha) {

                    escrever("✔ ACESSO LIBERADO");
                    escrever("Bem-vindo, hacker 😎");

                } else {

                    tentativas++;

                    escrever("❌ ACESSO NEGADO");

                    if (tentativas >= 3) {

                        escrever("🚨 Firewall ativado. Sistema bloqueado.");
                        entrada.disabled = true;

                    }

                }

            } else {

                escrever("Comando desconhecido.");
                escrever("Use: analisar, decifrar ou senha [palavra]");

            }

            entrada.value = "";

        }

    });

}

let vantaEffect;

function ativarModoHacker() {

    document.body.classList.toggle("hacker-mode");

    const bg = document.getElementById("neural-bg");

    if (bg.style.display === "none" || bg.style.display === "") {

        bg.style.display = "block";

        vantaEffect = VANTA.NET({
            el: "#neural-bg",
            color: 0x7c3aed,
            backgroundColor: 0x000000,
            points: 12,
            maxDistance: 20,
            spacing: 18,
            mouseControls: true,
            touchControls: true
        });

    } else {

        bg.style.display = "none";

        if (vantaEffect) {
            vantaEffect.destroy();
        }

    }

}

const hackerBtn = document.getElementById("hackerButton");

if (hackerBtn) {
    hackerBtn.addEventListener("click", ativarModoHacker);
}

let buffer = "";

document.addEventListener("keydown", (e) => {

    buffer += e.key.toLowerCase();

    if (buffer.includes("hack") || buffer.includes("sudo")) {
        ativarModoHacker();
        buffer = "";
    }

    if (buffer.length > 10) {
        buffer = "";
    }

});

const mensagem = "E aí, quer saber mais sobre cibersegurança?";
let i = 0;

function digitar() {

    document.getElementById("bibotText").innerHTML = "";
    i = 0;

    function escrever() {

        if (i < mensagem.length) {

            document.getElementById("bibotText").innerHTML += mensagem.charAt(i);
            i++;

            setTimeout(escrever, 40);

        }

    }

    escrever();

}

function abrirBibot() {

    document.getElementById("bibotContainer").style.display = "flex";
    digitar();

}

function respostaSim() {

    window.open("https://www.kaspersky.com.br/resource-center/definitions/what-is-cyber-security", "_blank");

}

function respostaNao() {

    let texto = "Tudo bem! Aproveite ainda mais o portfólio da Alice. Por sinal... tá incrível, né? 😎";

    document.getElementById("bibotText").innerHTML = "";

    let j = 0;

    function digitar2() {

        if (j < texto.length) {

            document.getElementById("bibotText").innerHTML += texto.charAt(j);
            j++;

            setTimeout(digitar2, 40);

        } else {

            setTimeout(() => {
                fecharBibot();
            }, 2000)

        }

    }

    digitar2();

}

function fecharBibot() {

    document.getElementById("bibotContainer").style.display = "none";
    document.getElementById("lanterninha").style.display = "block";

}

function mostrarBibot() {

    document.getElementById("bibotContainer").style.display = "flex";
    document.getElementById("lanterninha").style.display = "none";

    digitar();

}


window.addEventListener("load", () => {

    const sendButton = document.getElementById("sendButton");
    const chatInput = document.getElementById("chatInput");

    if (sendButton) {
        sendButton.addEventListener("click", sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        });
    }

});

const photo = document.getElementById("alicePhoto")
const scanner = document.getElementById("aiScanner")

photo.addEventListener("click", () => {

photo.classList.add("shake")

setTimeout(() => {

photo.classList.remove("shake")

scanner.style.display = "flex"

}, 5000)

})

scanner.addEventListener("click", () => {

scanner.style.display = "none"

})
