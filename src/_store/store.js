import Vue from 'vue'
import Vuex from 'vuex'
import { deptModule } from './DeptsModule'
import { homeofficeModule } from './HomeofficeModule'
import { teamEventModule } from './TeamEventModule'
import { loginModule } from './AuthModule'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        departments: deptModule,
        homeoffice: homeofficeModule,
        teamEvent: teamEventModule,
        auth: loginModule
    }
})