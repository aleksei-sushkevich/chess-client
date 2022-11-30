import store from "@/store";

export function startNewGame() {
    store.commit('game/startNewGame');
}