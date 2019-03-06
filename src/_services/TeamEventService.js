export const teamEventService = {
    getTeamEvents
}


function getTeamEvents() {
    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/datepicker', {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'team_id': 2,
                'emp_id': 21
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