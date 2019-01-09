( (Game, Models, Engine) => {
  const player = new Models.Entity("player", 2, 2, 100, 100);
  
  player.logPosition()
  player.move(1, -1)
  player.logPostision()

}) (window.Game = window.Game || {},
    window.Game.Models = window.Game.Models || {},
    window.Game.Engine = window.Game.Engine || {});