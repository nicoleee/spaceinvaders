
  var levelData = { 
     1:  [[,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,0,0,0,0,0,2],
          [0,0,0,0,0,2,2,0,0,0,2],
          [0,0,0,0,0,1,1,0,0,0,2]],     //determines location of sprite on gameboard.
     2:  [[0,0,0,0,0,0,0,0,0,0,3],
          [0,0,0,0,0,0,0,0,0,0,3],
          [0,0,0,0,0,0,0,0,0,0,3],
          [0,0,0,0,0,0,0,0,0,0,3],
          [0,0,0,0,0,0,0,0,0,0,3],
          [0,0,2,2,2,2,2,2,2,2,3],
          [0,0,2,2,2,2,2,2,2,2,3],
          [0,0,1,1,1,1,1,1,1,1,3],
          [0,0,1,1,1,1,1,1,1,1,3],
          [0,0,1,1,1,1,1,1,1,1,3],
          [0,0,1,1,1,1,1,1,1,1,3]],
  3:    [[0,0,0,0,0,0,0,0,0,0,4],
          [0,0,0,0,0,0,0,0,0,0,4],
          [0,0,0,0,0,0,0,0,0,0,4],
          [0,0,0,0,0,0,0,0,0,0,4],
          [0,0,0,0,0,0,0,0,0,0,4],
          [0,0,2,2,2,2,2,2,2,2,4], //amount of levels
          [0,0,2,2,2,2,2,2,2,2,4],
          [0,0,1,1,1,1,1,1,1,1,4],
          [0,0,1,1,1,1,1,1,1,1,4],
          [0,0,1,1,1,1,1,1,1,1,4],
          [0,0,1,1,1,1,1,1,1,1,4]]};

  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 23, h: 18, cls: Alien, frames: 3 },
    'alien2': { sx: 0,  sy: 18, w: 23, h: 18, cls: Alien, frames: 3 },
    'player': { sx: 0,  sy: 36, w: 26, h: 17, cls: Player },
    'missile': { sx: 0,  sy: 86, w: 3,  h: 14, cls: Missile }
  }

  function startGame() {
    var screen = new GameScreen("Alien Invaders","press space to start", //text at start of game
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }

  function endGame() {
    var screen = new GameScreen("Game Over","(press space to restart)", //text at end of game when lost
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("You Win!","(press space to restart)", //text at end of game when won
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

  $(function() {
    GameAudio.load({ 'fire' : 'media/laser.ogg', 'die' : 'media/explosion.ogg' }, //sound in game
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });