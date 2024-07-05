const keypress = require('keypress');

function handleKeyPress({ hero, displayGame, restartGame }) {
    return async function(ch, key) {
        if (key && key.name === 'right') {
            hero.moveRight();
        } else if (key && key.name === 'left') {
            hero.moveLeft();
        } else if (key && key.ctrl && key.name === 's') {
            restartGame();
        }
        await displayGame();
    };
}

function setupInputHandling(process, handleKeyPress) {
    keypress(process.stdin);
    process.stdin.on('keypress', handleKeyPress);

    process.stdin.on('keypress', (ch, key) => {
        if (key && key.ctrl && key.name === 'c') {
            process.exit();
        }
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
}

module.exports = { handleKeyPress, setupInputHandling };
