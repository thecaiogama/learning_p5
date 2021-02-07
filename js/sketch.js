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
        noFill();
        centerShape();
        const outerShape = decideShape();
        drawOuterShape(outerShape, 0, 0, CRYSTAL_SIZE);
        growingFromCenter(outerShape);
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

    for(let i = 0; i < numShapes; i++) {
        ellipse(position, 0, shapesSize, shapesSize);
        rotate(angle);
    }
}


function simpleLines() {
    const numShapes = getNumShapes();
    const angle     = 360/numShapes;

    const stepsOut = 8;

    const steps = calculateSteps(stepsOut, randomSelectTwo(), CRYSTAL_SIZE);

    strokeWeight(getStrokeWeight());
    stroke(getRandomColor(PALETTE));
    for(let i = 0; i < numShapes; i++) {
        line(steps.start * steps.step, 0, steps.end * steps.step, 0);
        rotate(angle);
    }
}

function growingFromCenter(outerShape_) {
    const shape   = decideShape();
    let numShapes = SIDES;
    let unit      = floor(CRYSTAL_SIZE/numShapes);
    
    unit = (!(shape == "hexagon" && outerShape_ == "ellipse"))? floor((CRYSTAL_SIZE -unit)/numShapes) : unit;

    let size      = unit;

    stroke(getRandomColor(PALETTE));
    strokeWeight(getStrokeWeight());


    for(let i = 0; i < numShapes; i++) {
        size = (i == 0)? unit :  unit * (i+1);

        (shape == "ellipse")? ellipse(0, 0, size, size) :  hexagon(0, 0, size/2);
    }

}