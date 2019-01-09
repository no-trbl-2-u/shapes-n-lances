( (Game, Models, Engine) => {
    const thing = new Models.Entity(2, 2, 100, 100);

    thing.dance();

    console.log(thing.x, thing.y);

}) (window.Game = window.Game || {},
    window.Game.Models = window.Game.Models || {},
    window.Game.Engine = window.Game.Engine || {});