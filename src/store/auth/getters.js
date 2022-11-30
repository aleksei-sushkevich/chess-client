export default {
    isAuthenticated(state) {
        return !!state.userId;
    },
    userId(state) {
        return state.userId;
    }
};