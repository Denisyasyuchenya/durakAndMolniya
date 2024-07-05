(async () => {
    const keypress = require('keypress');
    const process = require('process');
    const ansiEscapes = await import('ansi-escapes');

    let heroPosition = 10;
    let gameWidth = process.stdout.columns - 5;
    let step = 0;
    let isHit = false;
    let gameOver = false;

    const heroFrames = [
        [
            "    O",
            "   /|\\",
            "   / \\"
        ],
        [
            "    O",
            "   /|\\",
            "   /|"
        ],
        [
            "    O",
            "   /|\\",
            "    |\\"
        ],
        [
            "    O",
            "   /|\\",
            "   / \\"
        ]
    ];

    const cloudSymbols = ["☁", "⛈", "🌧"];
    let clouds = [];
    let lightningBolts = [];

    function generateClouds() {
        clouds = [];
        const cloudCount = Math.floor(Math.random() * 10) + 5; 
        for (let i = 0; i < cloudCount; i++) {
            clouds.push({
                symbol: cloudSymbols[Math.floor(Math.random() * cloudSymbols.length)],
                position: Math.floor(Math.random() * gameWidth),
                line: Math.floor(Math.random() * 3) 
            });
        }
    }

    function updateClouds() {
        for (const cloud of clouds) {
            cloud.position = (cloud.position + 1) % gameWidth;
        }
    }

    function generateLightning() {
        for (const cloud of clouds) {
            if (cloud.symbol === "⛈" && Math.random() < 0.1) { 
                lightningBolts.push({
                    position: cloud.position,
                    line: cloud.line + 1 
                });
            }
        }
    }

    function updateLightning() {
        if (gameOver) return;
        for (let i = lightningBolts.length - 1; i >= 0; i--) {
            lightningBolts[i].line++;
            if (lightningBolts[i].line === process.stdout.rows - 4) {
                if (lightningBolts[i].position >= heroPosition && lightningBolts[i].position < heroPosition + 5) {
                    isHit = true;
                    gameOver = true;
                }
                lightningBolts.splice(i, 1); 
            } else if (lightningBolts[i].line > process.stdout.rows - 4) {
                lightningBolts.splice(i, 1);
            }
        }
    }

    function displayGame() {
        process.stdout.write(ansiEscapes.default.clearScreen);
        process.stdout.write(ansiEscapes.default.cursorTo(0, 0));

        for (let i = 0; i < 3; i++) {
            process.stdout.write(ansiEscapes.default.cursorTo(0, i));
            const cloudLine = Array(gameWidth).fill(' ').map((_, index) => {
                const cloud = clouds.find(cloud => cloud.line === i && cloud.position === index);
                return cloud ? cloud.symbol : ' ';
            }).join('');
            process.stdout.write(cloudLine);
        }

        for (let i = 3; i < process.stdout.rows - 4; i++) {
            process.stdout.write(ansiEscapes.default.cursorTo(0, i));
            const lightningLine = Array(gameWidth).fill(' ').map((_, index) => {
                const bolt = lightningBolts.find(bolt => bolt.line === i && bolt.position === index);
                return bolt ? '↯' : ' ';
            }).join('');
            process.stdout.write(lightningLine);
        }

        const hero = isHit ? ["    💀", "   /|\\", "   / \\"] : heroFrames[step % heroFrames.length];
        const heroStartLine = process.stdout.rows - hero.length - 1;
        for (let i = 0; i < hero.length; i++) {
            process.stdout.write(ansiEscapes.default.cursorTo(heroPosition, heroStartLine + i));
            process.stdout.write(hero[i]);
        }

        if (gameOver) {
            process.stdout.write(ansiEscapes.default.cursorTo(Math.floor(gameWidth / 2) - 5, Math.floor(process.stdout.rows / 2)));
            process.stdout.write("GAME OVER");
        }

        process.stdout.write(ansiEscapes.default.cursorTo(0, process.stdout.rows));
    }

    function handleKeyPress(ch, key) {
        if (key && key.name === 'right' && heroPosition < gameWidth - 5) { // Arrow Right
            heroPosition++;
            step++;
        } else if (key && key.name === 'left' && heroPosition > 0) { // Arrow Left
            heroPosition--;
            step++;
        } else if (key && key.ctrl && key.name === 's') { // Restart game on Ctrl+S
            restartGame();
        }
        displayGame();
    }

    function restartGame() {
        heroPosition = 10;
        step = 0;
        isHit = false;
        gameOver = false;
        lightningBolts = [];
        generateClouds();
    }

    keypress(process.stdin);
    process.stdin.on('keypress', handleKeyPress);

    process.stdin.on('keypress', (ch, key) => {
        if (key && key.ctrl && key.name === 'c') {
            process.exit();
        }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();

    generateClouds();
    displayGame();

    setInterval(displayGame, 1000);
    setInterval(updateClouds, 300);
    setInterval(generateLightning, 500);
    setInterval(updateLightning, 100);
    setInterval(generateClouds, 10000);
})();
