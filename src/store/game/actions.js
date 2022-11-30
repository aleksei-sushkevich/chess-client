export default {
    async writeHistory(state, payload) {
        const userId = localStorage.getItem('userId');
        const url = 'http://localhost:3000/controllers/game';
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({history: state.getters.history, name: payload, userId: userId}),
        });
    },
    async downloadHistory(context) {
        const userId = localStorage.getItem('userId');
        const url = 'http://localhost:3000/controllers/game/' + userId;
        const response = await fetch(url);

        const responseData = await response.json();

        context.commit('writeGamesHistory', responseData);

        return responseData;
    }
}

