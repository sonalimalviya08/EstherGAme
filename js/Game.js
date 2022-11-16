class Game {
  constructor() {
    this.leaderBoard=createElement("h2")
    this.l1=createElement("h2")
    this.l2=createElement("h2")
    this.resetButton = createButton("");
  }
getState(){
  database.ref("gameState").on("value",function(data){
  gameState=data.val()
  })
}
update(state){
  database.ref("/").update({
  gameState:state
  })
}
  start() {
 player=new Player()
 playerCount=player.getCount()


 form = new Form();
    form.display();
    
    c1=createSprite(width/3-100,height-10)
    c1.addAnimation("cheetah",cheetah1)
    l1=createSprite(width/3-100,height-10)
    l1.addAnimation("lion",lion)
   
    animals=[c1,l1]
    c1.scale=2
    l1.scale=2
  }
  handleElemnts(){
    form.hide()
    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
  }
  play(){
    this.handleElemnts()
    this.handleResetButton();
    Player.getPlayerinfo()
    player.getPlayersATEnd()
    if(allPlayers!==undefined){

      image (track1,width/3-200,0, width*6,height)
    var index=0
    for( var plr in allPlayers) {
      index=index+1 

      // c1.position.x=100
      // l1.position.x=100
      var x = width/3-allPlayers[plr].positionX
      var y = height-100
    animals[index-1].position.x=x
      animals[index-1].position.y=y
      if(index===player.index){
        camera.position.x = animals[index - 1].position.x;
      }
    }
    this.handlePlayer()

    const finshLine = width * 6 - 100;

      if (player.positionX > finshLine) {

         image(track1,width*5,0,- width*6,height)
      
        gameState = 2;
        player.rank += 1;
        Player.updatePlayersAtEnd(player.rank);
        player.update();
        // this.showRank();
        this.gameOver();
      }
      drawSprites()
    }
   
  
  }

  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
        
      });
      window.location.reload();
    });
  }


  handlePlayer(){
  if(keyIsDown(RIGHT_ARROW)){
player.positionX -=10
player.update()
  }
  }

  showRank() {
    swal({
      title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
      text: "You reached the finish line successfully",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }
  gameOver() {
    swal({
      title: `Game Over`,
      text: "Oops you lost the race....!!!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }

}
