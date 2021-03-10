class UI {
    constructor() {
        this.resultParent = document.querySelector('.search-results')
        this.topParents = document.querySelector('.most-popular')
        this.favoriteSection = document.querySelector('.favorites')
        this.ınputField = document.getElementById('search')
        this.mostPopulerHeader = document.querySelector('.main-header')
        this.resultHeader = document.querySelector('.result-header')
    }

    clearInput() {
        this.ınputField.value = '';
    }

    displayResults(film) {
        if (film.Search == undefined) {
            this.resultHeader.textContent = "NOT FOUND"
            this.resultParent.innerHTML = `
            <i class="fas fa-sad-tear"></i>
            `
        } else {
            this.resultHeader.textContent = "RESULTS"
            let filmUI = film.Search.map(item => {
                return `
                <div class="film-card" id="${item.imdbID}">
                                <div class="film-poster">
                                    <img src="${item.Poster == "N/A" ? "https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png" : item.Poster}"
                                        alt="${item.Title == "N/A" ? "Name Not Found" : item.Title}">
                                </div>
                                <div class="film-info">
                                    <div class="favorite-btn"><i class="fa fa-star" style="color:white"></i></div>
                                    <div class="film-description">
                                        <h3>${item.Title == "N/A" ? "Name Not Found" : item.Title}</h3>
                                        <p class="film-story">
                                        lorem ıpsum dolor sit amet
                                        </p>
                                        <p class="film-artist">
                                            Actors: <span>lorem ıpsum</span>
                                        </p>
                                        <p class="film-director">Director: <span>lorem ıpsum</span></p>
                                    </div>
                                    <div class="film-property">
                                        <span class="film-imdb-rates">8.8/10 <span class="rate-data-company"><em>by</em>
                                                IMDB</span>
                                        </span>
                                        <span class="film-vision-date">Release Date: <span>${item.Year == "N/A" ? "Date Not Found" : item.Year}</span></span>
                                    </div>
                                </div>
                            </div>
                `
            })
            filmUI = filmUI.join(' ')
            this.resultParent.innerHTML = filmUI
        }
    }

    returnBack() {
        this.mostPopulerHeader.style.display = "grid"
        this.topParents.style.display = "grid"
        this.resultHeader.style.display = "none"
        this.resultParent.style.display = "none"
    }

    resultUI() {
        this.mostPopulerHeader.style.display = "none"
        this.topParents.style.display = "none"
        this.resultHeader.style.display = "grid"
        this.resultParent.style.display = "grid"
    }
}