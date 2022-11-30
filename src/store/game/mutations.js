export default {
    nextRound(state) {
        state.round = state.round === 'White' ? 'Black' : 'White';
        this.commit('squares/reverseSquares');
    },
    startNewGame(state) {
        this.commit('squares/resetSquares');
        this.commit('shapes/resetShapes');
        state.round = 'White';
        state.history = [];
    },
    writeHistory(state, payload) {
        for (let i = 0; i < state.history.length; i++) {
            state.history[i].class = '';
        }
        state.history.unshift(payload);
    },
    writeGamesHistory(state, payload) {
        state.gamesHistory = payload;
    },
    goBack(state) {
        for (let i = 0; i < state.history.length; i++) {
            if (state.history[i].class === 'active') {
                if (state.history[i + 1] === undefined) {
                    state.history[i].class = '';
                    return;
                }
                state.history[i].class = '';
                state.history[i + 1].class = 'active';
                return;
            }
        }
    },
    goForward(state){
        let existActive = false;
        let indexActive = 0;
        for (let i = 0; i < state.history.length; i++) {
            if (state.history[i].class === 'active') {
                existActive = true;
                indexActive = i;
                break;
            }
        }
        if (existActive) {
            state.history[indexActive].class = '';
            state.history[indexActive - 1].class = 'active';
        } else {
            state.history[state.history.length - 1].class = 'active';
        }
    }

}