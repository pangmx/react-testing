export default ({dispatch}) => next => action => {

    // if not action with a promise, we return action to the next middleware
    if(!action.payload || !action.payload.then){
        return next(action);
    }

    // action contains a promise, wait for it to complete then 
    // create a new action and set the response to action payload
    // then dispatch the action again so it goes through the rest of the middlewares again
    action.payload.then(response => {
        const newAction = {...action, payload: response}; 
        dispatch(newAction);       
    });
}