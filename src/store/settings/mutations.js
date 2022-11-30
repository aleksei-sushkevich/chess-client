export default {
    setSettings(state, payload) {
        state.isReversal = payload.isReversal;
        state.isAutoSave = payload.isAutoSave;
        state.isKeepAuth = payload.isKeepAuth;
    }
};