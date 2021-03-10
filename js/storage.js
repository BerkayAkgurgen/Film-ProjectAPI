class Storage {
    static getAllFilmsToStorage() {
        return localStorage.getItem('films') ? JSON.parse(localStorage.getItem('films')) : [];
    }

    static addAllFilmsToStorage(film, id) {
        const filmDetails = {
            film,
            id
        }
        let films = this.getAllFilmsToStorage()
        films.push(filmDetails)
        localStorage.setItem("films", JSON.stringify(films))
    }
}