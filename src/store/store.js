import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

const GET_DEPTS = 'GET_DEPTS'
const SET_DATEPICKERDATES = 'SET_DATEPICKERDATES'
const GET_HOMEOFFICE = 'GET_HOMEOFFICE'
const GET_TEAM_EVENTS= 'GET_TEAM_EVENTS'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        departments: [],
        datepickerDates: [],
        teamEvents: [],
        events: []
    },
    mutations: {
        [GET_DEPTS]: (state, payload) => {
            state.departments = payload
        },
        [GET_TEAM_EVENTS]: (state, payload) => {
            state.teamEvents = payload
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
        getTeamEvents: async ({ commit }) => {
            let payload = await api.getTeamEvents()
            payload = payload.map(function(item) {
                return item['datum'];
            });
            commit(GET_TEAM_EVENTS, payload)
        },
        setDatepickerDates: ({commit}, payload) => {
            commit(SET_DATEPICKERDATES, payload)
        },
        getHomeOffice: async ({commit}, id) => {
            const payload = await api.getHomeOffice(id)
            commit(GET_HOMEOFFICE, payload)
        },
        submitHomeOffice: async ({commit, state}) => {
            const payload = await api.submitHomeOffice(state.datepickerDates)
            commit(GET_HOMEOFFICE, payload)
        }
    }
})