const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

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

// (previous State,action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);
console.log('Initial State',store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('Updates State', store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe();

