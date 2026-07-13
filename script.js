// 1. SECURITY CONTROL PROTOCOLS
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
       (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || 
       (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || 
       (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) return false;
};

// 2. REVOLUTIONARY TARGET CROSSHAIR & MATRIX PARTICLES
const crosshair = document.getElementById('hacker-crosshair');
const particleContainer = document.getElementById('particle-container');

window.addEventListener('mousemove', (e) => {
    crosshair.style.left = `${e.clientX}px`;
    crosshair.style.top = `${e.clientY}px`;
    if (Math.random() > 0.4) createMatrixParticle(e.clientX, e.clientY);
});

function createMatrixParticle(x, y) {
    const p = document.createElement('div');
    p.className = 'matrix-particle';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    particleContainer.appendChild(p);
    const tx = (Math.random() - 0.5) * 40;
    const ty = (Math.random() - 0.5) * 40;
    setTimeout(() => {
        p.style.transform = `translate(${tx}px, ${ty}px) scale(0)`;
        p.style.opacity = '0';
    }, 50);
    setTimeout(() => { p.remove(); }, 450);
}

// 3. CORE PRELOADER ENGINE + HARDENED SOUND AUTOPLAY BYPASS
const bootLogsContainer = document.getElementById('boot-logs');
const preloader = document.getElementById('terminal-loader');
const mainContent = document.getElementById('main-content');
const countdownEl = document.getElementById('countdown-timer');
const breachOverlay = document.getElementById('fake-breach-overlay');
const progressFill = document.querySelector('.progress-bar-fill');

const ambientSound = document.getElementById('cyber-ambient');
const buzzerSound = document.getElementById('alarm-buzzer');

const initialLogs = [
    "SYS: Initializing structural system network mapping loops...",
    "IDENTITY: Target Node Confirmed -> Soumyaranjan Muduli",
    "BIO_LOGS: Origin: Indian // Denomination Mapping: Hindu verified.",
    "GEO_MAP: Coordinate Lock: Khanti, Kadaba, Khordha, Odisha.",
    "COMMS: Direct pipeline established on +91 7325996774",
    "GIT: Mapping codebase matrix to soumyaranjanmuduli234-pixel...",
    "SEC_CHECK: Certificate lookup matching database entry: Certified Ethical Hacker [CEH]"
];

let logIndex = 0;
let timeRemaining = 45;

const timerInterval = setInterval(() => {
    timeRemaining--;
    if (timeRemaining >= 0) countdownEl.innerText = `EST: ${timeRemaining}s`;
    else clearInterval(timerInterval);
}, 1000);

function forcePlayAudio() {
    ambientSound.play().catch(() => {});
    window.removeEventListener('click', forcePlayAudio);
    window.removeEventListener('keydown', forcePlayAudio);
}
window.addEventListener('click', forcePlayAudio);
window.addEventListener('keydown', forcePlayAudio);

function runStandardBoot() {
    if (logIndex < initialLogs.length) {
        let line = document.createElement('div');
        line.className = 'log-line';
        line.innerText = `> ${initialLogs[logIndex]}`;
        bootLogsContainer.appendChild(line);
        bootLogsContainer.scrollTop = bootLogsContainer.scrollHeight;
        logIndex++;
        setTimeout(runStandardBoot, 900);
    } else {
        setTimeout(triggerFakeBreachAlert, 500);
    }
}

function triggerFakeBreachAlert() {
    breachOverlay.classList.remove('hidden-layer');
    buzzerSound.play().catch(() => {});
    progressFill.style.width = '100%';
    
    setTimeout(() => {
        breachOverlay.classList.add('hidden-layer');
        buzzerSound.pause();
        runHyperSpeedNmapScan(0);
    }, 3800);
}

function runHyperSpeedNmapScan(frameCount) {
    if (frameCount < 160) { 
        let generatedIP = `192.168.${Math.floor(Math.random()*254)}.${Math.floor(Math.random()*254)}`;
        let randomPort = Math.floor(Math.random() * 65535);
        let outputs = [
            `NMAP: Scanning target block ${generatedIP} over secure protocol layer...`,
            `RUST_SCAN: Active ports discovered on pipeline -> [PORT: ${randomPort} - SERVICE: open]`,
            `SYN-FLOOD: Routing packet strings via bypass proxies -> STATUS: SUCCESS [200 OK]`,
            `VULN_CHECK: Thread evaluation mapping key matrix blocks... flag detected.`
        ];
        
        let randomText = outputs[Math.floor(Math.random() * outputs.length)];
        let line = document.createElement('div');
        line.className = 'log-line';
        line.style.color = '#00f2fe';
        line.innerText = `>> ${randomText}`;
        bootLogsContainer.appendChild(line);
        bootLogsContainer.scrollTop = bootLogsContainer.scrollHeight;
        
        setTimeout(() => runHyperSpeedNmapScan(frameCount + 1), 15);
    } else {
        setTimeout(() => {
            preloader.style.opacity = '0';
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
                initCyberEngine();
                triggerMetricsCounter();
                initThreatMap();
                startFirewallStreaming();
            }, 800);
        }, 500);
    }
}
window.addEventListener('DOMContentLoaded', runStandardBoot);

// 4. AUDIO TOGGLE REGISTRY
const audioToggle = document.getElementById('audio-toggle');
audioToggle.addEventListener('click', () => {
    if (ambientSound.paused) {
        ambientSound.play();
        audioToggle.innerHTML = `<i class="fas fa-volume-high"></i> AUDIO: ON`;
        audioToggle.classList.add('active');
    } else {
        ambientSound.pause();
        audioToggle.innerHTML = `<i class="fas fa-volume-xmark"></i> AUDIO: OFF`;
        audioToggle.classList.remove('active');
    }
});

// 5. MOBILE MENU INTERFACING
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.innerHTML = navMenu.classList.contains('active') ? `<i class="fas fa-xmark"></i>` : `<i class="fas fa-bars"></i>`;
});
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.innerHTML = `<i class="fas fa-bars"></i>`;
    });
});

// 6. METRICS INTERACTIVE INCREMENTS
function triggerMetricsCounter() {
    document.querySelectorAll('.metric-val').forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const step = target / 60;
            if (current < target) {
                counter.innerText = `${Math.ceil(current + step)}`;
                setTimeout(updateCounter, 25);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// 7. ADVANCED FEATURE: LIVE CYBER THREAT GLOBAL SIMULATOR MAP
function initThreatMap() {
    const canvasMap = document.getElementById('threat-map-canvas');
    const ctxMap = canvasMap.getContext('2d');
    const feed = document.getElementById('live-threat-feed');
    
    canvasMap.width = canvasMap.parentElement.clientWidth;
    canvasMap.height = 380;

    const countries = [
        { name: "USA Node", x: 120, y: 130 }, { name: "Germany Mainframe", x: 420, y: 100 },
        { name: "China Sector", x: 620, y: 140 }, { name: "India Central", x: 570, y: 180 },
        { name: "Russia Storage", x: 510, y: 80 }, { name: "Brazil Proxy", x: 250, y: 270 }
    ];

    function drawMapBackground() {
        ctxMap.fillStyle = "#010408"; ctxMap.fillRect(0,0, canvasMap.width, canvasMap.height);
        ctxMap.fillStyle = "rgba(0, 255, 102, 0.15)";
        countries.forEach(c => {
            ctxMap.beginPath(); ctxMap.arc(c.x, c.y, 6, 0, Math.PI * 2); ctxMap.fill();
            ctxMap.fillStyle = "rgba(0,242,254,0.4)";
            ctxMap.font = "9px monospace";
            ctxMap.fillText(c.name, c.x + 10, c.y + 3);
            ctxMap.fillStyle = "rgba(0, 255, 102, 0.15)";
        });
    }

    let attacks = [];
    setInterval(() => {
        if(attacks.length > 4) attacks.shift();
        let src = countries[Math.floor(Math.random() * countries.length)];
        let dst = countries[Math.floor(Math.random() * countries.length)];
        if (src !== dst) {
            attacks.push({ src, dst, progress: 0 });
            let log = document.createElement('div');
            log.innerHTML = `<span style="color:#ff3b30;">[ATTACK]</span> Vectors deploying from ${src.name} -> target endpoint ${dst.name}`;
            feed.appendChild(log);
            if(feed.children.length > 4) feed.removeChild(feed.children[0]);
        }
    }, 2200);

    function animateMap() {
        drawMapBackground();
        attacks.forEach(a => {
            a.progress += 0.02;
            let currentX = a.src.x + (a.dst.x - a.src.x) * a.progress;
            let currentY = a.src.y + (a.dst.y - a.src.y) * a.progress;
            
            ctxMap.strokeStyle = "#ff3b30"; ctxMap.lineWidth = 1.5;
            ctxMap.beginPath(); ctxMap.moveTo(a.src.x, a.src.y); ctxMap.lineTo(currentX, currentY); ctxMap.stroke();
            
            ctxMap.fillStyle = "#00f2fe"; ctxMap.beginPath();
            ctxMap.arc(currentX, currentY, 4, 0, Math.PI * 2); ctxMap.fill();
        });
        requestAnimationFrame(animateMap);
    }
    animateMap();
}

// 8. ADVANCED FEATURE: WALL FIREWALL LIVE REAL-TIME METRICS SCRIPTS
function startFirewallStreaming() {
    const fwLogs = document.getElementById('live-firewall-logs');
    const attackTypes = ["SQL Injection block", "XSS Payload trace isolated", "Brute Force structural drop", "Malformed API token dump rejected"];
    
    setInterval(() => {
        let ip = `103.45.${Math.floor(Math.random()*254)}.${Math.floor(Math.random()*254)}`;
        let alertText = attackTypes[Math.floor(Math.random() * attackTypes.length)];
        let div = document.createElement('div');
        div.className = 'fw-alert';
        div.innerHTML = `<span style="color:#00f2fe;">[FW_BLOCK]</span> ${alertText} from <span style="color:#00ff66;">${ip}</span> on port ${Math.random() > 0.5 ? 443 : 80}`;
        fwLogs.appendChild(div);
        
        if (fwLogs.children.length > 12) {
            fwLogs.removeChild(fwLogs.children[0]);
        }
    }, 1600);
}

// 9. HIGHLY ADVANCED INTERACTIVE TERMINAL EMULATOR COMMANDS BLOCK
const cmdInput = document.getElementById('console-input');
const cmdDisplay = document.getElementById('console-display');
const secretGame = document.getElementById('secret-game-container');

cmdInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const inputStr = cmdInput.value.trim();
        const inputLower = inputStr.toLowerCase();
        printConsoleLine(`guest@muduli_sec:~$ ${inputStr}`, '#fff');
        
        if (inputLower === 'help') {
            printConsoleLine("Kernel Subroutines Available:\n - 'about'   : Identity bios parameters.\n - 'skills'  : Core systems technical vectors.\n - 'nmap'    : Run interactive network scan loop diagnostics.\n - 'decrypt' : Initialize cipher override minigame dashboard.\n - 'cv'      : Inject download trigger link execution sequence.\n - 'clear'   : Flash console memory stack arrays.");
        } else if (inputLower === 'about') {
            printConsoleLine("Node: Soumyaranjan Muduli\nProfile: Certified Ethical Hacker / Full-Stack Engineer.\nLoc: Khordha, Odisha, India.");
        } else if (inputLower === 'skills') {
            printConsoleLine("Assets loaded: Penetration Testing, Source Code Auditing, Core Secure Architecture Logic.");
        } else if (inputLower === 'clear') {
            cmdDisplay.innerHTML = '';
        } else if (inputLower === 'cv') {
            printConsoleLine("Executing secure channel data download packet configuration...");
            window.open('https://github.com/soumyaranjanmuduli234-pixel', '_blank');
        } else if (inputLower === 'nmap') {
            printConsoleLine("Running offensive target grid array port diagnostics...");
            let count = 0;
            let nmapInt = setInterval(() => {
                printConsoleLine(`[PORT DIAGNOSTIC] Found active listener state on channel: ${Math.floor(Math.random()*1000)} -> [OPEN]`, '#00f2fe');
                count++;
                if(count > 5) clearInterval(nmapInt);
            }, 300);
        } else if (inputLower === 'decrypt') {
            printConsoleLine("ALERT: Cryptographic Cipher Game Interface Target Initialized Natively Below!", "#ff9500");
            secretGame.classList.remove('hidden-layer');
            secretGame.scrollIntoView({ behavior: 'smooth' });
        } else {
            printConsoleLine(`SHELL_ERROR: Vector packet string descriptor '${inputStr}' not structural.`, '#ff3b30');
        }
        cmdInput.value = '';
        cmdDisplay.scrollTop = cmdDisplay.scrollHeight;
    }
});

function printConsoleLine(text, color = '#00ff66') {
    let outputLine = document.createElement('div');
    outputLine.style.color = color;
    outputLine.style.whiteSpace = 'pre-wrap';
    outputLine.innerText = text;
    cmdDisplay.appendChild(outputLine);
}

// 10. SECRET GAME CONTROLLER SYSTEM
function checkSecretCipherKey() {
    const guess = document.getElementById('game-guess-input').value.trim();
    const out = document.getElementById('game-status-output');
    if (guess === "MUDULI_SEC_2026") {
        out.style.color = "#00ff66";
        out.innerText = "ACCESS GRANTED. Overriding data streams... Master Vault Key Released: [FLAG: SECURE_CORE_UNLOCKED]";
        printConsoleLine("SUCCESS: Hidden cipher game solved. Priority flags logged.", "#00ff66");
    } else {
        out.style.color = "#ff3b30";
        out.innerText = "INTEGRITY FAULT: Hash value check validation mismatched. Try again.";
    }
}

// 11. DYNAMIC CONTACT INJECTION HANDLING
const form = document.getElementById('cyber-contact-form');
const formOut = document.getElementById('form-terminal-output');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.style.display = 'none';
    formOut.className = 'form-terminal-active';
    formOut.innerHTML = `> Initializing data packets...<br>`;
    let logs = [
        "> Establishing secure transport socket layer...",
        `> Identity bits logged: ${document.getElementById('form-name').value}`,
        `> STATUS: PACKET INJECTED SUCCESSFULLY INTO SERVER ROUTE.`
    ];
    let i = 0;
    function printLogs() {
        if(i < logs.length) {
            formOut.innerHTML += logs[i] + "<br>"; i++;
            setTimeout(printLogs, 600);
        }
    }
    setTimeout(printLogs, 200);
});

// 12. MATRIX TRIPLE-MODE MATRIX RENDERING CANVAS
const canvas = document.getElementById('cyber-canvas');
const ctx = canvas.getContext('2d');
const stateIndicator = document.getElementById('bg-state');
let currentMode = 0;
const modeNames = ["MATRIX", "CYBER_GRID", "BINARY_FLOW"];
setInterval(() => {
    currentMode = (currentMode + 1) % 3;
    stateIndicator.innerText = modeNames[currentMode];
}, 20000);

function initCyberEngine() {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const fontSize = 14; const columns = canvas.width / fontSize;
    const items = []; for (let x = 0; x < columns; x++) items[x] = 1;

    function draw() {
        ctx.fillStyle = currentMode === 1 ? 'rgba(2, 4, 6, 0.2)' : 'rgba(2, 4, 6, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px monospace';

        if (currentMode === 0) {
            ctx.fillStyle = '#00ff66';
            const chars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ1029384756QXKWMZPL";
            for (let i = 0; i < items.length; i++) {
                ctx.fillText(chars.charAt(Math.floor(Math.random()*chars.length)), i*fontSize, items[i]*fontSize);
                if (items[i]*fontSize > canvas.height && Math.random() > 0.98) items[i] = 0;
                items[i]++;
            }
        } else if (currentMode === 1) {
            ctx.strokeStyle = 'rgba(0, 242, 254, 0.06)'; ctx.lineWidth = 1;
            for (let x = 0; x < canvas.width; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
            for (let y = 0; y < canvas.height; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
        } else if (currentMode === 2) {
            ctx.fillStyle = '#00f2fe';
            for (let i = 0; i < items.length; i++) {
                ctx.fillText(Math.random() > 0.5 ? "1" : "0", i*fontSize, items[i]*fontSize);
                if (items[i]*fontSize > canvas.height && Math.random() > 0.97) items[i] = 0;
                items[i]++;
            }
        }
    }
    setInterval(draw, 33);
}

const cryptoWords = ["certified_ethical_hacker", "fullstack_web_architect", "secops_engineer"];
let wIdx = 0, cIdx = 0, isDel = false;
function typeEngine() {
    const curr = cryptoWords[wIdx]; const tar = document.querySelector('.typing-text');
    if(!tar) return;
    tar.innerText = isDel ? curr.substring(0, cIdx - 1) : curr.substring(0, cIdx + 1);
    cIdx = isDel ? cIdx - 1 : cIdx + 1;
    let spd = isDel ? 30 : 70;
    if (!isDel && cIdx === curr.length) { spd = 2000; isDel = true; }
    else if (isDel && cIdx === 0) { isDel = false; wIdx = (wIdx + 1) % cryptoWords.length; spd = 400; }
    setTimeout(typeEngine, spd);
}
setTimeout(typeEngine, 5000);