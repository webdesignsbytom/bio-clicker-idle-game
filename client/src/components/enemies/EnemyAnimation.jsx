import React, { useEffect } from 'react';
// Styles
import './canvas.css';

function EnemyAnimation() {

  const useScript = (url) => {
    useEffect(() => {
      let bgColour = `#000000`
      let particleColour = `#000000`

      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        bgColour = `#ffffff`
        particleColour = `#ffffff`
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const container = document.querySelector('#game-container');

      container.appendChild(canvas);

      var rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      let particlesArray;

      let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 90) * (canvas.width / 90),
      };

      container.addEventListener('mousemove', function (e) {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      class Particle {
        constructor(x, y, directionX, directionY, size, colour, speed) {
          this.x = x;
          this.y = y;
          this.directionX = directionX;
          this.directionY = directionY;
          this.size = size;
          this.colour = colour;
          this.speed = speed;
        }

        // draw each particle
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
          ctx.fillStyle = bgColour;
          ctx.fill();
        }
        // check particle position
        update() {
          // check is particle is still in canvas
          if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
          }
          if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionX;
          }

          // check for collision
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
              this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
              this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
              this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
              this.y -= 10;
            }
          }
          // move
          this.x += this.directionX;
          this.y += this.directionY;

          // draw
          this.draw();
        }
      }

      function init() {
        particlesArray = [];
        // create particle array for large screen
        if (canvas.width < 500) {
          let numberOfParticles = (canvas.height * canvas.width) / 1800;
          for (let i = 0; i < numberOfParticles * 2.2; i++) {
            let size = Math.random() * 2 + 1;
            let x =
              Math.random() * (rect.width - size * 2 - size * 2) + size * 2;
            let y =
              Math.random() * (rect.height - size * 2 - size * 2) + size * 2;
            let directionX = Math.random() * 5 - 2.5;
            let directionY = Math.random() * 5 - 2.5;
            let colour = particleColour;

            particlesArray.push(
              new Particle(x, y, directionX, directionY, size, colour)
            );
          }
        } else {
          let numberOfParticles = (canvas.height * canvas.width) / 1800;
          for (let i = 0; i < numberOfParticles; i++) {
            let size = Math.random() * 4 + 1;
            let x =
              Math.random() * (rect.width - size * 2 - size * 2) + size * 2;
            let y =
              Math.random() * (rect.height - size * 2 - size * 2) + size * 2;
            let directionX = Math.random() * 5 - 2.5;
            let directionY = Math.random() * 5 - 2.5;
            let colour = particleColour;

            particlesArray.push(
              new Particle(x, y, directionX, directionY, size, colour)
            );
          }
        }
      }

      // check if particles are close enough to draw a line between
      function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
          for (let b = 0; b < particlesArray.length; b++) {
            let distance =
              (particlesArray[a].x - particlesArray[b].x) *
                (particlesArray[a].x - particlesArray[b].x) +
              (particlesArray[a].y - particlesArray[b].y) *
                (particlesArray[a].y - particlesArray[b].y);

            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
              if (canvas.width < 500) {
                opacityValue = 1 - distance / 1500;
              } else {
                opacityValue = 1 - distance / 5000;
              }

              if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
              ) {
                ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';
              } else {
                ctx.strokeStyle = 'rgba(0,0,0,' + opacityValue + ')';
              }
              ctx.beginPath();
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, rect.width, rect.height);

        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
        }

        connect();
      }

      init();
      animate();

      window.addEventListener('resize', () => {
        canvas.width = rect.width;
        canvas.height = rect.height;
        init();
      });
      return () => {
        window.removeEventListener('resize', () => {
          canvas.width = rect.width;
          canvas.height = rect.height;
          init();
        });
      };
    }, [url]);
  };
  
  // const useScript = (url) => {
  //   useEffect(() => {
  //     // Get containers
  //     const canvas = document.getElementById('canvas');
  //     // const countContainer = document.getElementById('click__count');
  //     // const container = document.querySelector('#game-container');
  //     // container.appendChild(canvas);
  //     // // Listen for clicks
  //     // // If click hits an enemy. They run the 'clicked()' function
  //     // canvas.addEventListener('click', (e) => {
  //     //   var x = e.pageX - canvas.offsetLeft;
  //     //   var y = e.pageY - canvas.offsetTop;
  //     //   console.log('x', x);
  //     //   console.log('y', y);

  //     //   algaeArray.forEach(function (algae) {
  //     //     if (
  //     //       Math.pow(x - algae.xpos, 2) + Math.pow(y - algae.ypos, 2) <
  //     //       Math.pow(algae.radius, 2)
  //     //     ) {
  //     //       algae.clicked();
  //     //     }
  //     //   });
  //     // });

  //     // let context = canvas.getContext('2d');

  //     // let window_height = window.innerHeight / 2;
  //     // let window_width = window.innerWidth / 2;

  //     // canvas.width = window_width;
  //     // canvas.height = window_height;

  //     // // Class Definition for enemy moving around the canvas
  //     // class Algae {
  //     //   constructor(id, xpos, ypos, radius, color, count, speed) {
  //     //     this.id = id;
  //     //     this.xpos = xpos;
  //     //     this.ypos = ypos;
  //     //     this.radius = radius;
  //     //     this.color = color;
  //     //     this.count = count; // Number of instance in the array
  //     //     this.speed = speed; // Moving speed

  //     //     this.clicked = function () {
  //     //       console.log('Enemy Hit', this); // this = enemy instance data
  //     //       clickedOnCount++;
  //     //       renderCounts(); // NEEDS STATE
  //     //       this.delete(); // Remove enemy from array
  //     //       // Add death animation
  //     //     };

  //     //     this.dx = 1 * this.speed;
  //     //     this.dy = 1 * this.speed;
  //     //   }

  //     //   // Draw algae on canvas
  //     //   draw(context) {
  //     //     context.beginPath();

  //     //     context.strokeStyle = this.color;
  //     //     context.lineWidth = 4;

  //     //     context.textAlign = 'center'; // Data in center of algae
  //     //     context.textBaseline = 'middle';
  //     //     context.font = '20px Arial';
  //     //     context.fillText(this.count, this.xpos, this.ypos); //

  //     //     context.arc(this.xpos, this.ypos, this.radius, Math.PI * 2, false);

  //     //     context.stroke();
  //     //     context.closePath();
  //     //   }

  //     //   // Movement
  //     //   update() {
  //     //     this.draw(context);

  //     //     // Detect collisions
  //     //     if (this.xpos > canvas.width) {
  //     //       this.dx = -this.dx;
  //     //     }

  //     //     if (this.xpos - this.radius < 0) {
  //     //       this.dx = -this.dx;
  //     //     }

  //     //     if (this.ypos > canvas.height) {
  //     //       this.dy = -this.dy;
  //     //     }

  //     //     if (this.ypos - this.radius < 0) {
  //     //       this.dy = -this.dy;
  //     //     }

  //     //     this.xpos += this.dx;
  //     //     this.ypos += this.dy;
  //     //   }

  //     //   // Delete algae on click
  //     //   delete() {
  //     //     console.log(
  //     //       'Enemy died later in hospital, his widow was told he survived and then had her heart broken twice.'
  //     //     );
  //     //     const foundAlgae = algaeArray.find((a) => a.id === this.id);
  //     //     const algaeIndex = algaeArray.indexOf(foundAlgae);
  //     //     console.log('foundAlgae', algaeIndex);
  //     //     algaeArray.splice(algaeIndex, 1);
  //     //   }
  //     // }

  //     // let createArray = 10; // Number of enemies to create
  //     // let algaeCounter = 1; // Current number of enemies
  //     // let algaeArray = []; // Store enemies created here
  //     // let clickedOnCount = 0; // Enemies Hit

  //     // // Start a swarm moving around the screen
  //     // function clickFunctionSwarm() {
  //     //   for (let i = 0; i < createArray; i++) {
  //     //     let random_x = Math.random() * window_width;
  //     //     let random_y = Math.random() * window_height;

  //     //     const algaeSwarm = new Algae(
  //     //       i,
  //     //       random_x,
  //     //       random_y,
  //     //       20,
  //     //       'red',
  //     //       algaeCounter,
  //     //       1
  //     //     );
  //     //     algaeSwarm.draw(context);
  //     //     algaeArray.push(algaeSwarm);

  //     //     algaeCounter++;
  //     //   }
  //     // }

  //     // // Redraw each frame of the screen
  //     // function updateSwarm() {
  //     //   requestAnimationFrame(updateSwarm);
  //     //   context.clearRect(0, 0, canvas.width, canvas.height);
  //     //   algaeArray.forEach((algaeSwarm) => {
  //     //     algaeSwarm.update();
  //     //   });
  //     // }

  //     // // Needs to become a react state
  //     // function renderCounts() {
  //     //   countContainer.innerText = `Algae Clicked On: ${clickedOnCount}`;
  //     // }

  //     // function run() {
  //     //   renderCounts();
  //     //   updateSwarm();
  //     // }

  //     // run();
  //   }, [url]);
  // };

  return (
    <>
      {/* <canvas id='canvas'></canvas> */}
      <div id='game-container' className='grid absolute w-full h-full'>
        {useScript()}
      </div>
    </>
  );
}

export default EnemyAnimation;
