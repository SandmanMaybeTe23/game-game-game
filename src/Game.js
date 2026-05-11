import Player from './Player.js'
import InputHandler from './InputHandler.js'
import Rectangle from './Rectangle.js'
import ScoreBoard from './scoreBoard.js'

export default class Game {
    constructor(width, height, timer = 0, scores, gameOver = "False") {
        this.width = width - 200
        this.height = height
        this.timer = timer
        this.scores = scores
        this.gameOver = gameOver
        

        this.inputHandler = new InputHandler(this)

        this.player = new Player(this, 200, 350, 50, 50, "purple", 0, "SND")

        // Skapa alla objekt i spelet
        this.gameObjects = [

            new Rectangle(this, 0, 0, 95, 30, 'red', 0.1),

            new Rectangle(this, 100, 0, 95, 30, 'red', 0.1),

            new ScoreBoard(this, 400, 0, 200, 400, 'black'),

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

                if (this.player.x < 349 && this.player.x > -0.1) {
                    this.gameOver = "True"
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

            if (this.gameOver == "True"){
                
            }


        })


        this.timer += deltaTime

        if (this.timer >= 1000 && this.gameOver != "True") {
            this.timer = 0
            this.player.score += 1
        }

    }

    draw(ctx) {
        // Rita alla spelobjekt
        this.gameObjects.forEach(obj => obj.draw(ctx))
        this.player.draw(ctx)

        ctx.fillStyle = "#40d616"

        ctx.font = "25px serif";
        ctx.fillText(this.player.score, 425, 50);


        ctx.font = "25px serif"
        ctx.fillText(this.player.name, 475, 50) 

        let position = 100
        this.scores.forEach(score => {
 
            if(position < 350){

                ctx.font = "25px serif"
                ctx.fillText(score.name, 475, position)
                
                ctx.font = "25px serif "
                ctx.fillText(score.score, 425, position)

                position += 50 }
            else{}           

        });

        //console.log(this.scores)

    }

   
    }




