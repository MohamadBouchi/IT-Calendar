import { teamEventService } from '../_services/TeamEventService'

const GET_TEAM_EVENTS= 'GET_TEAM_EVENTS'

const state = {
    teamEvents: []   
}

const mutations = {
    
    [GET_TEAM_EVENTS]: (state, payload) => {
        state.teamEvents = payload
    }
}

const actions = {
    getTeamEvents: async ({ commit }) => {
        let payload = await teamEventService.getTeamEvents()
        payload = payload.map(function(item) {
            return item['datum'];
        });
        commit(GET_TEAM_EVENTS, payload)
    }
}

const getters = {
    getTeamEvents : (state) => {
        return state.teamEvents
    }
}

export const teamEventModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};