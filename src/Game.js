import Player from './Player.js'
import InputHandler from './InputHandler.js'
import Rectangle from './Rectangle.js'
import ScoreBoard from './scoreBoard.js'



var score_timer = 0
var player_score_x= 425
var player_name_x = 475 



export default class Game {
    constructor(width, height, score) {
        this.width = width-200
        this.height = height
        this.score = 99

        this.inputHandler = new InputHandler(this)

        this.player = new Player(this, 200, 350, 50, 50, "purple")

        // Skapa alla objekt i spelet
        this.gameObjects = [
            
            new Rectangle(this, 0, 0, 95, 30, 'red'),

            new Rectangle(this, 100, 0, 95, 30, 'red'),


            new ScoreBoard(this, 400,0, 200, 400 , 'black' ),

           



        ]

        // Sätt starthastighet (pixlar per millisekund)
        // this.gameObjects[0].vx = 0.1
        // this.gameObjects[0].vy = 0.05
        // this.gameObjects[1].vx = -0.08
        // this.gameObjects[1].vy = 0.12
    }

    update(deltaTime) {
        // Uppdatera spelet utifrån deltaTime

        
        
        
        


        this.gameObjects.forEach(obj => obj.update(deltaTime))
        this.player.update(deltaTime)

        // Exempel på input-hantering
        if (this.inputHandler.keys.has('r')) {
            this.gameObjects[0].vx += 0.001 * deltaTime
        }
        if (this.inputHandler.keys.has('b')) {
            this.gameObjects[1].vy -= 0.001 * deltaTime
        }






   

         this.gameObjects.forEach(obj => {
            if (obj !== this.player && this.player.intersects(obj)) {
                
                if (this.player.x < 349 && this.player.x > -0.1){
                    this.player.y = 1000000
                }


                // Hantera kollision baserat på riktning
                if (this.player.directionX > 0) { // rör sig åt höger
                    this.player.x = obj.x - this.player.width
                    
                
                } else if (this.player.directionX < 0) { // rör sig åt vänster
                    this.player.x = obj.x + obj.width

                }
                if (this.player.directionY > 0) { // rör sig neråt
                    this.player.y = obj.y - this.player.height
                    
                } else if (this.player.directionY < 0) { // rör sig uppåt
                    this.player.y = obj.y + obj.height
                    
                }

            }
        })


        score_timer+=deltaTime


        if (score_timer >= 1000){
            score_timer=0
            this.score += 1
            
            

        }








    }

    draw(ctx) {
        // Rita alla spelobjekt
        this.gameObjects.forEach(obj => obj.draw(ctx))
        this.player.draw(ctx)


        ctx.fillStyle = "#40d616"

        ctx.font = "25px serif";
        ctx.fillText(this.score, player_score_x, 50);


        ctx.font = "25px serif"
        ctx.fillText("SND",player_name_x  ,50 )




    }
}