import { AlgaeObject } from '../algae/algaeObject';

export const createAnimationsOnScreen = (totalAnimationsOnCanvas, setTotalAnimationsOnCanvas, algaeRef, numAnimations, canvasRef) => {
    let arrayNum = totalAnimationsOnCanvas;
    let tempStore = algaeRef.current;

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
    setTotalAnimationsOnCanvas(arrayNum)
    algaeRef.current = tempStore;
  };