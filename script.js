/* PARTICLES */

particlesJS("particles-js", {
particles:{
number:{value:80},
color:{value:"#7c3aed"},
shape:{type:"circle"},
opacity:{value:0.5},
size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#7c3aed",
opacity:0.4
},

move:{enable:true,speed:2}
}
});


/* SCROLL ANIMATION */

const faders = document.querySelectorAll(".fade");

function reveal(){

faders.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add("show");
}

});

}

window.addEventListener("scroll",reveal);


/* MATRIX EFFECT */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
}

resizeCanvas();
window.addEventListener("resize",resizeCanvas);

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++){
drops[x] = 1;
}

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#7c3aed";
ctx.font = fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text = letters.charAt(Math.floor(Math.random()*letters.length));

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random()>0.975){
drops[i]=0;
}

drops[i]++;

}

}

setInterval(draw,35);


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

function typeLine(){

if(lineIndex < terminalText.length){

const p = document.createElement("p");

p.textContent = terminalText[lineIndex];

terminal.appendChild(p);

lineIndex++;

setTimeout(typeLine,1000);

}

}

typeLine();


/* SKILLS ANIMATION */

const skills = document.querySelectorAll(".bar span");
let skillsAnimated = false;

function animateSkills(){

if(skillsAnimated) return;

const section = document.querySelector("#skills");
const top = section.getBoundingClientRect().top;

if(top < window.innerHeight){

skills.forEach(skill=>{
const width = skill.style.width;
skill.style.width = width;
});

skillsAnimated = true;

}

}

window.addEventListener("scroll",animateSkills);


/* GITHUB PROJECTS */

const reposDesejados = [
"noticias-app",
"Hackthon",
"NOSSOAPPCLIMA",
"alice.site.",
"appFeitoPorElas"
];

fetch("https://api.github.com/users/AliceKaleno/repos")
.then(res => res.json())
.then(data => {

const grid = document.querySelector(".projects-grid");
grid.innerHTML = "";

data.forEach(repo => {

if(reposDesejados.includes(repo.name)){

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "Projeto no GitHub"}</p>
<a href="${repo.html_url}" target="_blank">Ver Projeto</a>
`;

grid.appendChild(card);

}

});

});


/* NAVBAR SCROLL */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){
navbar.style.background="#020617";
}else{
navbar.style.background="#111827";
}

});


/* DARK MODE */

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeBtn.textContent = "🌙";
}else{
themeBtn.textContent = "☀️";
}

});


/* CYBER ATTACK CHART */

const ctxChart = document.getElementById("attackChart");

if(ctxChart){

new Chart(ctxChart,{
type:"doughnut",

data:{
labels:["Phishing","Malware","Ransomware","DDoS"],

datasets:[{
data:[40,25,20,15],
backgroundColor:[
"#7c3aed",
"#9333ea",
"#a855f7",
"#c084fc"
]
}]
},

options:{
plugins:{
legend:{
labels:{color:"white"}
}
}
}

});

}


/* MAPA CYBER */

const map = document.getElementById("cyber-map");

function createAttack(){

if(!map) return;

const dot = document.createElement("div");

dot.classList.add("attack");

dot.style.left = Math.random()*100 + "%";
dot.style.top = Math.random()*100 + "%";

map.appendChild(dot);

setTimeout(()=>{dot.remove();},1500);

}

setInterval(createAttack,400);


/* COUNTERS */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;
const increment = target / 200;

if(current < target){

counter.innerText = Math.ceil(current + increment);
setTimeout(updateCounter,10);

}else{

counter.innerText = target.toLocaleString();

}

};

updateCounter();

});


/* PHISHING SIMULADOR */

function phishingFail(){
document.getElementById("phishingResult").textContent =
"❌ Você caiu em um ataque de phishing.";
}

function phishingSafe(){
document.getElementById("phishingResult").textContent =
"✔️ Boa! Você evitou um ataque.";
}


/* PASSWORD LAB */

function checkPassword(){

const password = document.getElementById("passwordInput").value;
const result = document.getElementById("passwordResult");

if(password.length < 6){
result.textContent = "Senha fraca";
}
else if(password.match(/[A-Z]/) && password.match(/[0-9]/)){
result.textContent = "Senha forte";
}
else{
result.textContent = "Senha média";
}

}

function generatePassword(){

const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";

let password="";

for(let i=0;i<12;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length));
}

document.getElementById("generatedPassword").textContent=password;

}


/* CHATBOT */

function sendMessage(){

const input = document.getElementById("chatInput");
const message = input.value.toLowerCase().trim();
const chat = document.getElementById("chatMessages");

if(message === "") return;

/* mensagem usuário */

const userMsg = document.createElement("div");
userMsg.className = "user-message";
userMsg.textContent = message;

chat.appendChild(userMsg);

/* resposta bot */

const botMsg = document.createElement("div");
botMsg.className = "bot-message";

const response = getBotResponse(message);

botMsg.innerHTML = response;

chat.appendChild(botMsg);

chat.scrollTop = chat.scrollHeight;

input.value="";

}


/* RESPOSTAS BOT */

function getBotResponse(message){

if(message.includes("help")){
return `
Comandos disponíveis:<br>
about<br>
skills<br>
projects<br>
github<br>
linkedin<br>
contact
`;
}

if(message.includes("about")){
return `
Alice é estudante de tecnologia focada em desenvolvimento web e está fazendo faculdade de cibersegurança.<br>
Técnica em Desenvolvimento de Sistemas pelo IFPE - Jaboatão dos Guararapes.
`;
}

if(message.includes("skills")){
return `
Skills:<br>
HTML<br>
CSS<br>
JavaScript<br>
Python<br>
C#<br>
Cybersecurity
`;
}

if(message.includes("projects")){
return `
Projetos:<br>
noticias-app<br>
Hackthon<br>
NOSSOAPPCLIMA<br>
alice.site<br>
appFeitoPorElas
`;
}

if(message.includes("github")){
return `<a href="https://github.com/AliceKaleno" target="_blank">GitHub da Alice</a>`;
}

if(message.includes("linkedin")){
return `<a href="https://www.linkedin.com/in/alice-maria-da-silva-47ab27367/" target="_blank">LinkedIn</a>`;
}

if(message.includes("Instagram")){
return `<a href="https://www.instagram.com/a.kalenno/" target="_blank">Instagram</a>`;
}

if(message.includes("contact")){
return `Email: alicemariadasilvasilva81@gmail.com`;
}

return "Não entendi 😅 digite help, por favor.";

}


/* ENTER PARA ENVIAR */

document.getElementById("chatInput").addEventListener("keypress",function(e){

if(e.key === "Enter"){
sendMessage();
}



});