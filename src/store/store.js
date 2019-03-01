import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

const GET_DEPTS = 'GET_DEPTS'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        departments: []
    },
    mutations: {
        [GET_DEPTS]: (state, payload) => {
            state.departments = [...state.departments, ...payload]
        }
    },
    actions: {
         getDepts: async ({ commit }) => {
            const data = await api.getDepts()
            commit(GET_DEPTS, data)
        }
    }
})