import React from 'react';
import Sketch from 'react-p5';


function SketchPaper({width, height}) {

    let s1, s2, s3, s4, s5;
    var gravity = 9.0;
    let mass = 2.0;
    
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(width, height-80).parent(canvasParentRef);
        p5.fill(255, 126);
        // 입력: x, y, mass(질량), gravity(중력)
        s1 = new Spring2D(0.0, width / 2, mass, gravity, p5);
        s2 = new Spring2D(0.0, width / 2, mass, gravity, p5);
        s3 = new Spring2D(0.0, width / 2, mass, gravity, p5);
        s4 = new Spring2D(0.0, width / 2, mass, gravity, p5);
        s5 = new Spring2D(0.0, width / 2, mass, gravity, p5);
        
	};

	const draw = (p5) => {     
        // p5.background(0);
      

        
		
        if (p5.mouseIsPressed) {
            p5.strokeWeight(0.1)
            // p5.ellipse(p5.mouseX + p5.random(-10, 10), p5.mouseY+ p5.random(-10, 10), 100, 100);
            // p5.strokeWeight(0.1)
            // p5.bezier(
            //     p5.mouseX + p5.random(-10, 10),
            //     p5.mouseY + p5.random(-10, 10),
            //     p5.mouseX + p5.random(-600, 600),
            //     p5.mouseY + p5.random(-600, 600),
            //     p5.mouseX + p5.random(-10, 10),
            //     p5.mouseY + p5.random(-10, 10),
            //     p5.mouseX + p5.random(-600, 600),
            //     p5.mouseY + p5.random(-600, 600)
            // );

            s1.update(p5.mouseX, p5.mouseY);
            s1.display(p5.mouseX, p5.mouseY);
            s2.update(s1.x, s1.y);
            s2.display(s1.x, s1.y);
            s3.update(s2.x, s2.y);
            s3.display(s2.x, s2.y);
            s4.update(s3.x, s3.y);
            s4.display(s3.x, s3.y);
            s5.update(s4.x, s4.y);
            s5.display(s4.x, s4.y);
        }


    
	};

    function Spring2D(xpos, ypos, m, g, p5) {
        this.x = xpos;// x 와 y 좌표
        this.y = ypos;
        this.vx = 0; // x축과 y축 속도
        this.vy = 0;
        this.mass = m;
        this.gravity = g;
        this.radius = 10;
        this.stiffness = 0.2;
        this.damping = 0.7;
      
        this.update = function(targetX, targetY) {
          let forceX = (targetX - this.x) * this.stiffness;
          let ax = forceX / this.mass;
          this.vx = this.damping * (this.vx + ax);
          this.x += this.vx;
          let forceY = (targetY - this.y) * this.stiffness;
          forceY += this.gravity;
          let ay = forceY / this.mass;
          this.vy = this.damping * (this.vy + ay);
          this.y += this.vy;
        }
      
        this.display = function(nx, ny) {
          p5.noStroke();
          p5.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
          p5.stroke(255);
          p5.line(this.x, this.y, nx, ny);
        }
    }

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight-80);
        p5.background(0);
    };

	return <Sketch setup={setup} draw={draw} windowResized={windowResized}/>;
};

export default SketchPaper;