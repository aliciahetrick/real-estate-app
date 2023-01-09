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

    const homeComments = document.createElement('p')
    console.log(house.comments[0])
    if (house.comments[0]) {
      homeComments.textContent = `Comments: ${house.comments}`
    } else {
      homeComments.textContent = `Comments: none`
    }

    homeComments.classList.add('house-comments')

    const addCommentButton = document.createElement('button')
    addCommentButton.textContent = 'Add comment'

    const textArea = document.createElement('textarea')
    textArea.setAttribute('maxlength', 280)
    const textAreaSubmitButton = document.createElement('button')
    textAreaSubmitButton.textContent = 'Add comment'

    addCommentButton.addEventListener('click', function () {
      console.log('add comment')
      homeLocation.remove()
      homeLocation.remove()
      homeType.remove()
      homeComments.remove()
      addCommentButton.remove()

      rightCard.append(textArea, textAreaSubmitButton)

      rightCard.style.display = 'flex'
      rightCard.style.flexDirection = 'column'
      rightCard.style.padding = '3em'
    })

    textAreaSubmitButton.addEventListener('click', function () {
      console.log('comment added')
      textArea.remove()
      textAreaSubmitButton.remove()

      house.comments.push(` ${textArea.value}`)
      console.log(house.comments)
      renderHomes()
      rightCard.append(homeLocation, homeType, homeComments, addCommentButton)
    })

    const topCard = document.createElement('section')
    const bottomCard = document.createElement('section')
    const leftCard = document.createElement('section')
    const rightCard = document.createElement('section')

    topCard.append(homeAddress)
    bottomCard.append(leftCard, rightCard)
    leftCard.append(homeImage)
    rightCard.append(homeLocation, homeType, homeComments, addCommentButton)

    houseCard.append(topCard, bottomCard)

    houseCard.style.display = 'flex'
    houseCard.style.flexDirection = 'column'

    topCard.style.textAlign = 'center'

    bottomCard.style.display = 'flex'
    bottomCard.style.flexDirection = 'row'

    leftCard.style.textAlign = 'center'
    leftCard.style.flex = '1'

    rightCard.style.textAlign = 'center'
    rightCard.style.flex = '1'

    return houseCard
  })

  const houseList = document.querySelector('.house-list')
  houseList.replaceChildren(...arrOfHousesCreateElements)
}

renderHomes()
