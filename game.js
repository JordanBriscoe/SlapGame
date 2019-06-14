let character = {
    name: "enemy",
    slap: 1,
    punch: 5,
    kick: 10,
    health: 100
}
let attacks = 0;


function attack(type) {
   character.health -= character[type]   
   let healthElem = document.querySelector("#health")
   healthElem.innerText = character.health.toString()
   attacks ++
   let attackElem = document.querySelector('#hitcounter')
   attackElem.innerText = attacks.toString()
}
