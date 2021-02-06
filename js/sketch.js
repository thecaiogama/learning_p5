const CRYSTAL_SIZE = 500;
const SIDES        = 6;
let PALETTE        = [];

function setup() {
    createCanvas(600, 600, SVG);
    noLoop();

    PALETTE = [
        color(255, 52, 154)
        , color(4, 0, 152)
    ];

    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() { 
    //testLines();
    getOutlineShape();
}


function getOutlineShape() {

    stroke(getRandomColor(PALETTE));
    strokeWeight(getStrokeWeight());

    push();
        centerShape();
        const outerShape = decideOuterShape();
        drawOuterShape(outerShape, 0, 0, CRYSTAL_SIZE);
        simpleLines();
        circles();
    pop();
}

function circles() {
    const numShapes = SIDES;
    const angle = 360 / numShapes;
    const shapesSize = (CRYSTAL_SIZE / floor(random(2, 9))) * 0.93;
    const position = (CRYSTAL_SIZE /2) - (shapesSize / 2);

    stroke(getRandomColor(PALETTE));
    strokeWeight(getStrokeWeight());
    noFill();

    for(let i = 0; i < numShapes; i++) {
        ellipse(position, 0, shapesSize, shapesSize);
        rotate(angle);
    }
}


function simpleLines() {
    const numShapes = getNumShapes();
    const angle     = 360/numShapes;

    const stepsOut = 8;
    const numSteps = randomSelectTwo()? stepsOut : int(stepsOut * 1.25);

    const step = (CRYSTAL_SIZE / 2) / numSteps;
    const start = floor(random(0, numSteps));
    const stop = floor(random(0, numSteps + 1));

    strokeWeight(getStrokeWeight());
    stroke(getRandomColor(PALETTE));
    for(let i = 0; i < numShapes; i++) {
        line(start * step, 0, 8 * step, 0);
        rotate(angle);
    }
}