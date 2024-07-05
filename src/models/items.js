const { lightningProbability, eggProbability } = require('../utils/config');

class Items {
    constructor(gameWidth) {
        this.gameWidth = gameWidth;
        this.items = [];
    }

    generateItem(clouds, birds) {
        clouds.forEach(cloud => {
            if (cloud.symbol === "⛈" && Math.random() < lightningProbability) {
                this.items.push({
                    type: 'lightning',
                    position: cloud.position,
                    line: cloud.line + 1
                });
            }
        });

        birds.forEach(bird => {
            if (Math.random() < eggProbability) {
                this.items.push({
                    type: 'egg',
                    position: bird.position,
                    line: bird.line + 1
                });
            }
        });
    }

    updateItems(heroPosition, heroWidth, gameOverCallback, collectEggCallback) {
        for (let i = this.items.length - 1; i >= 0; i--) {
            this.items[i].line++;
            if (this.items[i].line === process.stdout.rows - 4) {
                if (this.items[i].position >= heroPosition && this.items[i].position < heroPosition + heroWidth) {
                    if (this.items[i].type === 'lightning') {
                        gameOverCallback();
                    } else if (this.items[i].type === 'egg') {
                        collectEggCallback();
                    }
                }
                this.items.splice(i, 1);
            } else if (this.items[i].line > process.stdout.rows - 4) {
                this.items.splice(i, 1);
            }
        }
    }

    getItems() {
        return this.items;
    }

    resetItems() {
        this.items = [];
    }
}

module.exports = Items;
