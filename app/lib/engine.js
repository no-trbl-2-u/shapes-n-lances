( (game, engine) => {
    engine.Entities = [];

    engine.Canvas = {};
    engine.Canvas.element = document.getElementById("canvas");
    engine.Canvas.context = engine.Canvas.element.getContext("2d");
    engine.Canvas.resolution = {
        w: 500,
        h: 500
    };

    const context = engine.Canvas.context;
    const graph =  engine.Entities;

    function animate() {
        // call again next time we can draw
        requestAnimationFrame(animate);
        // clear canvas

        context.clearRect(
            0,
            0,
            500,
            500
        );
        // draw everything
        graph.forEach(function(o) {
            try {
                o.render(engine.Canvas.context, engine);
            } catch (e) {
                console.error(e);
            }
        });

        context.fillStyle = '#000';
        context.fillText('graph.length: ' + graph.length, 10, 10);
    }

    animate();

}) (window.Game = window.Game || {},
    window.Game.Engine = window.Game.Engine || {});