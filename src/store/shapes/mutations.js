const ANIMATION_TIME = 200;

export default {
    selectShape(state, payload) {
        for (const i in state.shapes) {
            if (state.shapes[i].id === payload.id) {
                state.shapes[i].selected = true;
                state.active = true;
            } else {
                state.shapes[i].selected = false;
            }
        }
    },
    moveShape(state, payload) {
        setTimeout(() => {
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
        }, ANIMATION_TIME)
        this.commit('game/nextRound');
    },
    fightShape(state, payload) {
        const index = state.shapes.findIndex(shape => shape.selected);
        const killedShape = payload.killedShape;
        if (state.shapes[index] === payload.killedShape) {
            state.shapes[index].selected = false;
            state.active = false;
            return;
        }
        setTimeout(() => {
            const newPlace = payload.newPlaceForWinner.name;
            for (const i in state.shapes) {
                if (state.shapes[i].selected) {
                    this.commit('squares/deleteShape', state.shapes[i].position);
                    this.commit('game/writeHistory', {
                        player: state.shapes[i].color,
                        chess: state.shapes[i].name,
                        chessId: state.shapes[i].id,
                        fromPosition: state.shapes[i].position,
                        toPosition: killedShape.position,
                        swallowed: killedShape.name,
                        swallowedId: killedShape.id,
                        class: 'active'
                    })
                    state.shapes[i].position = newPlace;
                    state.shapes[i].selected = false;
                    state.active = false;
                    this.commit('squares/placeShape', state.shapes[i]);
                }
                if (state.shapes[i].id === killedShape.id) {
                    state.shapes[i].live = false;
                    state.shapes[i].position = '';
                }
                state.active = false;
            }
        }, ANIMATION_TIME);
        this.commit('game/nextRound');
    },
    resetShapes(state) {
        for (let i in state.shapes) {
            state.shapes[i].position = state.shapes[i].defaultPosition;
            state.shapes[i].live = true;
            this.commit('squares/placeShape', state.shapes[i]);
        }
    },
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
    },
    compareShapesWithHistory(state, payload) {
        for (let i = 0; i < payload.length; i++) {
            if (payload[i].swallowed) {
                let index = state.shapes.findIndex(shape => shape.id === payload[i].swallowedId);
                console.log(state.shapes[index]);
                this.commit('squares/deleteShape', state.shapes[index].position);
                state.shapes[index].position = '';
            }
            let index = state.shapes.findIndex(shape => shape.id === payload[i].chessId);
            state.shapes[index].position = payload[i].toPosition;
            this.commit('squares/placeShape', state.shapes[index]);
            this.commit('squares/deleteShape', payload[i].fromPosition);
        }

    }
}