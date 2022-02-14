const authReducer = (state = 'login', action) => {
    switch(action.type){
        case 'setAuthState':
            return state = action.data;
        default:
            return state;
    }
}

export default authReducer;