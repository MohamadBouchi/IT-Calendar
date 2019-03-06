import { homeofficeService } from '../_services/HomeofficeService'


const GET_HOMEOFFICE = 'GET_HOMEOFFICE'
const SET_SELECTEDDATES = 'SET_SELECTEDDATES'

const state = {
    selectedDates: [],
    homeofficeDates: []
}

const mutations = {
    [GET_HOMEOFFICE]: (state, payload) => {
        state.homeofficeDates = payload
    },
    [SET_SELECTEDDATES]: (state, payload) => {
        state.selectedDates = payload
    }
}

const actions = {
    getHomeOffice: async ({commit}, id) => {
        const payload = await homeofficeService.getHomeOffice(id)
        commit(GET_HOMEOFFICE, payload)
    },
    submitHomeOffice: async ({commit, state, dispatch}) => {
        const payload = await homeofficeService.submitHomeOffice(state.selectedDates)
        commit(GET_HOMEOFFICE, payload)
        dispatch('teamEvent/getTeamEvents', null, {root:true})
    },
    setSelectedDates: ({commit}, payload) => {
        commit(SET_SELECTEDDATES, payload)
    },
}

const getters = {
    getHomeofficeDates : (state) => {
        return state.homeofficeDates
    }
}

export const homeofficeModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};