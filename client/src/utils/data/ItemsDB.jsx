// Images
import Finger from '../../assets/images/items/pointer.png'
import AIComputer from '../../assets/images/items/algorithm.png'
import SolarPanel from '../../assets/images/items/solar-panel.png'
import TestTube from '../../assets/images/items/test-tube.png'
import CoffeeMachine from '../../assets/images/items/coffee-machine.png'
import Printer3D from '../../assets/images/items/factory-machine.png'
import PackingMachine from '../../assets/images/items/packing-machine.png'
import FillingMachine from '../../assets/images/items/filling-machine.png'
import WaterPump from '../../assets/images/items/water-pump.png'
import Nutrients from '../../assets/images/items/nutrients.png'
import Ultraviolet from '../../assets/images/items/ultraviolet.png'
import UnltrasonicRefinery from '../../assets/images/items/unltrasonicRefinery.png'

export const ItemsDB = {

  title: 'Items', 
  type: 'items',
  content: [
    {
      id: 1,
      name: 'Finger',
      type: 'pointsPerClick',
      typetitle: 'PPC',
      effect: 1,
      cost: 10,
      image: Finger,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 2,
      name: 'Solar Panel',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 5,
      cost: 25,
      image: SolarPanel,
      income: 0,
      desc: 'The panels earn for you all day once installed',
    },
    {
      id: 3,
      name: 'Algae Tubes',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 50,
      cost: 100,
      image: TestTube,
      income: 0,
      desc: 'Growth tubes for research and fuel production',
    },
    {
      id: 4,
      name: 'Nutrients',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 250,
      cost: 1000,
      image: Nutrients,
      income: 0,
      desc: 'Barrels of growth medium and fertilizers to increase growth',
    },
    {
      id: 5,
      name: 'UV Lamps',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 1000,
      cost: 10000,
      image: Ultraviolet,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 6,
      name: 'Ultrasounic Refinery',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 5000,
      cost: 50000,
      image: UnltrasonicRefinery,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 7,
      name: 'Water Pumps',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 250000,
      cost: 1000000,
      image: WaterPump,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 8,
      name: 'Filling Machine',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 500000,
      cost: 2500000,
      image: FillingMachine,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 9,
      name: '3D Printer',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 1000000,
      cost: 10000000,
      image: Printer3D,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 10,
      name: 'Packaging Machine',
      type: 'pointsPerClick',
      typetitle: 'PPC',
      effect: 1000,
      cost: 12500000,
      image: PackingMachine,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 11,
      name: 'Coffee Machine',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 10000000,
      cost: 1000000000,
      image: CoffeeMachine,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 11,
      name: 'AI Computer',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 100000000,
      cost: 10000000000,
      image: AIComputer,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
  ],
};
