import React from 'react';
import Sketch from 'react-p5';


function SketchPaper({width, height}) {
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background(0);
	};

	const draw = (p5) => {        
		
        if (p5.mouseIsPressed) {
            p5.ellipse(p5.mouseX, p5.mouseY, 70, 70);
        }
	};

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        p5.background(0);
    }
	return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};

export default SketchPaper;