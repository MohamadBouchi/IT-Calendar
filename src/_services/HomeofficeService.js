
export const homeofficeService = {
    getHomeOffice,
    submitHomeOffice
}

function getHomeOffice(id) {
    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/homeofficecal', {
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

function submitHomeOffice(dates) {
    dates= dates.map(e => {
        return e.replace(/-/g,'')
    });
    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/homeofficecal', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'dates': `${dates}`,
                'emp_id': 22,
                'dept_id': 3,
                'team_id': 2
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