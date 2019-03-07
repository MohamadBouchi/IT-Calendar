import { authService } from '../_services/AuthService'
import router from '../_helpers/router';

const LOGIN = 'LOGIN'

const state = {
    uname: 'none',
    id:0,
    dept_id:0,
    team_id:0
}

const mutations = {
    [LOGIN]: (state, payload) => {
        state.uname = payload.uname
        state.id = payload.id
        state.dept_id = payload.dept_id
        state.team_id = payload.team_id
    }
}

const actions = {
    login: async ({ commit }, data) => {
        const payload = await authService.login(data.uname, data.password)
        if(payload.length !== 0){
            localStorage.setItem('user', data.uname)
            router.push('/')
            commit(LOGIN, payload[0])
        }
    }
}

const getters = {
    getUser: () => {
        return state
    }
}

export const loginModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};