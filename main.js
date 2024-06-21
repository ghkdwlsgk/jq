import {FRUITS} from "./fruits.js"

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
        width : 620,
        height : 850,
    }
})

const world = engine.world;
const leftWall = Bodies.rectangle(15,395, 30,790,{
    isStatic : true,
    render : {fillStyle:'#E6B143'}
})

const rightWall = Bodies.rectangle(605,395, 30,790,{
    isStatic : true,
    render : {fillStyle:'#E6B143'}
})

const gorund = Bodies.rectangle(310,820, 620,60,{
    isStatic : true,
    render : {fillStyle:'#E6B143'}
})
 
const topLine = Bodies.rectangle(310,150, 620,3,{
    isStatic : true,
    isSensor : true,
    render : {fillStyle:'#E6B143'}
})

World.add(world, [leftWall,rightWall,gorund,topLine]);

Reader.run(render);
Runner.run(engine);

let currentBody = null;
let currentFruit = null;

//과일 떨구기
function addFruit(){

    const index = Math.floor(Math.random()*5);

    const fruit =FRUITS[index]

    const body = Bodies.circle(300, 50, fruit.radius,{
        
        index: index,
        isSleeping : true,

        render:{
            sprite : { texture: `${fruit.name}.png`},

        },
        restitution : 1
    });

    currentBody = body;
    currentFruit = fruit;

    World.add(world,body);
}

addFruit();