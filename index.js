/**
 * returns the home card elements and renders them to a list of home cards
 */
function renderHomes() {
  const arrOfHousesCreateElements = arrOfHomes.map((house) => {
    // creates home cards
    const houseCard = document.createElement('section')
    houseCard.classList.add('house-card')

    // creates and sets home address
    const homeAddress = document.createElement('p')
    homeAddress.textContent = house.address
    homeAddress.classList.add('house-address')

    // creates and sets home image
    const homeImage = document.createElement('img')
    homeImage.src = `${house.image}`
    homeImage.classList.add('home-image')

    // creates and sets property type
    const homeType = document.createElement('p')
    homeType.innerHTML = `Type: ${house.type}`
    homeType.classList.add('house-type')

    // creates and sets home location
    const homeLocation = document.createElement('p')
    homeLocation.textContent = `Location: ${house.city}, ${house.state}`
    homeLocation.classList.add('house-city')

    // creates and sets home comments
    const homeComments = document.createElement('p')
    if (house.comments) {
      homeComments.textContent = `Comments: ${house.comments}`
    } else {
      homeComments.textContent = `Comments: none`
    }
    homeComments.classList.add('house-comments')

    // creates and sets new comment button
    const addCommentButton = document.createElement('button')
    addCommentButton.textContent = 'Add comment'

    // creates and sets comment new comment text area
    const textArea = document.createElement('textarea')
    textArea.setAttribute('maxlength', 280)
    const textAreaSubmitButton = document.createElement('button')
    textAreaSubmitButton.textContent = 'Add comment'

    // when user adds a wants to toggle to add a new comment
    addCommentButton.addEventListener('click', function () {
      // removes elements from card
      homeLocation.remove()
      homeLocation.remove()
      homeType.remove()
      homeComments.remove()
      addCommentButton.remove()

      // appends elements
      rightCard.append(textArea, textAreaSubmitButton)

      // styles right side of home card
      rightCard.style.display = 'flex'
      rightCard.style.flexDirection = 'column'
      rightCard.style.padding = '3em'

      // styles the "Add comment" button
      textAreaSubmitButton.style.all = 'unset'
      textAreaSubmitButton.style.color = '#fff5fa'
      textAreaSubmitButton.style.backgroundColor = 'rgb(100, 118, 239)'
      textAreaSubmitButton.style.borderRadius = '1em'
      textAreaSubmitButton.style.padding = '0.5em'
      textAreaSubmitButton.style.paddingLeft = '3em'
      textAreaSubmitButton.style.paddingRight = '3em'
      textAreaSubmitButton.style.margin = '1em'
    })

    // when user adds a new comment and clicks to "Add comment"
    textAreaSubmitButton.addEventListener('click', function () {
      // removes elements from card
      textArea.remove()
      textAreaSubmitButton.remove()

      // adds new comment to corresponsing house comment array
      house.comments.push(` ${textArea.value}`)

      //re-renders home cards
      renderHomes()

      // appends the right home card nav information
      rightCard.append(homeLocation, homeType, homeComments, addCommentButton)
    })

    // creates new elements for styling cards
    const topCard = document.createElement('section')
    const bottomCard = document.createElement('section')
    const leftCard = document.createElement('section')
    const rightCard = document.createElement('section')

    // appends data to corresponding new elements
    topCard.append(homeAddress)
    bottomCard.append(leftCard, rightCard)
    leftCard.append(homeImage)
    rightCard.append(homeLocation, homeType, homeComments, addCommentButton)

    // appends new elements to the home card
    houseCard.append(topCard, bottomCard)

    // styles comment button
    addCommentButton.style.all = 'unset'
    addCommentButton.style.color = '#fff5fa'
    addCommentButton.style.backgroundColor = 'rgb(100, 118, 239)'
    addCommentButton.style.borderRadius = '1em'
    addCommentButton.style.padding = '0.5em'
    addCommentButton.style.paddingLeft = '3em'
    addCommentButton.style.paddingRight = '3em'
    addCommentButton.style.margin = '1em'

    // styles home card
    houseCard.style.display = 'flex'
    houseCard.style.flexDirection = 'column'

    //styles top nav on card
    topCard.style.textAlign = 'center'

    // styles bottom content on card
    bottomCard.style.display = 'flex'
    bottomCard.style.flexDirection = 'row'

    // styles left side of home card
    leftCard.style.textAlign = 'center'
    leftCard.style.flex = '1'

    // styles right side of home card
    rightCard.style.textAlign = 'center'
    rightCard.style.display = 'flex'
    rightCard.style.flexDirection = 'column'
    rightCard.style.alignItems = 'center'
    rightCard.style.flex = '1'

    return houseCard
  })

  // selects and replaces house list with rendered home elements
  const houseList = document.querySelector('.house-list')
  houseList.replaceChildren(...arrOfHousesCreateElements)
}

renderHomes()
