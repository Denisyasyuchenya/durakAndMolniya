const birdFrames = ["𓅯", "𓅮"];

class Birds {
    constructor(gameWidth) {
        this.gameWidth = gameWidth;
        this.birds = [];
        this.currentFrame = 0;
    }

    generateBirds() {
        this.birds = [];
        const birdCount = Math.floor(Math.random() * 5) + 3;
        for (let i = 0; i < birdCount; i++) {
            this.birds.push({
                frame: birdFrames[this.currentFrame],
                position: Math.floor(Math.random() * this.gameWidth),
                line: Math.floor(Math.random() * 3) + 3
            });
        }
    }

    updateBirds() {
        this.currentFrame = (this.currentFrame + 1) % birdFrames.length;
        for (const bird of this.birds) {
            bird.position = (bird.position - 1 + this.gameWidth) % this.gameWidth;
            bird.frame = birdFrames[this.currentFrame];
        }
    }

    getBirds() {
        return this.birds;
    }

    resetBirds() {
        this.generateBirds();
    }
}

module.exports = Birds;
