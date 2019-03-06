import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
import { deptModule } from './DeptsModule'
import { homeofficeModule } from './EventsModule'

const GET_TEAM_EVENTS= 'GET_TEAM_EVENTS'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        departments: deptModule,
        homeoffice: homeofficeModule
    },
    state: {
        teamEvents: []   
    },
    mutations: {
        
        [GET_TEAM_EVENTS]: (state, payload) => {
            state.teamEvents = payload
        }
    },
    actions: {
        getTeamEvents: async ({ commit }) => {
            let payload = await api.getTeamEvents()
            payload = payload.map(function(item) {
                return item['datum'];
            });
            commit(GET_TEAM_EVENTS, payload)
        }
    }
})