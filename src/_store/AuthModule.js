import { authService } from '../_services/AuthService'
import router from '../_helpers/router';

const LOGIN = 'LOGIN'
const SIGNOUT = 'SIGNOUT'

const state = {
    uname: localStorage.getItem('user') ? localStorage.getItem('user'):'none',
    id: localStorage.getItem('id'),
    dept_id: localStorage.getItem('dept_id'),
    team_id: localStorage.getItem('team_id')
}

const mutations = {
    [LOGIN]: (state, payload) => {
        state.uname = payload.uname
        state.id = payload.id
        state.dept_id = payload.dept_id
        state.team_id = payload.team_id
    },
    [SIGNOUT]: (state) => {
        state.uname= ''
    }
}

const actions = {
    login: async ({ commit }, data) => {
        const payload = await authService.login(data.uname, data.password)
        if(payload.length !== 0){
            localStorage.setItem('user', payload[0].uname)
            localStorage.setItem('dept_id', payload[0].dept_id)
            localStorage.setItem('id', payload[0].id)
            localStorage.setItem('team_id', payload[0].team_id)
            router.push('/')
            commit(LOGIN, payload[0])
        }
    },
    signout: ({commit}) => {
        router.push('/login')
        commit(SIGNOUT)
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