import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

const GET_DEPTS = 'GET_DEPTS'
const SET_DATEPICKERDATES = 'SET_DATEPICKERDATES'
const GET_HOMEOFFICE = 'GET_HOMEOFFICE';

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
        },
        [GET_HOMEOFFICE]: (state, payload) => {
            state.events = payload
        }
    },
    actions: {
        getDepts: async ({ commit }) => {
            const payload = await api.getDepts()
            commit(GET_DEPTS, payload)
        },
        setDatepickerDates: ({commit}, payload) => {
            commit(SET_DATEPICKERDATES, payload)
        },
        getHomeOffice: async ({commit}, id) => {
            const payload = await api.getHomeOffice(id)
            commit(GET_HOMEOFFICE, payload)
        }
    }
})