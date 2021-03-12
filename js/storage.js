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

    static removeFromStorage(films) {
        let favoriteFilms = this.getAllFilmsToStorage()
        favoriteFilms.forEach((film, index) => {
            if (film.id == films) {
                favoriteFilms.splice(index, 1)
            }
        })
        localStorage.setItem("films", JSON.stringify(favoriteFilms))
    }
}