( (Game, Models, Engine) => {

  const player = new Models.Entity("player", 10, 15, 100, 100, 10);

    Engine.Entities.push(player);


}) (window.Game = window.Game || {},
    window.Game.Models = window.Game.Models || {},
    window.Game.Engine = window.Game.Engine || {});

