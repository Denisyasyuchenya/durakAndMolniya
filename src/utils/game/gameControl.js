function restartGame({ process, hero, clouds, birds, items, setGameWidth, setGameOver, setScore }) {
    const gameWidth = process.stdout.columns - 5;
    hero.reset(10, gameWidth);
    setGameOver(false);
    setScore(0);
    clouds.resetClouds();
    birds.resetBirds();
    items.resetItems();
    setGameWidth(gameWidth);
}

module.exports = { restartGame };
