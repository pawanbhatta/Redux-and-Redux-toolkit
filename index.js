const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;

console.log("initial state : ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state : ", store.getState());
});

store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.ordered(1));
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered(1));
store.dispatch(iceCreamActions.ordered(1));
store.dispatch(iceCreamActions.ordered(1));
store.dispatch(iceCreamActions.restocked(3));

unsubscribe();
