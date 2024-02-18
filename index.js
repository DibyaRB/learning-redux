const redux = require('redux');

const createStore = redux.createStore;

const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM="BUY_ICECREAM";

//Any number of property that can be an object or a string
//    {
//     type:BUY_CAKE,
//     info: 'First Redux Action'
//    }

//An action creator is a function that returns an action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

function buyIceCream(){
  return{
    type:BUY_ICECREAM,
    info:"Second Redux Action"
  };
}

// (previous State,action) => newState

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// };

// When the size of reducer grows because of the number of actions, it would get pretty tough to maintain this. So we can split our state and the reducer

const initialCakeState ={
  numOfCakes:10
};

const initialIceCreamState ={
  numOfIceCreams:20
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         // make a copy of the state object, and update the numOfCakes
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//       case BUY_ICECREAM:
//         return {
//           // make a copy of the state object, and update the numOfIceCreams
//           ...state,
//           numOfIceCreams: state.numOfIceCreams - 1,
//         };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // make a copy of the state object, and update the numOfCakes
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
      case BUY_ICECREAM:
        return {
          // make a copy of the state object, and update the numOfIceCreams
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1,
        };
    default:
      return state;
  }
};


//Redux provides a method called combineReducers to combine multiple reducers

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

//const store = createStore(reducer);

const store = createStore(rootReducer);
console.log('Initial State',store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('Updates State', store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe();


