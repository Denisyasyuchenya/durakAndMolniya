const walkFrames = [
    ["   〠  ", " \\/[]\\", "   /\\"],
    ["   〠  ", "  /[]\\", "   /\\"] 
];
const attackFrames = [
    ["  〠  ", " \\|[]\\", "   /\\"] 
];

// const walkFrames2 = [
//     ["    ", " \\/[]\\", "   /\\"],
//     ["    ", "  /[]\\", "   /\\"] 
// ];
// const attackFrames2 = [
//     ["  〠  ", " \\|[]\\", "   /\\"] 
// ];

// const walkFrames3 = [
//     ["  〠  ", " \\/[]\\", "   /\\"],
//     ["  〠  ", "  /[]\\", "   /\\"] 
// ];
// const attackFrames3 = [
//     ["  〠  ", " \\|[]\\", "   /\\"] 
// ];

// const walkFrames4 = [
//     ["  〠  ", " \\/[]\\", "   /\\"],
//     ["  〠  ", "  /[]\\", "   /\\"] 
// ];
// const attackFrames4 = [
//     ["  〠  ", " \\|[]\\", "   /\\"] 
// ];

// const walkFrames5 = [
//     ["  〠  ", " \\/[]\\", "   /\\"],
//     ["  〠  ", "  /[]\\", "   /\\"] 
// ];
// const attackFrames5 = [
//     ["  〠  ", " \\|[]\\", "   /\\"] 
// ];

class Enemies {
    constructor(gameWidth, hero, gameOverCallback) {
        this.gameWidth = gameWidth;
        this.hero = hero;
        this.enemies = [];
        this.gameOverCallback = gameOverCallback;
    }

    generateEnemies() {
        this.enemies = [];
        const enemyCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < enemyCount; i++) {
            this.enemies.push({
                walkFrameIndex: 0,
                isAttacking: false,
                position: Math.floor(Math.random() * this.gameWidth),
                line: this.hero.getHeroLine(), 
                frameDelay: Math.floor(Math.random() * 10) + 1, 
                frameCounter: 0
            });
        }
    }

    updateEnemies() {
        for (const enemy of this.enemies) {
            enemy.position--;
            if (enemy.position < 0) {
                enemy.position = this.gameWidth - 1;
            }

            enemy.frameCounter++;
            if (enemy.frameCounter >= enemy.frameDelay) {
                if (enemy.isAttacking) {
                    enemy.walkFrameIndex = 0;
                } else {
                    enemy.walkFrameIndex = (enemy.walkFrameIndex + 1) % walkFrames.length;
                }
                enemy.frameCounter = 0;
            }

            if (enemy.position === this.hero.position && enemy.line === this.hero.getHeroLine()) {
                this.hero.isHit = true;
                this.gameOverCallback();
                return; 
            }

            if (enemy.position === this.hero.position) {
                enemy.isAttacking = true;
            } else {
                enemy.isAttacking = false;
            }
        }
    }

    getEnemies() {
        return this.enemies.map(enemy => ({
            ...enemy,
            frame: enemy.isAttacking ? attackFrames[0] : walkFrames[enemy.walkFrameIndex]
        }));
    }

    resetEnemies() {
        this.generateEnemies();
    }
}

module.exports = Enemies;
