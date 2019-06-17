let character = {
   name: "enemy",
   attacks: {
      slap: 1,
      punch: 5,
      kick: 10
   },
   hits: 0,
   health: 100,
   items: []
}


let items = {
   fire: {
      name: 'FIRE',
      modifier: 3,
      description: 'BURNT'
   },
   ice: {
         name: 'ICE',
         modifier: 3,
         description: 'FROZEN'
      },
      fatality: {
         name: 'DEATH',
         modifier: 20,
         description: 'FATALITY'
      }
   }


let healthElem = document.querySelector("#health")
let attackElem = document.querySelector('#hitcounter')

function attack(type) {
   character.health -= character.attacks[type] + addMods() 
   character.hits++
   update()
}
function giveItem(item){
   character.items.push(items[item])
}

function update() {
   healthElem.innerText = character.health.toString()
   attackElem.innerText = character.hits.toString()
   if(character.health <=0) reset()
}
 update()


function addMods() {
   let modTotal = 0
   for (let i=0; i < character.items.length; i++){
      let item = character.items[i]
      modTotal += item.modifier
   }
   character.items = []
   return modTotal
}

function reset() {
      character.health = 100
      character.hits = 0
      update()
   }