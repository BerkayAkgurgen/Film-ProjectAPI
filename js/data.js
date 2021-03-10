class RequestApi {
    constructor() {
        this.url = 'http://www.omdbapi.com/?apikey=cf280cd8&t?type=movie&r=json&s='
    }

    async getDatas(filmName) {
        const data = await fetch(this.url + filmName)
        const response = await data.json()
        return response
    }
}