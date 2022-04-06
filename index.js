let message = document.querySelector(`#message`)

let form = document.querySelector('form')
const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector("input");

let movie = document.createElement(`li`);
let movieTitle = document.createElement(`span`)
movieTitle.textContent = inputField.value
movieTitle.addEventListener(`click`, crossOffMovie)

movie.appendChild(movieTitle)
document.querySelector(`ul`).appendChild(movie)

let deleteBtn = document.createElement('button')
deleteBtn.textContent = 'x'
deleteBtn.addEventListener(`click`, deleteMovie)
movie.appendChild(deleteBtn)

inputField.vaule = ``

  return document.querySelector(`ul`).appendChild(movie)
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `Movie deleted!`
    revealMessage()
}

const crossOffMovie= (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains(`checked`)){
        message.textContent = `Movie watched!`
    }else{
        message.textContent = `Movie re-added`
    }
    revealMessage()
}

const revealMessage = () => {  
    message.classList.remove(`hide`)
       setTimeout(() => {
     message.classList.add(`hide`)
     }, 1000); }
    

    




form.addEventListener(`submit`, addMovie)