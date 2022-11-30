export default {
    setUser(state, payload) {
        state.userId = payload.userId;
        state.token = payload.token;
    },
    logout(state) {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        state.userId = null;
        state.token = null;
    }
};