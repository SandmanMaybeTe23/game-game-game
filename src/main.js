import './style.css'
import Game from './Game.js'
import getData from './Data.js'



const setupGame = async (canvas) => {
    // Sätt storlek på canvas 854x480 (16:9)
    canvas.width = 600
    canvas.height = 400

    const scores = await getData()
    
    // ctx är "ritkontexten", används för att rita på canvas
    const ctx = canvas.getContext('2d')

    // Skapa spelet
    const game = new Game(canvas.width, canvas.height, 0, scores)
    let lastTime = 0
    // Game loop variabel så att vi kan stoppa den senare om vi vill
    let gameLoop

    const runGame = (timeStamp) => {
        // Räkna ut tid sedan förra frame
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        
        // Rensa canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // Uppdatera och rita
        game.update(deltaTime)
        game.draw(ctx)
        
        // Kör nästa frame
        gameLoop = requestAnimationFrame(runGame)




        







    }
    
    // Starta game loop
    gameLoop = requestAnimationFrame(runGame)
}

// Kör igång spelet
setupGame(document.querySelector('#game'))