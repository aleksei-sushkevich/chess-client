export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },
    async auth(context, payload) {
        const url = payload.mode === 'signup' ? 'http://localhost:3000/controllers/auth/registration' : 'http://localhost:3000/controllers/auth/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: payload.email,
                password: payload.password
            }),
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(
                responseData.message || 'Failed to authenticate. Check your login data.'
            );
        }

        localStorage.setItem('userId', responseData.userId);
        localStorage.setItem('token', responseData.token);

        context.commit('setUser', {
            userId: responseData.userId,
            token: responseData.token
        });
    },
    tryLogin(context) {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        if (userId) {
            context.commit('setUser', {
                userId,
                token
            });
        }
    }
};
