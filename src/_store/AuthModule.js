import { authService } from '../_services/AuthService'

const LOGIN = 'LOGIN'

const state = {
    uname: '',
    id:''
}

const mutations = {
    [LOGIN]: (state, payload) => {
        state.uname = payload.uname
        state.id = payload.id
    }
}

const actions = {
    login: async ({ commit }, data) => {
        const payload = await authService.login(data.uname, data.password)
        commit(LOGIN, payload)
    }
}


export const loginModule = {
    namespaced: true,
    state,
    actions,
    mutations
};