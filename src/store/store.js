import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

const GET_DEPTS = 'GET_DEPTS'
const SET_DATEPICKERDATES = 'SET_DATEPICKERDATES'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        departments: [],
        datepickerDates: [],
        events: []
    },
    mutations: {
        [GET_DEPTS]: (state, payload) => {
            state.departments = payload
        },
        [SET_DATEPICKERDATES]: (state, payload) => {
            state.datepickerDates = payload
        }
    },
    actions: {
         getDepts: async ({ commit }) => {
            const data = await api.getDepts()
            commit(GET_DEPTS, data)
        },
        setDatepickerDates: ({commit}, payload) => {
            commit(SET_DATEPICKERDATES, payload)
        }
    }
})