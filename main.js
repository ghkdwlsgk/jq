let Engine = Matter.Engine,
    Reader = Matter .Render,
    Runner = Matter .Runner,
    Bodies = Matter .Bodies,
    World = Matter .World

const engine = Engine.create();

const render = Reader.create({
    engine,
    element : document.body,
    options: {
        wireframes : false,
        background : '#F7F4C8',
        width : 420,
        height : 850,
    }
})

Reader.run(render);
Runner.run(engine);