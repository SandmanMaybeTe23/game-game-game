
import Rectangle from './Rectangle.js'
import InputHandler from './InputHandler.js'



export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        
        this.inputHandler = new InputHandler(this)
        
        // Skapa alla objekt i spelet
        this.gameObjects = [
            new Rectangle(this, 50, 50, 100, 100, 'red'),
            new Rectangle(this, 200, 150, 150, 75, 'blue'),
            new Rectangle(this, 100, 400, 100, 75, 'green')
        ]
    }

    update(deltaTime) {
        // Uppdatera spelet utifrån deltaTime




        this.gameObjects.forEach(obj => obj.update(deltaTime))

        this.gameObjects[2].bounce=0
        

        // Exempel på input-hantering, detta bör hanteras av rektanglarna själva
        if (this.inputHandler.keys.has('r')) {
            this.gameObjects[0].velocityX += 0.001 * deltaTime
        }
        if (this.inputHandler.keys.has('b')) {
            this.gameObjects[1].velocityY -= 0.001 * deltaTime
        }


        if(this.inputHandler.keys.has("ArrowLeft")) {
            this.gameObjects[2].velocityX=- 0.3


        }else if (this.inputHandler.keys.has("ArrowRight")) {
            this.gameObjects[2].velocityX=0.3


        }else{
            this.gameObjects[2].velocityX=0
        }


        if(this.inputHandler.keys.has("ArrowUp") && this.gameObjects[2].y>399 ){
            this.gameObjects[2].velocityY=-2


        }else if (this.gameObjects[2].y<200  ){
            this.gameObjects[2].velocityY+=0.2
                 
        }else{
            this.gameObjects[2].velocityY-=0
        }




    }

    draw(ctx) {
        // Rita alla spelobjekt
        this.gameObjects.forEach(obj => obj.draw(ctx))
    }
}