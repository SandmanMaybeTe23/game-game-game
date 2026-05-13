import GameObject from './GameObject.js'
import InputHandler from './InputHandler.js'


export default class Rectangle extends GameObject {
    constructor(game, x, y, width, height, color = 'green',speed  ) {
        super(game, x, y, width, height)
        this.color = color

        this.speed = speed
        this.enemy_set = 0


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



       // speed += deltaTime/esculator

 
        if (this.y < 400 ){
            this.velocityY = this.speed
            

        }else{
            this.y = 0
            this.speed += 0.005
            this.enemy_set = Math.floor(Math.random() * 4)    
            if (this.enemy_set == 0){
                this.x = 0}

            else if (this.enemy_set == 1){
                this.x = 100
            } else if ( this.enemy_set == 2 ){
                this.x = 200

            }else {
                this.x = 300
            }

        }
              
        
  
                    


        


    }

    draw(ctx) {
        // Rita rektangeln
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}