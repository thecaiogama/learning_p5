
function getStrokeWeight() {
    const thinWeight  = 1;
    const thickWeight = 3;

    return randomSelectTwo() ? thinWeight: thickWeight;

}

function getRandomColor(palette) {
    const randomColor = floor(random(0, palette.length));
    return palette[randomColor];
}

function randomSelectTwo() {
    return (random(1) > 0.5)? true: false;
}

function getNumShapes() {
    return (randomSelectTwo())? SIDES : SIDES * 2;
}

function decideOuterShape() {
    return (randomSelectTwo())? "ellipse" : "hexagon";
}

function drawOuterShape(outerShape_, x_ = 0, y_ = 0, size_ = CRYSTAL_SIZE) {
    (outerShape_ == "ellipse") ? ellipse(x_, y_, size_, size_) : hexagon(x_, y_, size_/2);
}

function centerShape() {
    translate(width/2, height/2);
}