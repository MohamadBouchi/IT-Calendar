import { homeofficeService } from '../_services/HomeofficeService'


const GET_HOMEOFFICE = 'GET_HOMEOFFICE'
const SET_SELECTEDDATES = 'SET_SELECTEDDATES'
const CANCEL_EVENT = 'CANCEL_EVENT'
const RESET_EVENTS = 'RESET_EVENTS'

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
    },
    [CANCEL_EVENT]: (state, payload) => {
        state.homeofficeDates = state.homeofficeDates.filter(e => e.id!== payload)
    },
    [RESET_EVENTS]: (state, payload) => {
        state.selectedDates = []
        state.homeofficeDates = state.homeofficeDates.filter(e => Number(e.emp_id)!== Number(payload))
    }
}

const actions = {
    getHomeOffice: async ({commit}, dept_id) => {
        const payload = await homeofficeService.getHomeOffice(dept_id)
        commit(GET_HOMEOFFICE, payload)
    },
    submit: async (context) => {
        if(context.state.selectedDates.length!==0){
            const emp_id = context.rootState.auth.id
            const team_id = context.rootState.auth.team_id
            const dept_id = context.rootState.auth.dept_id
            const payload = await homeofficeService.submitHomeOffice(context.state.selectedDates, emp_id, dept_id, team_id)
            context.commit(GET_HOMEOFFICE, payload)
            context.dispatch('teamEvent/getTeamEvents', null, {root:true})
        }
    },
    setSelectedDates: ({commit}, payload) => {
        commit(SET_SELECTEDDATES, payload)
    },
    cancelEvent: async ({commit}, id) => {
        const payload = await homeofficeService.cancelEvent(id)
        if(payload==='Deleted')
            commit(CANCEL_EVENT, id)
    },
    resetAll: async (context) => {
        const user_id = context.rootState.auth.id
        const response = await homeofficeService.resetAll(user_id)
        if(response==='Deleted')
            context.commit(RESET_EVENTS, user_id)
    }
}

const getters = {
    getHomeofficeDates : (state) => {
        const map = {}
        state.homeofficeDates.forEach(e => {
            e.open = false
            return (map[e.date] = map[e.date] || []).push(e)
        });
        return map
    }
}

export const homeofficeModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};