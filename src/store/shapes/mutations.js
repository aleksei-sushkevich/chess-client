const ANIMATION_TIME = 200;

export default {
    selectShape(state, payload) {
        for (const i in state.shapes) {
            if (state.shapes[i].id === payload.id){
                state.shapes[i].selected = !state.shapes[i].selected;
                state.active = true;
            } else {
                state.shapes[i].selected = false;
            }
        }
    },
    moveShape(state, payload) {
        setTimeout(()=>{
            for (const i in state.shapes) {
                if (state.shapes[i].selected) {
                    this.commit('game/writeHistory', {
                        player: state.shapes[i].color,
                        chess: state.shapes[i].name,
                        chessId: state.shapes[i].id,
                        fromPosition: state.shapes[i].position,
                        toPosition: payload.name,
                        swallowed: false,
                        swallowedId: payload.id,
                        class: 'active',
                        active: true
                    })
                    this.commit('squares/deleteShape', state.shapes[i].position);
                    state.shapes[i].position = payload.name;
                    state.shapes[i].selected = false;
                    state.active = false;
                }
            }
        },ANIMATION_TIME)
        this.commit('game/nextRound');
    },
    fightShape(state, payload) {
        setTimeout(() => {
            const newPlace = payload.newPlaceForWinner.name;
            const killedShape = payload.killedShape;
            for (const i in state.shapes) {
                if (state.shapes[i].selected) {
                    this.commit('squares/deleteShape', state.shapes[i].position);
                    this.commit('game/writeHistory', {
                        player: state.shapes[i].color,
                        chess: state.shapes[i].name,
                        chessId: state.shapes[i].id,
                        fromPosition: state.shapes[i].position,
                        toPosition: killedShape.name,
                        swallowed: false,
                        swallowedId: killedShape.id,
                        class: 'active'
                    })
                    state.shapes[i].position = newPlace;
                    state.shapes[i].selected = false;
                    state.active = false;
                    this.commit('squares/placeShape', state.shapes[i]);
                }
                if (state.shapes[i].id === killedShape.id){
                    state.shapes[i].live = false;
                    state.shapes[i].position = '';
                }
                state.active = false;
            }
        }, ANIMATION_TIME);
        this.commit('game/nextRound');
    },
    resetShapes(state) {
        for(let i in state.shapes){
            state.shapes[i].position = state.shapes[i].defaultPosition;
            state.shapes[i].live = true;
            this.commit('squares/placeShape', state.shapes[i]);
        }
    },

// {
//     "player": "Black",
//     "chess": "Knight",
//     "chessId": "5",
//     "fromPosition": "b8",
//     "toPosition": "c6",
//     "swallowed": false,
//     "class": "active",
//     "active": true
// }
    goBackHistory() {

        // const previousRound = this.getters['game/history'].find(el => el.active);
        // const whoShape = state.shapes.find(el => el.id === previousMotion.chessId);
        //
        // if(!previousMotion.swallowed) {
        //     this.commit('squares/deleteShape', whoShape.position);
        //     whoShape.position = previousMotion.fromPosition;
        //     this.commit('squares/placeShape', { position : previousMotion.fromPosition, shape: whoShape });
        // }
        //
        //
        // this.commit('game/nextRound', previousMotion.player);
        this.commit('game/goBack');
    },
    goForwardHistory() {
        // const previousMotion = this.getters['game/history'].find(el => el.active);
        // // const whoShape = state.shapes.find(el => el.id === previousMotion.chessId);
        //
        // // if(!previousMotion.swallowed) {
        // //     this.commit('squares/deleteShape', whoShape.position);
        // //     whoShape.position = previousMotion.fromPosition;
        // //     this.commit('squares/placeShape', { position : previousMotion.fromPosition, shape: whoShape });
        // // }
        //
        //
        // this.commit('game/nextRound', previousMotion.player);
        this.commit('game/goForward');
    }
}