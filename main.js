function urlRequest () {

fetch ('https://swapi.co/api/people/14/')
.then
(function convertResponse(response){
return response.json()})
.then(function (json){
console.log(json.name)
// Banner
const newBanner = document.createElement('p')
newBanner.innerHTML = json.name
document.querySelector('.banner').appendChild(newBanner)
// The Basics
const newBasicFact = document.createElement('li')
newBasicFact.innerHTML = ("Name: " + json.name)
document.querySelector(".basics").appendChild(newBasicFact)
const urlFact = document.createElement('li')
urlFact.innerHTML = ("SWAPI url " + json.url)
document.querySelector(".basics").appendChild(urlFact).join
// container.innerHTML = (+ /n + "Name: " + json.name)

//The Story
let movieUrl = json.films[0];
console.log(movieUrl)
//fetch('${movieUrl}')
fetch(json.films[0])
.then
(function convertResponse(response){
return response.json()})
.then(function (json){
console.log(json.title)


const movie = document.createElement('p')
movie.innerHTML = json.title
document.querySelector(".story").appendChild(movie)

const description = document.createElement('p')
description.innerHTML = json.opening_crawl
document.querySelector(".story").appendChild(description)
})
})
}


urlRequest()