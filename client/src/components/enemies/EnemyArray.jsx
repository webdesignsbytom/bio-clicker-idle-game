import React, { useEffect, useState } from 'react';

function EnemyArray() {
  const useScript = (url) => {
    useEffect(() => {
      let canvasBgColour = `#00f000`;
      let algaeColour = `#000000`;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const container = document.querySelector('#game-container');

      container.appendChild(canvas);

      var rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Draw canvas
      context.fillStyle = canvasBgColour;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Mouse size
      let mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 90) * (canvas.width / 90),
      };

      // Mouse position
      container.addEventListener('mousemove', function (e) {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      // Listen for clicks
      // If click hits an enemy. They run the 'clicked()' function
      canvas.addEventListener('click', (e) => {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        console.log('CLICK');

        enemySwarmArray.forEach(function (algae) {
          if (
            Math.pow(x - algae.xpos, 2) + Math.pow(y - algae.ypos, 2) <
            Math.pow(algae.radius, 2)
          ) {
            console.log('PPP');
            algae.enemyHit();
          }
        });
      });

      // Class Definition for enemy moving around the canvas
      class Algae {
        constructor(id, xpos, ypos, radius, colour, count, speed) {
          this.id = id;
          this.xpos = xpos;
          this.ypos = ypos;
          this.radius = radius;
          this.colour = colour;
          this.count = count; // Number of instance in the array
          this.speed = speed; // Moving speed
          this.enemyHit = function () {
            console.log('Enemy Hit'); // this = enemy instance data
            // hitCount++;
            // this.delete(); // Remove enemy from array
          };
          this.dx = 1 * this.speed;
          this.dy = 1 * this.speed;
        }

        // Draw algae on canvas
        draw(context) {
          context.beginPath();
          context.strokeStyle = this.colour;
          context.lineWidth = 4;
          context.textAlign = 'center'; // Data in center of algae
          context.textBaseline = 'middle';
          context.font = '20px Arial';
          context.fillStyle = this.colour;
          context.fillText(this.count, this.xpos, this.ypos); //
          context.arc(this.xpos, this.ypos, this.radius, Math.PI * 2, false);
          context.stroke();
          context.closePath();
        }

        // Movement
        update() {
          this.draw(context);

          // Detect collisions
          if (this.xpos > canvas.width) {
            this.dx = -this.dx;
          }

          if (this.xpos - this.radius < 0) {
            this.dx = -this.dx;
          }

          if (this.ypos > canvas.height) {
            this.dy = -this.dy;
          }

          if (this.ypos - this.radius < 0) {
            this.dy = -this.dy;
          }

          this.xpos += this.dx;
          this.ypos += this.dy;
        }

        // Delete algae on click
        delete() {
          console.log(
            'Enemy died later in hospital, his widow was told he survived and then had her heart broken twice.'
          );
          const foundAlgae = enemySwarmArray.find((a) => a.id === this.id);
          const algaeIndex = enemySwarmArray.indexOf(foundAlgae);
          console.log('foundAlgae', algaeIndex);
          enemySwarmArray.splice(algaeIndex, 1);
        }
      }

      let totalSizeOfAlgaeArray = 25; // Number of enemies to create
      let enemySwarmArraySize = 1; // Current number of enemies
      let enemySwarmArray = []; // Store enemies created here
      let hitCount = 0; // Enemies Hit

      if (enemySwarmArraySize < totalSizeOfAlgaeArray) {
        // Create enemy array
        for (let i = enemySwarmArraySize; i < totalSizeOfAlgaeArray; i++) {
          console.log('enemySwarmArray', enemySwarmArray);
          let random_x = Math.random() * canvas.width;
          let random_y = Math.random() * canvas.height;
          const newEnemy = new Algae(
            i,
            random_x,
            random_y,
            20,
            'red',
            enemySwarmArraySize,
            1
          );
          newEnemy.draw(context);

          enemySwarmArraySize++;
          enemySwarmArray.push(newEnemy);
        }
      }

      // Redraw each frame of the screen
      function updateSwarm() {
        requestAnimationFrame(updateSwarm);
        context.clearRect(0, 0, canvas.width, canvas.height);
        enemySwarmArray.forEach((algae) => {
          algae.update();
        });
      }

      function run() {
        updateSwarm();
      }

      run();
    }, [url]);
  };

  return (
    <div id='game-container' className='grid absolute w-full h-full'>
      {useScript()}
    </div>
  );
}

export default EnemyArray;
