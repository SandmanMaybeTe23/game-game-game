* REQUIREMENTS to use Slut-projet
* You need to follow this list to be able to use Slut-projekt 

1. You will need a server
   * I use Tableplus so make a server the structure values name(varchar 3) and score(int) also id(int) you can also use the file spelserver.sql that exist in projekt and import it in to you chocen server this will make it easier do be noted that there is already some score on there you can delete it if you want to.   
   * When you namn your server remeber what it is call because you will need it later 
 

2. Webbsite API
   * First fork this https://github.com/SandmanMaybeTe23/scpre-api.git and do the necessary steps like npm install to get it running   
   * Then the first thing you need to do is add the .env and the code from the .env-exempel and add the necessary values to all exept DATABASE-DATABASE you will need to set DATABASE-DATABASE to your servers namn 
   * with all that done you will need to go to your terminal and run npm run dev and then a link to the webbsite will appear click it and you should open it to your chosen browser the in the url do /api and enter then you should be looking at at JSON code but what you will need to do it copy the whole browser link and save it to some where.
   * do be noted that you cannot play the game with out having this activated and the now you are done with the webbsite. 


3.Setting for the slut projekt
* You should forked this https://github.com/SandmanMaybeTe23/game-game-game/tree/slut-projekt and also do the necessary step like npm install and get it running
* Fist go to Data.js and find url it should be set to "http://localhost:3000/api" and you know that browser that you hade to copy replace "http://localhost:3000/api" with the browser you have.
* Then go to apiRespond that is should be set to  await fetch("http://localhost:3000/api") change "http://localhost:3000/api to hte browser you have and you should be done if any problems you can ask of course but i think you should be fine to play and get a high score.


