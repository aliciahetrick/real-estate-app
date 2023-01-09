const addHomeButton = document.querySelector('.add-home-button')
addHomeButton.addEventListener('click', function () {
  console.log('clicked')
  addHome()
})

function addHome() {
  const addressInput = document.querySelector('.address-input')
  const imageInput = document.querySelector('.image-file')
  // imageInput.innerHTML = `<img src="${imageInput.value}" />`

  console.log(imageInput)
  console.log(imageInput.value)
  console.log(imageInput.files[0].name)

  const newHomeObject = {
    address: addressInput.value,
    image: `images/${imageInput.files[0].name}`,
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
