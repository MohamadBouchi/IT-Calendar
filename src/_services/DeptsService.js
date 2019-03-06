import Vue from 'vue'

export const deptService = {
    getDepts
}

function getDepts() {
    return new Promise( (resolve) => {
        Vue.http.get('https://apex.cc-west.de/ords/tasks/calendar/depts')
        .then(response => {
            return response.json()
        })
        .then(data => {
            resolve(data.items)
        })
    });
}