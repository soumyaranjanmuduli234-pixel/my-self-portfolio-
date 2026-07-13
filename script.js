// 1. SECURITY CONTROL PROTOCOLS
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
       (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || 
       (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || 
       (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) return false;
};

// GLOBAL GITHUB REPOSITORY SPECIFIC TOKEN CONFIGURATION (Whitelisted Token Exception Bypass)
const GITHUB_TOKEN = 'ghp_MyKaliLaptopTokenBypassUnblocked2026';

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

// 3. CORE PRELOADER ENGINE + SOUND SYSTEM INTEGRATION
const bootLogsContainer = document.getElementById('boot-logs');
const preloader = document.getElementById('terminal-loader');
const mainContent = document.getElementById('main-content');
const countdownEl = document.getElementById('countdown-timer');
const breachOverlay = document.getElementById('fake-breach-overlay');
const progressFill = document.querySelector('.progress-bar-fill');

const ambientSound = document.getElementById('cyber-ambient');
const buzzerSound = document.getElementById('alarm-buzzer');
const sfxKey = document.getElementById('sfx-keypress');
const sfxGranted = document.getElementById('sfx-granted');
const sfxDenied = document.getElementById('sfx-denied');

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

function playSfx(audioNode) {
    audioNode.currentTime = 0;
    audioNode.play().catch(() => {});
}

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
                initThemeEngine();
                initDraggableTerminal();
            }, 800);
        }, 500);
    }
}
window.addEventListener('DOMContentLoaded', runStandardBoot);

function initThemeEngine() {
    const themeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('muduli-sys-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('muduli-sys-theme', targetTheme);
        updateThemeIcon(targetTheme);
        printConsoleLine(`SYSTEM: Core environment toggled to [${targetTheme.toUpperCase()}_MODE]`, '#00f2fe');
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
}

// 4. FEATURE INTERACTION: DRAGGABLE DESKTOP SHELL LOGIC
function initDraggableTerminal() {
    const term = document.getElementById('draggable-terminal');
    const handle = document.getElementById('terminal-drag-handle');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    handle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        term.style.top = (term.offsetTop - pos2) + "px";
        term.style.left = (term.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// 5. AUDIO TOGGLE REGISTRY
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

// 6. MOBILE MENU INTERFACING
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.innerHTML = navMenu.classList.contains('active') ? `<i class="fas fa-xmark"></i>` : `<i class="fas fa-bars"></i>`;
});

// 7. METRICS INCREMENTS
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
            } else { counter.innerText = target; }
        };
        updateCounter();
    });
}

// 8. LIVE CYBER THREAT MAP
function initThreatMap() {
    const canvasMap = document.getElementById('threat-map-canvas');
    const ctxMap = canvasMap.getContext('2d');
    const feed = document.getElementById('live-threat-feed');
    canvasMap.width = canvasMap.parentElement.clientWidth;
    canvasMap.height = 380;

    const countries = [
        { name: "USA Node", x: 120, y: 130 }, { name: "Germany Mainframe", x: 420, y: 100 },
        { name: "China Sector", x: 620, y: 140 }, { name: "India Central", x: 570, y: 180 },
        { name: "Russia Storage", x: 510, y: 80 }
    ];

    function drawMapBackground() {
        ctxMap.fillStyle = "#010408"; ctxMap.fillRect(0,0, canvasMap.width, canvasMap.height);
        ctxMap.fillStyle = "rgba(0, 255, 102, 0.15)";
        countries.forEach(c => {
            ctxMap.beginPath(); ctxMap.arc(c.x, c.y, 6, 0, Math.PI * 2); ctxMap.fill();
            ctxMap.fillStyle = "rgba(0,242,254,0.4)"; ctxMap.font = "9px monospace";
            ctxMap.fillText(c.name, c.x + 10, c.y + 3);
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
            log.innerHTML = `<span style="color:#ff3b30;">[ATTACK]</span> Vector trace: ${src.name} -> ${dst.name}`;
            feed.appendChild(log);
            if(feed.children.length > 4) feed.removeChild(feed.children[0]);
        }
    }, 2200);

    function animateMap() {
        drawMapBackground();
        attacks.forEach(a => {
            a.progress += 0.02;
            let cx = a.src.x + (a.dst.x - a.src.x) * a.progress;
            let cy = a.src.y + (a.dst.y - a.src.y) * a.progress;
            ctxMap.strokeStyle = "#ff3b30"; ctxMap.beginPath(); ctxMap.moveTo(a.src.x, a.src.y); ctxMap.lineTo(cx, cy); ctxMap.stroke();
            ctxMap.fillStyle = "#00f2fe"; ctxMap.beginPath(); ctxMap.arc(cx, cy, 4, 0, Math.PI * 2); ctxMap.fill();
        });
        requestAnimationFrame(animateMap);
    }
    animateMap();
}

function startFirewallStreaming() {
    const fwLogs = document.getElementById('live-firewall-logs');
    const attackTypes = ["SQL Injection block", "XSS Payload trace isolated", "Brute Force dropped"];
    setInterval(() => {
        let ip = `103.45.${Math.floor(Math.random()*254)}.${Math.floor(Math.random()*254)}`;
        let alertText = attackTypes[Math.floor(Math.random() * attackTypes.length)];
        let div = document.createElement('div');
        div.className = 'fw-alert';
        div.innerHTML = `<span style="color:#00f2fe;">[FW_BLOCK]</span> ${alertText} from <span style="color:#00ff66;">${ip}</span>`;
        fwLogs.appendChild(div);
        if (fwLogs.children.length > 12) fwLogs.removeChild(fwLogs.children[0]);
    }, 1600);
}

// 9. HIGHLY ADVANCED FEATURE CORE: COMMAND BUFFER HISTORY & API TERMINAL PIPELINES
const cmdInput = document.getElementById('console-input');
const cmdDisplay = document.getElementById('console-display');
const secretGame = document.getElementById('secret-game-container');

let commandHistory = [];
let historyIndex = -1;

function injectMacro(command) {
    executeTerminalAction(command);
}

cmdInput.addEventListener('keydown', function(e) {
    playSfx(sfxKey);

    if (e.key === 'Enter') {
        const inputStr = cmdInput.value.trim();
        if (inputStr !== '') {
            commandHistory.push(inputStr);
            historyIndex = commandHistory.length;
            executeTerminalAction(inputStr);
            cmdInput.value = '';
        }
    } 
    else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            cmdInput.value = commandHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            cmdInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            cmdInput.value = '';
        }
    }
});

async function executeTerminalAction(inputStr) {
    const parts = inputStr.split(' ');
    const command = parts[0].toLowerCase();
    const argument = parts.slice(1).join(' ');
    
    printConsoleLine(`guest@muduli_sec:~$ ${inputStr}`, '#fff');
    
    if (command === 'help') {
        printConsoleLine("Kernel Subroutines Available:\n - 'about'        : Identity bios parameters.\n - 'skills'       : Core assets vectors.\n - 'gitstream'    : Real-Time GitHub API Live Analytics stream.\n - 'geoip [IP]'   : Dynamic Real Network Tracking IP Lookup utility.\n - 'nmap'         : Structural security scanner loops.\n - 'decrypt'      : Password cipher module block.\n - 'clear'        : Clear terminal frame.");
    } else if (command === 'about') {
        printConsoleLine("Node: Soumyaranjan Muduli\nProfile: Certified Ethical Hacker / Full-Stack Engineer.");
    } else if (command === 'skills') {
        printConsoleLine("Assets loaded: Penetration Testing, Source Code Auditing, API Hardening.");
    } else if (command === 'clear') {
        cmdDisplay.innerHTML = '';
    } else if (command === 'nmap') {
        printConsoleLine("Scanning default internal block gates...");
        for(let j=0; j<4; j++) {
            printConsoleLine(`-> Service found on Port ${Math.floor(Math.random()*8000)}: ACTIVE`, '#00f2fe');
        }
    } else if (command === 'decrypt') {
        secretGame.classList.remove('hidden-layer');
        secretGame.scrollIntoView({ behavior: 'smooth' });
    } 
    else if (command === 'gitstream') {
        printConsoleLine("Contacting secure production gateway api.github.com...", "#00ff66");
        try {
            const response = await fetch('https://api.github.com/users/soumyaranjanmuduli234-pixel');
            if (!response.ok) throw new Error("Connection failed or rate-limited.");
            const data = await response.json();
            printConsoleLine(`>>> USER: ${data.login}\n>>> PUBLIC REPOS: ${data.public_repos}\n>>> FOLLOWERS: ${data.followers}\n>>> PROFILE SYNC: ${data.updated_at}\nSTATUS: Core repository sync validation metrics compiled successfully.`, '#00f2fe');
        } catch (err) {
            printConsoleLine("FETCH_ERROR: Authorization layer rate limited or blocked network vector stream.", "#ff3b30");
        }
    } 
    else if (command === 'geoip') {
        if (!argument) {
            printConsoleLine("USAGE_ERROR: Target IP argument string array sequence missing. Format: geoip 8.8.8.8", "#ff3b30");
            return;
        }
        printConsoleLine(`Routing network lookup queries for tracking node [${argument}] via api pipeline...`, "#00ff66");
        try {
            const res = await fetch(`https://ipapi.co/${argument}/json/`);
            if (!res.ok) throw new Error();
            const ipData = await res.json();
            if(ipData.error) { throw new Error(ipData.reason); }
            printConsoleLine(`>>> TARGET IP : ${ipData.ip}\n>>> ORG/ISP   : ${ipData.org}\n>>> GEOLOC    : ${ipData.city}, ${ipData.region}, ${ipData.country_name}\n>>> LAT/LONG  : ${ipData.latitude} / ${ipData.longitude}`, "#00f2fe");
        } catch(e) {
            printConsoleLine("NETWORK_ERROR: Data routing endpoint failed or invalid target IP trace sequence.", "#ff3b30");
        }
    } else {
        printConsoleLine(`SHELL_ERROR: Command vector '${command}' not structural.`, '#ff3b30');
    }
    cmdDisplay.scrollTop = cmdDisplay.scrollHeight;
}

function printConsoleLine(text, color = '#00ff66') {
    let outputLine = document.createElement('div');
    outputLine.style.color = color;
    outputLine.style.whiteSpace = 'pre-wrap';
    outputLine.innerText = text;
    cmdDisplay.appendChild(outputLine);
}

// 10. SECRET GAME SOUND MATRIX
function checkSecretCipherKey() {
    const guess = document.getElementById('game-guess-input').value.trim();
    const out = document.getElementById('game-status-output');
    if (guess === "MUDULI_SEC_2026") {
        playSfx(sfxGranted);
        out.style.color = "#00ff66";
        out.innerText = "ACCESS GRANTED. Overriding data streams... Master Vault Key Released: [FLAG: SECURE_CORE_UNLOCKED]";
    } else {
        playSfx(sfxDenied);
        out.style.color = "#ff3b30";
        out.innerText = "INTEGRITY FAULT: Hash value validation mismatched. Target Denied.";
    }
}

// 11. DYNAMIC CONTACT INJECTION (Direct Production EmailJS Implementation)
const form = document.getElementById('cyber-contact-form');
const formOut = document.getElementById('form-terminal-output');

(function() {
    // Dynamic integration mapping of your valid Public Key
    emailjs.init("6LxCSANGoCWnxxb51");
})();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    form.style.display = 'none';
    formOut.className = 'form-terminal-active';
    formOut.innerHTML = `> Initializing data packets...<br>`;
    
    setTimeout(() => { formOut.innerHTML += `> Establishing secure transport socket layer...<br>`; }, 400);
    setTimeout(() => { formOut.innerHTML += `> Encrypting transmission payload parameters...<br>`; }, 800);

    const templateParams = {
        from_name: document.getElementById('form-name').value,
        reply_to: document.getElementById('form-email').value,
        message: document.getElementById('form-msg').value
    };

    // Live execution endpoints using your exact Dashboard Service & Template IDs
    emailjs.send('service_qu2c3w9', 'template_985331c', templateParams)
        .then(function(response) {
            setTimeout(() => { 
                formOut.innerHTML += `> <span style="color:#00ff66;">STATUS: PACKET INJECTED SUCCESSFULLY. Data safely routed to Soumyaranjan node.</span><br>`; 
            }, 1400);
            form.reset();
        }, function(error) {
            setTimeout(() => { 
                formOut.innerHTML += `> <span style="color:#ff3b30;">TRANSMISSION_ERROR: Connection rejected by EmailJS gateway.</span><br>`; 
                console.error("EmailJS Security Error Array:", error);
            }, 1400);
        });
});

// 12. CANVAS CYBER MATRIX BACKGROUND
const canvas = document.getElementById('cyber-canvas');
const ctx = canvas.getContext('2d');
const stateIndicator = document.getElementById('bg-state');
let currentMode = 0;
const modeNames = ["MATRIX", "CYBER_GRID", "BINARY_FLOW"];
setInterval(() => { currentMode = (currentMode + 1) % 3; stateIndicator.innerText = modeNames[currentMode]; }, 20000);

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