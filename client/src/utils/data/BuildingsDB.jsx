// Images
import FireStation from '../../assets/images/buildings/fire-station.png'
import Pond from '../../assets/images/buildings/pond.png'
import SmallFactory from '../../assets/images/buildings/factory.png'
import Transformer from '../../assets/images/buildings/transformer.png'
import FuelStorage from '../../assets/images/buildings/fuelStorage.png'
import LargePowerStation from '../../assets/images/buildings/largePowerStation.png'
import SmallPowerPlant from '../../assets/images/buildings/smallPowerPlant.png'
import WaterPurifier from '../../assets/images/buildings/waterStorage.png'
import FuelRefinery from '../../assets/images/buildings/fuelRefinery.png'
import OfficeBuilding from '../../assets/images/buildings/officeBuilding.png'
import GreenFactory from '../../assets/images/buildings/green-factory.png'

export const BuildingsDB = {
  title: 'Buildings',
  type: 'buildings',
  content: [
    {
      id: 1,
      name: 'Algae Pond',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 100,
      cost: 1000,
      image: Pond,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 2,
      name: 'Water Purifier',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 1000,
      cost: 2500,
      image: WaterPurifier,
      income: 0,
      desc: 'The panels earn for you all day once installed',
    },
    {
      id: 3,
      name: 'Corprate Office',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 5000,
      cost: 25000,
      image: OfficeBuilding,
      income: 0,
      desc: 'Growth tubes for research and fuel production',
    },
    {
      id: 4,
      name: 'Fire Station',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 15000,
      cost: 150000,
      image: FireStation,
      income: 0,
      desc: 'Barrels of growth medium and fertilizers to increase growth',
    },
    {
      id: 5,
      name: 'Fuel Refinery',
      type: 'fuel-production',
      typetitle: 'Fuel Production',
      effect: 'Production',
      cost: 250000,
      image: FuelRefinery,
      income: null,
      desc: 'Unlocks fuel producers that turn your algae into fuel',
    },
    {
      id: 6,
      name: 'Fuel Storage',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 25000,
      cost: 500000,
      image: FuelStorage,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 7,
      name: 'Factory',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 100000,
      cost: 1010010,
      image: SmallFactory,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 8,
      name: 'Power Plant',
      type: 'power-production',
      typetitle: 'Power Production',
      effect: null,
      cost: 100000000,
      image: SmallPowerPlant,
      income: 0,
      desc: 'Start your town producing power from the fuel you make',
    },
    {
      id: 9,
      name: 'Transformer Station',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 1000000,
      cost: 5000000,
      image: Transformer,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
    {
      id: 10,
      name: 'Green Factory',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 12,
      cost: 11,
      image: GreenFactory,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
  
    {
      id: 11,
      name: 'booster11',
      type: 'pointsPerSecond',
      typetitle: 'PPS',
      effect: 12,
      cost: 11,
      image: LargePowerStation,
      income: 0,
      desc: 'Each finger doubles the amount of points earned per click on the screen',
    },
  ],
};
