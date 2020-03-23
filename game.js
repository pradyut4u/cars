class Game{
constructor(){

}
getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data){
        gameState=data.val()
    })
}
update(state){
    database.ref('/').update({
        gameState: state
    })
}
async start(){
    if(gameState===0){
        player=new Player()
        var playerCountref=await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
playerCount=playerCountref.val()
      
        player.getCount()
        }
form =new Form()
form.display()
    }
}
play(){
    form.hide()
    textSize(30)
    text("Start",400,200)
    Player.getPlayerinfo()
    if(allPlayers!==undefined){
        var displayposition=150
        for(var plr in allPlayers){
            if(plr === "player"+player.index){
                fill("red")
            }
            else{
                fill("black")
            }
            displayposition=displayposition+20
            textSize(28)
            text(allPlayers[plr].name+": "+allPlayers[plr].distance,400,displayposition)
        }
    }
    if(keyIsDown(UP_ARROW) && player.index!=null){
   player.distance=player.distance+50
   player.update()
    }
}
}