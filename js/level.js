
  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],      //numbers determine what sprite is used
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,1,2,1,2,1,2,0,0],
          [0,0,0,2,1,2,1,2,1,0,0],
          [0,0,0,1,2,1,2,1,2,0,0]],     //determines location of sprite on gameboard.
     2:  [[0,0,0,1,0,0,0,0,1,0,0],
          [0,0,0,2,0,0,0,0,2,0,0],
          [0,0,0,1,0,0,0,0,1,0,0],
          [0,0,0,2,0,0,0,0,2,0,0],
          [0,0,1,0,1,1,1,1,0,1,0],
          [0,0,2,0,2,2,2,2,0,2,0],
          [0,0,1,0,1,1,1,1,0,1,0],
          [0,0,2,0,2,2,2,2,0,2,0],
          [0,0,1,0,1,1,1,1,0,1,0],
          [0,0,2,0,2,2,2,2,0,2,0],
          [0,0,1,0,1,1,1,1,0,1,0]],
  3:     [[1,0,2,0,1,0,2,0,1,0,2],
          [2,0,1,0,2,0,1,0,2,0,1],
          [1,0,2,0,1,0,2,0,1,0,2],
          [2,0,1,0,2,0,1,0,2,0,1],
          [1,0,2,0,1,0,2,0,1,0,2],
          [2,0,1,0,2,0,1,0,2,0,1],  //amount of levels
          [1,0,2,0,1,0,2,0,1,0,2],
          [2,0,1,0,2,0,1,0,2,0,1],
          [1,0,2,0,1,0,2,0,1,0,2],
          [2,0,1,0,2,0,1,0,2,0,1],
          [1,0,2,0,1,0,2,0,1,0,2]],
4:       [[1,1,1,1,1,1,1,1,1,1,1],
          [2,2,2,2,2,2,2,2,2,2,2],
          [1,1,1,1,1,1,1,1,1,1,1],
          [2,2,2,2,2,2,2,2,2,2,2],
          [1,1,1,1,1,1,1,1,1,1,1],
          [2,2,2,2,2,2,2,2,2,2,2],  //amount of levels
          [1,1,1,1,1,1,1,1,1,1,1],
          [2,2,2,2,2,2,2,2,2,2,2],
          [1,1,1,1,1,1,1,1,1,1,1],
          [2,2,2,2,2,2,2,2,2,2,2],
          [1,1,1,1,1,1,1,1,1,1,1]]};

  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 23, h: 18, cls: Alien, frames: 3 }, //amount of frames for alien 1 determined here
    'alien2': { sx: 0,  sy: 18, w: 23, h: 18, cls: Alien, frames: 3 }, //amount of frames for alien 2 determined here
    'player': { sx: 0,  sy: 36, w: 26, h: 17, cls: Player },
    'missile': { sx: 0,  sy: 86, w: 3,  h: 14, cls: Missile }
  }

  function startGame() {
    var screen = new GameScreen("Space Invaders","press space to start", //text at start of game
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }

  function endGame() {
    var screen = new GameScreen("GAME OVER","press space to restart", //text at end of game when lost
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("YOU WIN","press space to restart", //text at end of game when won
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