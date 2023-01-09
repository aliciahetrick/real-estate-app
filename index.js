console.log(arrOfHomes)

function renderHomes() {
  const arrOfHousesCreateElements = arrOfHomes.map((house) => {
    const houseCard = document.createElement('section')
    houseCard.classList.add('house-card')

    const homeAddress = document.createElement('p')
    homeAddress.textContent = house.address
    homeAddress.classList.add('house-address')

    const homeImage = document.createElement('img')
    homeImage.src = `${house.image}`
    homeImage.classList.add('home-image')

    const homeType = document.createElement('p')
    homeType.innerHTML = `Type: ${house.type}`
    homeType.classList.add('house-type')

    const homeLocation = document.createElement('p')
    homeLocation.textContent = `Location: ${house.city}, ${house.state}`
    homeLocation.classList.add('house-city')

    console.log(house.type)
    console.log(homeType.textContent)

    const homeComments = document.createElement('p')
    homeComments.textContent = `Comments: ${house.comments}`
    homeComments.classList.add('house-comments')

    const leftCard = document.createElement('section')
    const middleCard = document.createElement('section')
    const rightCard = document.createElement('section')

    leftCard.append(homeAddress, homeLocation, homeType)
    middleCard.append(homeImage)
    rightCard.append(homeComments)

    houseCard.append(leftCard, middleCard, rightCard)

    return houseCard
  })

  const houseList = document.querySelector('.house-list')
  houseList.replaceChildren(...arrOfHousesCreateElements)
}

renderHomes()
