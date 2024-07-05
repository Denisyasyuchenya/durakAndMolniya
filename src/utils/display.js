async function displayGame({ process, hero, clouds, birds, items, enemies, gameWidth, gameOver, score }) {
    const { default: ansiEscapes } = await import('ansi-escapes');
    process.stdout.write(ansiEscapes.clearScreen);
    process.stdout.write(ansiEscapes.cursorTo(0, 0));

    for (let i = 0; i < 3; i++) {
        process.stdout.write(ansiEscapes.cursorTo(0, i));
        const cloudLine = Array(gameWidth).fill(' ').map((_, index) => {
            const cloud = clouds.getClouds().find(cloud => cloud.line === i && cloud.position === index);
            return cloud ? cloud.symbol : ' ';
        }).join('');
        process.stdout.write(cloudLine);
    }

    for (let i = 3; i < process.stdout.rows - 4; i++) {
        process.stdout.write(ansiEscapes.cursorTo(0, i));
        const itemLine = Array(gameWidth).fill(' ').map((_, index) => {
            const item = items.getItems().find(item => item.line === i && item.position === index);
            if (item) {
                return item.type === 'lightning' ? '↯' : '𓆇';
            }
            return ' ';
        }).join('');
        process.stdout.write(itemLine);
    }

    for (let i = 3; i < 6; i++) {
        process.stdout.write(ansiEscapes.cursorTo(0, i));
        const birdLine = Array(gameWidth).fill(' ').map((_, index) => {
            const bird = birds.getBirds().find(bird => bird.line === i && bird.position === index);
            return bird ? bird.frame : ' ';
        }).join('');
        process.stdout.write(birdLine);
    }

    const heroFrame = hero.getCurrentFrame();
    const heroStartLine = process.stdout.rows - heroFrame.length - 1 - (hero.isJumping ? hero.jumpHeight : 0);
    for (let i = 0; i < heroFrame.length; i++) {
        process.stdout.write(ansiEscapes.cursorTo(hero.position, heroStartLine + i));
        process.stdout.write(heroFrame[i]);
    }

    for (const enemy of enemies.getEnemies()) {
        const enemyLines = enemy.frame;
        for (let i = 0; i < enemyLines.length; i++) {
            process.stdout.write(ansiEscapes.cursorTo(enemy.position, enemy.line + i));
            process.stdout.write(enemyLines[i]);
        }
    }

    if (gameOver) {
        process.stdout.write(ansiEscapes.cursorTo(Math.floor(gameWidth / 2) - 5, Math.floor(process.stdout.rows / 2)));
        process.stdout.write("GAME OVER");
    }

    process.stdout.write(ansiEscapes.cursorTo(0, process.stdout.rows));
    process.stdout.write(`Score: ${score}`);
}

module.exports = { displayGame };
