const toggle = document.querySelector('.navbar-toggle')
const navBar = document.getElementById('navbar')
const form = document.getElementById('form')
const submitBtn = document.getElementById('button')
const searchInput = document.getElementById('search')
const filmRequest = new RequestApi()
const ui = new UI()

eventListeners()

function eventListeners() {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('isActive')
        navBar.classList.toggle('isActive')
    })
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
        console.log(e.which);
    })
    submitBtn.addEventListener('click', e => e.preventDefault())
    window.addEventListener('DOMContentLoaded', () => ui.clearInput())
}

function getFilms(e) {
    let inputValue = searchInput.value.trim().split(' ').join('+')
    if (inputValue == "" || !isNaN(inputValue)) {
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