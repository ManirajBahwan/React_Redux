/*function loggerMiddleware(store){

    return function(next){
        return function (action){
           console.log("prevState::",store.getState());
           console.log("action::",action);
            next(action);
            console.log("newState::",store.getState());

        }
    }
}*/

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("prevState::",store.getState());
    console.log("action::",action);
     next(action);
     console.log("newState::",store.getState());
}

export default loggerMiddleware;

