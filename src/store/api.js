import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource);

const api = {
    getDepts() {
        return new Promise( (resolve) => {
            Vue.http.get('https://apex.cc-west.de/ords/tasks/calendar/depts')
            .then(response => {
               return response.json()
            })
            .then(data => {
               resolve(data.items)
            })
        });
    },

    getHomeOffice(id) {
        return new Promise( (resolve) => {
            Vue.http.get('https://apex.cc-west.de/ords/tasks/calendar/homeofficecal', {
                headers: {
                    id: `${id}`
                }
            })
            .then(response => {
               return response.json()
            })
            .then(data => {
               resolve(data.items)
            })
        });
    }
}
export default api;