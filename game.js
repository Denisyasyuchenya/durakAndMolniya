(async () => {
    const process = require('process');
    const Hero = require('./src/models/hero');
    const Clouds = require('./src/models/clouds');
    const Birds = require('./src/models/birds');
    const Items = require('./src/models/items');
    const { displayGame } = require('./src/utils/display');
    const { gameOverCallback, collectEggCallback } = require('./src/utils/game/gameEvents');
    const { restartGame } = require('./src/utils/game/gameControl');
    const { handleKeyPress, setupInputHandling } = require('./src/utils/game/inputHandler');

    let gameWidth = process.stdout.columns - 5;
    let hero = new Hero(10, gameWidth);
    let clouds = new Clouds(gameWidth);
    let birds = new Birds(gameWidth);
    let items = new Items(gameWidth);
    let gameOver = false;
    let score = 0;

    setupInputHandling(process, handleKeyPress({ hero, displayGame: () => displayGame({ process, hero, clouds, birds, items, gameWidth, gameOver, score }), restartGame: () => restartGame({ process, hero, clouds, birds, items, setGameWidth: newWidth => gameWidth = newWidth, setGameOver: newState => gameOver = newState, setScore: newScore => score = newScore }) }));

    clouds.generateClouds();
    birds.generateBirds();
    await displayGame({ process, hero, clouds, birds, items, gameWidth, gameOver, score });

    setInterval(async () => await displayGame({ process, hero, clouds, birds, items, gameWidth, gameOver, score }), 1000);
    setInterval(() => clouds.updateClouds(), 300);
    setInterval(() => items.generateItem(clouds.getClouds(), birds.getBirds()), 500);
    setInterval(() => items.updateItems(hero.position, 5, () => gameOverCallback(hero, newState => gameOver = newState), () => collectEggCallback(score, newScore => score = newScore)), 100);
    setInterval(() => birds.updateBirds(), 300); // Частота обновления птиц и их анимации
    setInterval(() => {
        clouds.generateClouds();
        birds.generateBirds();
    }, 10000);
})();
