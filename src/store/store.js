import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
import VueResource from 'vue-resource'

const GET_DEPTS = 'GET_DEPTS'

Vue.use(Vuex);
Vue.use(VueResource);

export const store = new Vuex.Store({
    state: {
        departments: []
    },
    mutations: {
        [GET_DEPTS]: (state, payload) => {
            console.log(payload)
            state.departments = [...state.departments, ...payload]
        }
    },
    actions: {
         getDepts: async ({ commit }) => {
            Vue.http.get('https://apex.cc-west.de/ords/tasks/calendar/depts')
            .then(response => {
               return response.json()
            })
            .then(data => {
                console.log(data.items)
                
                commit(GET_DEPTS, data.items)
            })
            // const data = await api.getDepts()
            // console.log(data)
            // commit(GET_DEPTS, data)
        }
    }
})