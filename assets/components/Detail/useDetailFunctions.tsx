import {
  TDetailType,
  TCarItem,
  TOwnerItem,
  TDetailFunctions,
  TDetailItemFunctions,
} from './DetailTypes';

const EMPTY_CAR = {
  id: -1,
  manufacturer: '',
  model: '',
  production: new Date().toLocaleDateString('ru'),
  color: '',
  power: 0,
  mileage: 0,
  comment: '',
};

const EMPTY_OWNER_ID = -10;
//const UNDEFINED_OWNER = -1;

const EMPTY_OWNER: TOwnerItem = {
  id: EMPTY_OWNER_ID, // indicate new owner, -1 means undefined owner
  cars: [],
  name: '',
  patronymic: '',
  last_name: '',
  gender: 'f',
  age: 0,
  comment: '',
};

const functions: TDetailFunctions = {
  car: {
    url: '/api/car/',
    tooltipPlace: 'bottom',

    getNewItemId: (): number => -1,
    getNewItem: () => {
      const item: TCarItem = EMPTY_CAR;
      //console.log('getNewItem', item);

      return item;
    },
  },
  owner: {
    url: '/api/owner/',
    tooltipPlace: 'bottom',

    getNewItemId: (): number => EMPTY_OWNER_ID,
    getNewItem: () => {
      return EMPTY_OWNER;
    },
  },
};

export const useDetailFunctions = (detailType: TDetailType) => {
  return functions[detailType];
};
