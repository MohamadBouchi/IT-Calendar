export const teamEventService = {
    getTeamEvents
}


function getTeamEvents(team_id, emp_id) {
    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/datepicker', {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'team_id': team_id,
                'emp_id': emp_id
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