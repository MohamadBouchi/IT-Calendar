
export const homeofficeService = {
    getHomeOffice,
    submitHomeOffice,
    cancelEvent,
    resetAll
}

function getHomeOffice(dept_id) {
    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/homeofficecal', {
            headers: {
                dept_id: `${dept_id}`
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


function cancelEvent(id) {
    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/homeofficecal', {
            method: 'DELETE',
            headers: {
                'id': `${id}`
            }
        })
        .then(response => {
            if(response.status === 200)
                resolve('Deleted')
        })
    });
}


function resetAll(user_id) {
    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/homeofficecal', {
            method: 'PUT',
            headers: {
                'emp_id': user_id
            }
        })
        .then(response => {
            if(response.status === 200)
                resolve('Deleted')
        })
    });
}


function submitHomeOffice(dates, emp_id, dept_id, team_id) {
    dates= dates.map(e => {
        return e.replace(/-/g,'')
    });
    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/homeofficecal', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'dates': `${dates}`,
                'emp_id': emp_id,
                'dept_id': dept_id,
                'team_id': team_id
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