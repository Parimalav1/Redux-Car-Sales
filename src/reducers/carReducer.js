import { ADD_FEATURE, REMOVE_FEATURE, CLEARALL_FEATURES } from '../actions/carfeatureActions';

export const initialCar = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const reducer = (state = initialCar, action) => {
      console.log('reducer called: ' + JSON.stringify(action));
    switch (action.type) {
        case ADD_FEATURE:
            // const newFeature = 'mileage';
            console.log('Type has matched ADD_FEATURE')
            return {
                ...state,
                // expanding car object
                car: {
                 ...state.car,
                //  expanding car's feature 
                 features: [...state.car.features, action.payload],
                 price: (state.car.price) + (action.payload.price)
                },
                additionalFeatures: [...state.additionalFeatures.filter(x => x.id !== action.payload.id)]
            }
        case CLEARALL_FEATURES:
            return {
                ...initialCar
            }
        //   {
        //     ...state,
        //     car: {
        //       ...state.car,
        //       features: []
        //     }
        //     additionalFeatures: [...state.additionalFeatures, ...state.car.features
        //   }

        case REMOVE_FEATURE:
            return {
                ...state,
                // expanding car object
                car: {
                 ...state.car,   
                 //  expanding car's feature 
                 features: [...state.car.features.filter(x => (x.id !== action.payload.id))],
                 price: state.car.price - action.payload.price
                },
                //  expanding car's additional features
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }
        default:
            return state;
    }
}
