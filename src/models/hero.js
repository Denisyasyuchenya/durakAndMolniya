class Hero {
    constructor(position, gameWidth) {
        this.position = position;
        this.gameWidth = gameWidth;
        this.step = 0;
        this.isHit = false;
        this.isJumping = false;
        this.jumpFrame = 0;
        this.jumpHeight = 3;
        this.jumpFrames = [
            ["    O", "   /|\\", "   / \\"],
            ["    O", "   / \\", "   / \\"],
            ["    O", "   / \\", "    \\"],
            ["    O", "   / \\", "   / \\"],
            ["    O", "   / \\", "   / \\"]
        ];
        this.frames = [
            ["    O", "   /|\\", "   / \\"],
            ["    0", "   /|\\", "   /|"],
            ["    O", "   /|\\", "    |\\"],
            ["    0", "   /|\\", "   / \\"]
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

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.jumpFrame = 0;
        }
    }

    updateJump() {
        if (this.isJumping) {
            this.jumpFrame++;
            if (this.jumpFrame > this.jumpHeight) {
                this.isJumping = false;
                this.jumpFrame = 0;
            }
        }
    }

    reset(position, gameWidth) {
        this.position = position;
        this.gameWidth = gameWidth;
        this.step = 0;
        this.isHit = false;
        this.isJumping = false;
        this.jumpFrame = 0;
    }

    getCurrentFrame() {
        if (this.isHit) {
            return [" БЛЯ💀", "   /|\\", "   / \\"];
        } else if (this.isJumping) {
            return this.jumpFrames[this.jumpFrame % this.jumpFrames.length];
        } else {
            return this.frames[this.step % this.frames.length];
        }
    }

    getHeroLine() {
        return process.stdout.rows - this.frames[0].length - 1 - (this.isJumping ? this.jumpHeight : 0);
    }
}

module.exports = Hero;
