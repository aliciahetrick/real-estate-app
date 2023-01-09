const addHomeButton = document.querySelector('.add-home-button')
addHomeButton.addEventListener('click', function () {
  addHome()
})

function addHome() {
  const addressInput = document.querySelector('.add-address-input')
  const cityInput = document.querySelector('.add-city-input')
  const stateInput = document.querySelector('.add-state-input')
  const typeInput = document.querySelector('.add-type-input')
  const imageInput = document.querySelector('.add-image-file')

  // imageInput.innerHTML = `<img src="${imageInput.value}" />`

  console.log(imageInput)
  console.log(imageInput.value)
  console.log(imageInput.files[0].name)

  const newHomeObject = {
    address: addressInput.value,
    image: `images/${imageInput.files[0].name}`,
    city: cityInput.value,
    state: stateInput.value,
    type: typeInput.value,
    comments: [],
  }

  //adds bookmark to data array
  arrOfHomes.push(newHomeObject)
  console.log('added new home', arrOfHomes)

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  //removes all li children of ul parent
  const houseList = document.querySelector('.house-list')
  removeAllChildNodes(houseList)

  renderHomes()
}
