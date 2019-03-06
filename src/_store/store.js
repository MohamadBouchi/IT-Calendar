import Vue from 'vue'
import Vuex from 'vuex'
// import api from './api'
import { deptModule } from './DeptsModule'
import { homeofficeModule } from './HomeofficeModule'
import { teamEventModule } from './TeamEventModule'

// const GET_TEAM_EVENTS= 'GET_TEAM_EVENTS'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        departments: deptModule,
        homeoffice: homeofficeModule,
        teamEvent: teamEventModule
    }
})