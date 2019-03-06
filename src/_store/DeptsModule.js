import { deptService } from '../_services/DeptsService'
const GET_DEPTS = 'GET_DEPTS'

const state = {
    departments: []
}

const mutations = {
    [GET_DEPTS]: (state, payload) => {
        state.departments = payload
    }
}

const actions = {
    getDepts: async ({ commit }) => {
        const payload = await deptService.getDepts()
        commit(GET_DEPTS, payload)
    }
}

const getters = {
    getDepts : (state) => {
        return state.departments
    }
}

export const deptModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};