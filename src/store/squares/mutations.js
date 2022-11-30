export default {
    placeShape(state, payload) {
        for (let i in state.squares) {
            if (state.squares[i].name === payload.position) {
                state.squares[i].hasShape = true;
                state.squares[i].shape = payload.shape;
            }
        }
    },
    deleteShape(state, payload) {
        for (let i in state.squares) {
            if (state.squares[i].name === payload) {
                state.squares[i].hasShape = false;
                state.squares[i].shape = new Object(null);
            }
        }
    },
    reverseSquares(state) {
        state.squares = state.squares.reverse();
        state.verticalCoordinates = state.verticalCoordinates.reverse();
        state.horizontalCoordinates = state.horizontalCoordinates.reverse();
    },
    resetSquares(state) {
        for(let i in state.squares){
            state.squares[i].hasShape = false;
            state.squares[i].shape = null;
        }
        if(state.horizontalCoordinates[0] !== 'a'){
            this.commit('squares/reverseSquares');
        }
    }

}