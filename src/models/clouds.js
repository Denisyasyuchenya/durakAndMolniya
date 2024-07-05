const cloudSymbols = ["☁", "⛈", "🌧"];

class Clouds {
    constructor(gameWidth) {
        this.gameWidth = gameWidth;
        this.clouds = [];
    }

    generateClouds() {
        this.clouds = [];
        const cloudCount = Math.floor(Math.random() * 10) + 5;
        for (let i = 0; i < cloudCount; i++) {
            this.clouds.push({
                symbol: cloudSymbols[Math.floor(Math.random() * cloudSymbols.length)],
                position: Math.floor(Math.random() * this.gameWidth),
                line: Math.floor(Math.random() * 3)
            });
        }
    }

    updateClouds() {
        for (const cloud of this.clouds) {
            cloud.position = (cloud.position + 1) % this.gameWidth;
        }
    }

    getClouds() {
        return this.clouds;
    }

    resetClouds() {
        this.generateClouds();
    }
}

module.exports = Clouds;
