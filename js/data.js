class RequestApi {
    constructor() {
        this.url = 'https://www.omdbapi.com/?apikey=cf280cd8&t?type=movie&r=json&s='
        this.urlForId = 'https://www.omdbapi.com/?apikey=cf280cd8&t?type=movie&r=json&i='
    }

    async getDatas(filmName) {
        const data = await fetch(this.url + filmName)
        const response = await data.json()
        return response
    }

    async getDatasForID(filmID) {
        const data = await fetch(this.urlForId + filmID)
        const response = await data.json()
        return response
    }
}
