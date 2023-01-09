let arrOfHomes = []

function createHomes() {
  for (let i = 0; i < data.length; i++) {
    let house = {
      address: data[i].address,
      image: data[i].image,
      type: data[i].type,
      comments: data[i].comments,
    }
    arrOfHomes.push(house)
  }
}

createHomes()
