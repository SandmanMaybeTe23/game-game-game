import GameObject from './GameObject.js'

export default class Rectangle extends GameObject {
    constructor(game, x, y, width, height, color = 'green', follow) {
        super(game, x, y, width, height,follow)
        this.color = color

        // Hastighet (pixels per millisekund)
        this.velocityX = 0
        this.velocityY = 0
        
        // Studs-faktor (1.0 = perfekt studs, 0.8 = tappar energi)
        this.bounce = 1.0
    }

    update(deltaTime) {
        // Flytta baserat på hastighet
        this.x += this.velocityX * deltaTime
        this.y += this.velocityY * deltaTime

        // Studsa mot väggarna
        if (this.x < 0 || this.x + this.width > this.game.width) {
            this.velocityX = -this.velocityX * this.bounce  // Byt X-riktning
        }
        if (this.y < 0 || this.y + this.height > this.game.height) {
            this.velocityY = -this.velocityY * this.bounce  // Byt Y-riktning
        }

        if (this.follow==true){
            this.game.player.width+=this.width
            this.game.player.height+=this.height
            this.width=0
            this.height=0
            this.y=10000000000000000000000000000000000000
            this.x=100000000000000000000000000000
        }
    }

    draw(ctx) {
        // Rita rektangeln
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}