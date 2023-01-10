const addHomeButton = document.querySelector('.add-home-button')
addHomeButton.addEventListener('click', function () {
  addHome()
})

/**
 * adds a home to the list of homes when "add home" button clicked
 */
function addHome() {
  const addressInput = document.querySelector('.add-address-input')
  const cityInput = document.querySelector('.add-city-input')
  const stateInput = document.querySelector('.add-state-input')
  const typeInput = document.querySelector('.add-type-input')
  const imageInput = document.querySelector('.add-image-file')

  const newHomeObject = {
    address: addressInput.value,
    image: `images/${imageInput.files[0].name}`,
    city: cityInput.value,
    state: stateInput.value,
    type: typeInput.value,
  }

  //adds home to data array
  arrOfHomes.push(newHomeObject)
  console.log('added new home', arrOfHomes)

  // removes all children nodes
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  //removes all children in "house-list"
  const houseList = document.querySelector('.house-list')
  removeAllChildNodes(houseList)

  renderHomes()
}
