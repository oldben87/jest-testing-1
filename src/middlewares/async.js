export default ({dispatch}) => next => action => {
    // does action contain a promise on payload?
    //No? -> send to next middleware
    if (!action.payload || !action.payload.then) {
        return next(action)
    }
    // Yes? -> wait
    action.payload.then((response) => {
        const newAction = {...action, payload: response}
        dispatch(newAction) 
    })
    

}