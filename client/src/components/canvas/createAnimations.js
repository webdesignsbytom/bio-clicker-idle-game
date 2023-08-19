import { AlgaeObject } from '../aglae/algaeObject';

export const createAnimationsOnScreen = (totalAnimationsOnCanvas, algaeRef, numAnimations, canvasRef) => {
    let arrayNum = totalAnimationsOnCanvas;
    let tempStore = algaeRef.current;
    console.log('TempStore', tempStore);

    for (let i = 0; i < numAnimations; i++) {
      let random_x = Math.random() * canvasRef.current.width;
      let random_y = Math.random() * canvasRef.current.height;
      let animation = new AlgaeObject(
        i,
        random_x,
        random_y,
        20,
        'green',
        arrayNum,
        1 // speed
      );
      arrayNum++;
      tempStore.push(animation);
    }

    algaeRef.current = tempStore;
  };