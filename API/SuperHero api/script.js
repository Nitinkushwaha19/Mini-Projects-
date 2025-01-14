// function for the random id of hero 
const randomHero = () => {
    return Math.floor(Math.random() * 732)
}

const superHeroDiv = document.getElementById("superHero")

// function for the accessing each element of the arrray
const getStatsHtml = (character) => {
  const stats = Object.keys(character.powerstats).map(stat => {
   return `<p>${stat.toUpperCase()}:   ${character.powerstats[stat]}</p>`
  })
//   console.log(stats)
//   console.log(stats.join(''))
    return stats.join('')
}

// function for the random Hero 
const getRandomHero = (id) => {
    fetch(`https://superheroapi.com/api.php/3510337019289755/${id}`)
        .then(response => response.json())
        .then(json => {
            const stats = getStatsHtml(json)
            const name = `<h1>${json.name}</h1>`
            superHeroDiv.innerHTML = `${name}<img src="${json.image.url}" height = 500px;width = 500px/>${stats}`
          }
        )
      
}

// SearchInput text ----
const name = document.getElementById("SearchInput")

// function for the search button
const getSearchHero = (name) => {
    fetch(`https://superheroapi.com/api.php/3510337019289755/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            const stats = getStatsHtml(hero)
            const name = `<h1>${hero.name}</h1>`
            const power = `<p> power:- ${hero.powerstats.power}</p>`
            // console.log(hero)  
            superHeroDiv.innerHTML = `${name}<img src="${hero.image.url}" height = 500px;width = 500px/>${stats}`
          }
        )
}

// access for the random hero button 
let button = document.getElementById("RandomHero")
button.onclick = () => {
    getRandomHero(randomHero())
}

// Access for the search button 
const SrchButton = document.getElementById("SearchButton")
SrchButton.onclick = () => getSearchHero(name.value)






