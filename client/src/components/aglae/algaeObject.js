export class AlgaeObject {
  constructor(id, xpos, ypos, radius, colour, count, speed) {
    this.id = id;
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.colour = colour;
    this.count = count;
    this.speed = speed;
    this.clicked = function (algaeRef) {
        this.delete(algaeRef); // Remove enemy from array
      };
    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
  }

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
  update(context, canvas) {
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
  delete(algaeRef) {
    const foundAlgae = algaeRef.current.find((a) => a.id === this.id);
    const algaeIndex = algaeRef.current.indexOf(foundAlgae);
    algaeRef.current.splice(algaeIndex, 1);
  }
}
