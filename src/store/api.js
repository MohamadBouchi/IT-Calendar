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

    getTeamEvents() {
        return new Promise( (resolve) => {
            fetch('https://apex.cc-west.de/ords/tasks/calendar/datepicker', {
                method:'GET',
                headers: {
                    'Accept': 'application/json',
                    'team_id': 1,
                    'emp_id': 25
                }
            })
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
    },

    submitHomeOffice(data) {
        data = data.map(e => {
            return e.replace(/-/g,'')
        });
        return new Promise( (resolve) => {
            fetch('https://apex.cc-west.de/ords/tasks/calendar/homeofficecal', {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'data': `${data}`
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