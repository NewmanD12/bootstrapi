let getDogButton = document.querySelector("#getDogButton")
let dogImg = document.querySelector('#dogImg')

getDogButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            return response.json()
        })
        .then((data) => {
            dogImg.src = data.message
        })
})


let form = document.querySelector("form")
let city = document.querySelector('#city')
let currentCity = document.querySelector('#currentCity')
let temp = document.querySelector("#temp")
let wind = document.querySelector("#wind")
let des = document.querySelector("#des")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let url = encodeURI(`https://goweather.herokuapp.com/weather/${city.value}`)
    fetch(url)
        .then(res => {
            return res.json()
        })
        .then((data) => {
            currentCity.innerText = `The weather for ${city.value}`
            city.value = ''
            temp.innerText = 'Temperature: ' + data.temperature
            wind.innerText = 'Wind: ' + data.wind
            des.innerText = 'Description: ' + data.description
        })
})

let hpCharacters = []
fetch('https://hp-api.herokuapp.com/api/characters')
    .then(res => {
        return res.json()
    })
    .then(data => {
        // console.log(data)
        hpCharacters = data
        console.log(hpCharacters)
    })

// console.log(hpCharacters)
