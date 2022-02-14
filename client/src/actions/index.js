export const increment = data => {
    return {
        type: 'INCREMENT',
        data
    }
};

export const setAuthState = data => {
    return {
        type: 'setAuthState',
        data
    }
};