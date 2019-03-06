import { homeofficeService } from '../_services/EventsService'


const GET_HOMEOFFICE = 'GET_HOMEOFFICE'
const SET_DATEPICKERDATES = 'SET_DATEPICKERDATES'

const state = {
    datepickerDates: [],
    events: []
}

const mutations = {
    [GET_HOMEOFFICE]: (state, payload) => {
        state.events = payload
    },
    [SET_DATEPICKERDATES]: (state, payload) => {
        state.datepickerDates = payload
    }
}

const actions = {
    getHomeOffice: async ({commit}, id) => {
        const payload = await homeofficeService.getHomeOffice(id)
        commit(GET_HOMEOFFICE, payload)
    },
    submitHomeOffice: async ({commit, state}) => {
        const payload = await homeofficeService.submitHomeOffice(state.datepickerDates)
        commit(GET_HOMEOFFICE, payload)
    },
    setDatepickerDates: ({commit}, payload) => {
        commit(SET_DATEPICKERDATES, payload)
    },
}

const getters = {
    getEvents : (state) => {
        return state.events
    }
}

export const homeofficeModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};