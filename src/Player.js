import GameObject from './GameObject.js'

export default class Player extends GameObject {
    constructor(game, x, y, width, height, color,score, name) {
        super(game, x, y, width, height)
        this.color = color
        this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        this.maxLetterClamp = 0
        this.name  = name
        this.score = score 
        

        
        // Nuvarande hastighet (pixels per millisekund)
        this.velocityX = 0
        this.velocityY = 0

        // Rörelsehastighet (hur snabbt spelaren accelererar/rör sig)
        this.moveSpeed = 0.6
        this.directionX = 0
        this.directionY = 0
    }

    update(deltaTime) {
        // Styr spelaren med piltangenterna
         
        if (this.name == "" ){
            while (this.maxLetterClamp < 3){
                this.maxLetterClamp += 1
              let choice = Math.floor(Math.random() * 26)
                this.name += this.alphabet[choice]   

            }        


        }



        if (this.game.inputHandler.keys.has('ArrowLeft') && this.x > 10 ) {
            this.velocityX = -this.moveSpeed
            this.directionX = -1

        } else if (this.game.inputHandler.keys.has('ArrowRight') ) {
            this.velocityX = this.moveSpeed
            this.directionX = 1
            
        } else {
            this.velocityX = 0
            this.directionX = 0
        }


        if(this.game.inputHandler.keys.has('Enter')){
            this.y=350
        }

        // Uppdatera position baserat på hastighet
        this.x += this.velocityX * deltaTime
        this.y += this.velocityY * deltaTime
    }

    draw(ctx) {
        // Rita spelaren som en rektangel
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

        // Rita ögon
        ctx.fillStyle = 'white'
        ctx.fillRect(this.x + this.width * 0.2, this.y + this.height * 0.2, this.width * 0.2, this.height * 0.2)
        ctx.fillRect(this.x + this.width * 0.6, this.y + this.height * 0.2, this.width * 0.2, this.height * 0.2)
        
        // Rita pupiller
        ctx.fillStyle = 'black'
        ctx.fillRect(
            this.x + this.width * 0.25 + this.directionX * this.width * 0.05, 
            this.y + this.height * 0.25 + this.directionY * this.width * 0.05, 
            this.width * 0.1, 
            this.height * 0.1
        )
        ctx.fillRect(
            this.x + this.width * 0.65 + this.directionX * this.width * 0.05, 
            this.y + this.height * 0.25 + this.directionY * this.width * 0.05, 
            this.width * 0.1, 
            this.height * 0.1
        )
        // rita mun som ett streck
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(this.x + this.width * 0.7, this.y + this.height * 0.75)
        ctx.lineTo(this.x + this.width * 0.3, this.y + this.height * 0.75)

        ctx.moveTo(this.x + this.width * 0.2, this.y + this.height * 0.72)
        ctx.lineTo(this.x + this.width * 0.8, this.y + this.height * 0.72)


        ctx.moveTo(this.x + this.width * 0.65, this.y + this.height * 0.76)
        ctx.lineTo(this.x + this.width * 0.85, this.y + this.height * 0.68)

        ctx.moveTo(this.x + this.width * 0.45, this.y + this.height * 0.77)
        ctx.lineTo(this.x + this.width * 0.2, this.y + this.height * 0.68)

        ctx.stroke()
    }
}