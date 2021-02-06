function hexagon (posX, posY, radius) {                     
    const rotAngle = 360 / 6
    beginShape()
    for (let i = 0; i < 6; i++) {
      const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
      vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
  }
  
  function pointOnCircle (posX, posY, radius, angle) {         
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
  }



  function testLines() {
    const numShapes = getNumShapes();

    noFill();
    stroke(PALETTE[0]);
    push();
        translate(width/2, height/2);
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
        
        const angle = 360/numShapes;

        for(let i = 0; i < numShapes; i++) {
            stroke(getRandomColor());
            line(0,0, CRYSTAL_SIZE/2, 0);

            rotate(angle);
        }
        
    pop();
}