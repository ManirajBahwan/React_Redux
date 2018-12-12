function userDetailsReducer(prevState = {
    isFetching: false,
    userDetails: {},
    error: ""
}, action) {
    let newState;
    switch (action.type) {
        case "FETCHING":
            newState = { ...prevState, isFetching: true, userDetails: {}, error: "" };
            break;
        case "FETCH_SUCCESS":
            newState = { ...prevState, isFetching: false, userDetails: action.userDetails, error: "" };
            break;
        case "FETCH_ERROR":
            newState = { ...prevState, isFetching: false, userDetails: {}, error: action.error };
            break;
        default:
            newState = { ...prevState };
            break;
    }
    return newState;

}

export default userDetailsReducer;