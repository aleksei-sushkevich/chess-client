export default {
    setUser(state, payload) {
        state.userId = payload.userId;
    },
    logout(state) {
        localStorage.removeItem('userId');
        state.userId = null;
    }
};