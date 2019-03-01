const api = {
    getDepts() {
        return new Promise( (resolve) => {
            fetch('https://apex.cc-west.de/ords/tasks/calendar/depts')
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