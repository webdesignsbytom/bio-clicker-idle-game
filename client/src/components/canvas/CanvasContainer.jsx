import React, { useEffect, useRef, useState } from 'react';
// Components
import { createAnimationsOnScreen } from './createAnimations';

function CanvasContainer() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const algaeRef = useRef([]);

  const [numAnimations, setNumAnimations] = useState(20);
  const [totalAnimationsOnCanvas, setTotalAnimationsOnCanvas] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    var rect = canvas.parentNode.getBoundingClientRect();

    canvas.style.backgroundColor = '#bee0ec';

    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const context = canvas.getContext('2d');

    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;

    context.clearRect(0, 0, canvas.width, canvas.height);

    createAnimationsOnScreen(
      totalAnimationsOnCanvas,
      setTotalAnimationsOnCanvas,
      algaeRef,
      numAnimations,
      canvasRef
    );

    algaeRef.current.forEach((algae) => {
      algae.draw(context);
    });
    
    console.log('OOOOOOOOOOOooo');
    updateSwarm();
  }, []);

  const splitAlgaeAtRandom = () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;

    if (randomNum > 8) {
      let randomCountNum = Math.floor(Math.random() * 20) + 1;

      algaeRef.current.forEach((algae) => {
        if (algae.id === randomCountNum) {
          algae.split(
            algaeRef,
            totalAnimationsOnCanvas,
            setTotalAnimationsOnCanvas
          );
        }
      });
    }
  };

  splitAlgaeAtRandom();

  const updateSwarm = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    requestAnimationFrame(updateSwarm);
    context.clearRect(0, 0, canvas.width, canvas.height);

    algaeRef.current.forEach((algae) => {
      algae.update(context, canvas);
    });
  };

  const attackAlgae = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    algaeRef.current.forEach(function (algae) {
      const distanceSquared =
        Math.pow(offsetX - algae.xpos, 2) + Math.pow(offsetY - algae.ypos, 2);

      if (distanceSquared < Math.pow(algae.radius, 2)) {
        algae.clicked(algaeRef);
      }
    });
  };

  return (
    <canvas
      className='grid absolute w-full h-full'
      ref={canvasRef}
      onMouseDown={attackAlgae}
    />
  );
}

export default CanvasContainer;
