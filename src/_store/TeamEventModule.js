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
    getTeamEvents: async (context) => {
        const team_id = context.rootState.auth.team_id
        const emp_id = context.rootState.auth.id
        
        let payload = await teamEventService.getTeamEvents(team_id, emp_id)
        payload = payload.map(function(item) {
            return item['datum'];
        });
        context.commit(GET_TEAM_EVENTS, payload)
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