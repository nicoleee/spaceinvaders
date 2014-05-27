
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
    'alien1': { sx: 0,  sy: 0,  w: 47, h: 35, cls: Alien, frames: 3 }, //amount of frames for alien 1 determined here
    'alien2': { sx: 0,  sy: 36, w: 47, h: 35, cls: Alien, frames: 3 }, //amount of frames for alien 2 determined here
    'player': { sx: 0,  sy: 72, w: 53, h: 34, cls: Player },
    'missile': { sx: 52,  sy: 95, w: 4,  h: 11, cls: Missile }
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