class Hero {
    constructor(position, gameWidth) {
        this.position = position;
        this.gameWidth = gameWidth;
        this.step = 0;
        this.isHit = false;
        this.frames = [
            [
                "    O",
                "   /|\\",
                "   / \\"
            ],
            [
                "    0",
                "   /|\\",
                "   /|"
            ],
            [
                "    O",
                "   /|\\",
                "    |\\"
            ],
            [
                "    0",
                "   /|\\",
                "   / \\"
            ]
        ];
    }

    moveLeft() {
        if (this.position > 0) {
            this.position--;
            this.step++;
        }
    }

    moveRight() {
        if (this.position < this.gameWidth - 5) {
            this.position++;
            this.step++;
        }
    }

    reset(position, gameWidth) {
        this.position = position;
        this.gameWidth = gameWidth;
        this.step = 0;
        this.isHit = false;
    }

    getCurrentFrame() {
        return this.isHit ? [" БЛЯ💀", "   /|\\", "   / \\"] : this.frames[this.step % this.frames.length];
    }
}

module.exports = Hero;
