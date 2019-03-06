export const authService = {
    login
}

function login(uname, password) {

    return new Promise( (resolve) => {
        fetch('https://apex.cc-west.de/ords/tasks/calendar/auth',{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'emp_uname': `${uname}`,
                'emp_pass': `${password}`
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