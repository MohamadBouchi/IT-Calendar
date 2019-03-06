import Vue from 'vue'

export const homeofficeService = {
    getHomeOffice,
    submitHomeOffice
}

function getHomeOffice(id) {
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

function submitHomeOffice(data) {
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