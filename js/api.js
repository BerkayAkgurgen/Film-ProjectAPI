const toggle = document.querySelector('.navbar-toggle')
const navBar = document.getElementById('navbar')
const form = document.getElementById('form')
const submitBtn = document.getElementById('button')
const searchInput = document.getElementById('search')
const favoriteStar = document.querySelector('.favorite-btn')
const allResultsWrapper = document.getElementById('imdb-top')
const favoriteTopFilms = Array.from(document.querySelectorAll('.film-card'))
const filmRequest = new RequestApi()
const ui = new UI()

eventListeners()

function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        let favoriteFilms = Storage.getAllFilmsToStorage()
        favoriteFilms.forEach(data => {
            filmRequest.getDatasForID(data.id)
                .then(films => {
                    ui.allItemToUI(films)
                })
        })
    })
    window.addEventListener('DOMContentLoaded', ui.favoritesUI(favoriteTopFilms))
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('isActive')
        navBar.classList.toggle('isActive')
    })
    // window.addEventListener('input', favoriteUI)
    searchInput.addEventListener('input', getFilms)
    searchInput.addEventListener('keydown', e => {
        let control = false
        if (e.which == 8 && searchInput.value.trim() == "") {
            control = true
        } else {
            control = false
        }
        if (control) {
            e.preventDefault()
            return
        }
    })
    submitBtn.addEventListener('click', e => e.preventDefault())
    allResultsWrapper.addEventListener('click', addFavorite)
    window.addEventListener('DOMContentLoaded', () => ui.clearInput())
}

function getFilms(e) {
    let inputValue = searchInput.value.trim().split(' ').join('+')
    console.log(inputValue.length);
    if (!inputValue || inputValue.length == 0) {
        ui.clearInput()
        ui.returnBack()
    } else {
        filmRequest.getDatas(inputValue)
            .then(data => {
                ui.displayResults(data)
                ui.resultUI()
            })
    }
}


function addFavorite(event) {
    let target = event.target.className
    let sameCheck = Storage.getAllFilmsToStorage()
    let check = sameCheck.map(item => item.id)
    if (target == "fa fa-star") {
        if (check.indexOf(event.target.parentElement.parentElement.parentElement.id) == -1) {
            Storage.addAllFilmsToStorage(event.target.parentElement.nextElementSibling.children[0].textContent, event.target.parentElement.parentElement.parentElement.id)
        }
    }
    if (check.indexOf(event.target.parentElement.parentElement.parentElement.id) == -1 && target == "fa fa-star") {
        event.target.id = "favorite"
    }
    if (check.indexOf(event.target.parentElement.parentElement.parentElement.id) >= 0 && target == "fa fa-star") {
        event.target.id = ""
        Storage.removeFromStorage(event.target.parentElement.parentElement.parentElement.id)
    }
}