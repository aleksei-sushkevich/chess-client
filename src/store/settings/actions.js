export default {
    async getSettings(context) {
        const userId = localStorage.getItem('userId');
        const url = 'http://localhost:3000/controllers/settings/' + userId;
        const response = await fetch(url);

        const responseData = await response.json();

        if(responseData.message === 'Success!'){
            context.commit('setSettings', {
                isReversal: responseData.isReversal,
                isAutoSave: responseData.isAutoSave,
                isKeepAuth: responseData.isKeepAuth,
            });
        }
    },
    async setSettings(context, payload) {
        const userId = localStorage.getItem('userId');
        const response = await fetch('http://localhost:3000/controllers/settings' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isReversal: payload.isReversal,
                isAutoSave: payload.isAutoSave,
                isKeepAuth: payload.isKeepAuth,
                userId: userId
            }),
        });

        const responseData = await response.json();

        if(responseData.message === 'Success!'){
            context.commit('setSettings', payload);
        }
    }
}