let arrOfHomes = []

/**
 * creates instances of every home using data.js
 */
function createHomes() {
  for (let i = 0; i < data.length; i++) {
    let house = {
      address: data[i].address,
      image: data[i].image,
      city: data[i].city,
      state: data[i].state,
      type: data[i].type,
      comments: data[i].comments,
    }
    arrOfHomes.push(house)
  }
}

createHomes()
