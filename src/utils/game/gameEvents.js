function gameOverCallback(hero, setGameOver) {
    hero.isHit = true;
    setGameOver(true);
}

function collectEggCallback(score, setScore) {
    setScore(score + 10);
}

module.exports = { gameOverCallback, collectEggCallback };
